import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
    <div className='app-wrapper-content'>
      {/* <Profile /> */}
      <Dialogs />
      </div>
      <Footer />
    </div>
  );
};

export default App;
