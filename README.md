# Zerodha Clone

A full-stack web application replicating the core trading dashboard, holdings, positions, order execution, and account management functionalities of the Zerodha platform. Built using React for the frontend and Node.js/Express with MongoDB for the backend.

---

## Features

- **Interactive Watchlist**: Real-time ticker list featuring search, filtering, and instant access to buy and sell actions.
- **Order Execution**: Buy and sell modal interfaces allowing stock order placements directly from the watchlist.
- **Dashboard Overview**: Summary of portfolio equity, margins, and account balances.
- **Holdings & Positions**: Detailed tracking of long-term holdings and active day-trading positions with live gain/loss indicators.
- **Responsive Navigation**: Seamless switching across Dashboard, Orders, Holdings, Positions, Funds, and Apps sections.

---

## Tech Stack

### Frontend
- **React.js** (Functional components, Hooks, Context API)
- **React Router DOM** (Client-side routing)
- **Axios** (HTTP requests)
- **CSS3 / Flexbox** (Custom styling)

### Backend
- **Node.js** & **Express.js** (REST API)
- **MongoDB** & **Mongoose** (Database ORM)
- **Cors** & **Body-Parser** (Middleware)

---

## Project Structure

```text
Zerodha-Clone/
├── backend/          # Express server and MongoDB models
│   ├── index.js
│   ├── package.json
│   └── models/
├── dashboard/        # React application for trading dashboard
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── index.css
│   │   └── index.js
│   └── package.json
└── frontend/         # React application for marketing and authentication pages
    ├── public/
    ├── src/
    └── package.json
