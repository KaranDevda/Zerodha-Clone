require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");

// Import Models
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// Enable CORS for React frontend (localhost and production environments)
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Express Session Configuration
app.use(
  session({
    secret: process.env.SECRET || "zerodhaclonesecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
      httpOnly: true,
    },
  })
);

// Initialize Passport & Session Middleware
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(UserModel.authenticate()));
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

// --- AUTHENTICATION ROUTES ---

// Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new UserModel({ username, email });
    const registeredUser = await UserModel.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      return res.status(200).json({
        success: true,
        message: "User registered successfully",
        user: { username: registeredUser.username, email: registeredUser.email },
      });
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

// Login Route
app.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).json({
    success: true,
    message: "Logged in successfully",
    user: req.user.username,
  });
});

// Logout Route
app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ success: true, message: "Logged out successfully" });
  });
});

// --- CORE DATA ROUTES ---

// Fetch All Holdings
app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch All Positions
app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create New Order
app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    res.json({ message: "Order saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// --- SEEDING DATA ROUTES ---

// Seed Holdings
app.get("/addHoldings", async (req, res) => {
  try {
    let tempHoldings = [
      { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
      { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
      { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
      { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: true },
      { name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%" },
      { name: "KPITTECH", qty: 5, avg: 250.3, price: 266.45, net: "+6.45%", day: "+3.54%" },
      { name: "M&M", qty: 2, avg: 809.9, price: 779.8, net: "-3.72%", day: "-0.01%", isLoss: true },
      { name: "RELIANCE", qty: 1, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%" },
      { name: "SBIN", qty: 4, avg: 324.35, price: 430.2, net: "+32.63%", day: "-0.34%", isLoss: true },
      { name: "SGBMAY29", qty: 2, avg: 4727.0, price: 4719.0, net: "-0.17%", day: "+0.15%" },
      { name: "TATAPOWER", qty: 5, avg: 104.2, price: 124.15, net: "+19.15%", day: "-0.24%", isLoss: true },
      { name: "TCS", qty: 1, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%", isLoss: true },
      { name: "WIPRO", qty: 4, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%" },
    ];

    await HoldingsModel.deleteMany({});
    await HoldingsModel.insertMany(tempHoldings);
    res.send("Holdings added successfully!");
  } catch (error) {
    res.status(500).send("Error adding holdings: " + error.message);
  }
});

// Seed Positions
app.get("/addPositions", async (req, res) => {
  try {
    let tempPositions = [
      {
        product: "CNC",
        name: "EVEREADY",
        qty: 2,
        avg: 316.27,
        price: 312.35,
        net: "+0.58%",
        day: "-1.24%",
        isLoss: true,
      },
      {
        product: "CNC",
        name: "JUBLFOOD",
        qty: 1,
        avg: 312.35,
        price: 308.2,
        net: "+10.04%",
        day: "-1.33%",
        isLoss: true,
      },
    ];

    await PositionsModel.deleteMany({});
    await PositionsModel.insertMany(tempPositions);
    res.send("Positions added successfully!");
  } catch (error) {
    res.status(500).send("Error adding positions: " + error.message);
  }
});

// MongoDB Connection & Server Initialization
mongoose
  .connect(uri)
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.error("DB Connection Error:", err.message));

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}!`);
});