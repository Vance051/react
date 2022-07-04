import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://avatars.mds.yandex.net/i?id=c01aed23247cdc1544140db803a96edd-6578571-images-thumbs&n=13"
          alt="???"
        />
      </header>
      <nav className="nav">
        <div>Profile</div>
        <div>Messages</div>
      </nav>
      <div className="content">Main content</div>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default App;
