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
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
        <img src="https://i0.wp.com/www.todosurf.com/wp-content/uploads/2018/10/RetroFish-produktbild-1.jpg?w=800&ssl=1" alt="?"></img>
       </div>
       <div>ava +desc</div>
       <div>
        My post
<div>
  New post
  </div>
  <div>Post1</div>
  <div>Post2</div>

       </div>
        Main content</div>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default App;
