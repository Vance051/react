import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return  <div className={s.content}>
    <div>
    <img src="https://i0.wp.com/www.todosurf.com/wp-content/uploads/2018/10/RetroFish-produktbild-1.jpg?w=800&ssl=1" alt="?"></img>
   </div>
   <div>ava +desc</div>
   <MyPosts/>
  </div>
};

export default Profile;