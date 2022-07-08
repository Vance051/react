import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    return (
        <div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                <button>Add Post</button>>
                </div>

            </div>
           <h3>My posts</h3>
            <div className={s.posts}>
                New post
            </div>
            <Post message='Hi. how are U?' likeCount='12' />
            <Post message="It' my firs post" likeCount='21' />
        </div>
    )
};

export default MyPosts;