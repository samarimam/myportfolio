import './App.css';
import React from "react";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import MyNavbar from "./components/my-navbar/my-navbar.component";

const App = () => {
  return (
    <div className="App">
     <MyNavbar />
     <MyTitleMessage />
     <MyCarousal />
    </div>
  );
};

export default App;
