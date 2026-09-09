import React from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Home = () => {
  return (
    <GeneralContextProvider>
      <TopBar />
      <div className="dashboard-container">
        <WatchList />
        <Dashboard />
      </div>
    </GeneralContextProvider>
  );
};

export default Home;