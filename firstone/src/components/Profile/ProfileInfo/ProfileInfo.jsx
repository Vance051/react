import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div className={s.img}>
        <img src="https://i0.wp.com/www.todosurf.com/wp-content/uploads/2018/10/RetroFish-produktbild-1.jpg?w=800&ssl=1" alt="?"></img>
      </div>
      <div className={s.descriptionBlock}>
        ava +desc
      </div>
    </div >
  )
};

export default ProfileInfo;