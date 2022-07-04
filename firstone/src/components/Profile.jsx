import React from "react";
import s from './Profile.module.css';


const Profile = () => {
    return  <div className={s.content}>
    <div>
    <img src="https://i0.wp.com/www.todosurf.com/wp-content/uploads/2018/10/RetroFish-produktbild-1.jpg?w=800&ssl=1" alt="?"></img>
   </div>
   <div>ava +desc</div>
   <div>
    My post
<div className={s.posts}>
New post
</div>
<div className={s.item}>Post2</div>
<div className={s.item}>Post1</div>

   </div>
    Main content</div>
};

export default Profile;