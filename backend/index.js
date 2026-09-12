require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);  
app.use(bodyParser.json());

// Fetch Holdings
app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists with this email." });
    }

    const newUser = new UserModel({ username, email, password });
    await newUser.save();

    res.status(201).json({ success: true, message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide both email and password." });
    }

    // Check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password." });
    }

    // Verify password
        // Verify password (bcrypt-hashed comparison, not plaintext)
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password." });
    }

    res.status(200).json({
      success: true,
      message: "Login successful!",
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Fetch Positions
app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add or verify this in backend/index.js
app.get("/allWatchlist", async (req, res) => {
  const watchlist = [
    { name: "INFY", price: 1555.45, percent: "-1.60%", isDown: true },
    { name: "ONGC", price: 116.8, percent: "-0.09%", isDown: true },
    { name: "TCS", price: 3194.8, percent: "-0.25%", isDown: true },
    { name: "KPITTECH", price: 266.45, percent: "+3.54%", isDown: false },
    { name: "QUICKHEAL", price: 308.55, percent: "-0.15%", isDown: true },
    { name: "WIPRO", price: 577.75, percent: "+0.32%", isDown: false },
    { name: "M&M", price: 779.8, percent: "-0.01%", isDown: true },
    { name: "RELIANCE", price: 2112.4, percent: "+1.44%", isDown: false },
    { name: "HUL", price: 512.4, percent: "+1.04%", isDown: false },
  ];
  res.json(watchlist);
});

// Fetch Orders
app.get("/allOrders", async (req, res) => {
  try {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Place New Order (BUY or SELL)
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    // 1. Save the transaction into Orders history
    let newOrder = new OrdersModel({
      name,
      qty: Number(qty),
      price: Number(price),
      mode,
    });
    await newOrder.save();

    // 2. Adjust Holdings based on BUY or SELL
    if (mode === "BUY") {
      let existingStock = await HoldingsModel.findOne({ name });
      if (existingStock) {
        const totalQty = existingStock.qty + Number(qty);
        const newAvg =
          (existingStock.avg * existingStock.qty + Number(price) * Number(qty)) /
          totalQty;

        existingStock.qty = totalQty;
        existingStock.avg = Number(newAvg.toFixed(2));
        existingStock.price = Number(price);
        await existingStock.save();
      } else {
        let newHolding = new HoldingsModel({
          name,
          qty: Number(qty),
          avg: Number(price),
          price: Number(price),
          net: "+0.00%",
          day: "+0.00%",
        });
        await newHolding.save();
      }
    } else if (mode === "SELL") {
      let existingStock = await HoldingsModel.findOne({ name });
      if (existingStock) {
        if (existingStock.qty <= Number(qty)) {
          // If selling all or more than owned, remove stock from holdings
          await HoldingsModel.deleteOne({ name });
        } else {
          // Deduct quantity
          existingStock.qty -= Number(qty);
          await existingStock.save();
        }
      }
    }

    res.json({ success: true, message: "Order processed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

mongoose.connect(uri).then(() => {
  app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
  });
});