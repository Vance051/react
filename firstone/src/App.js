import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Nav />
    <div className='app-wrapper-content'>
      <Routes>

      {/* <Route path="/" element={<App />} /> */}
      <Route path="/profile" element={<Profile />}/>
      <Route path="/dialogs/*" element={<Dialogs />}/>
      <Route path="/news" element={<News />}/>
      <Route path="/music" element={<Music />}/>
      <Route path="/settings" element={<Settings />}/>
      </Routes>
      </div>
      
      <Footer />
    </div>
    </BrowserRouter>
  );
};

export default App;
