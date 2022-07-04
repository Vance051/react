import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove</button>

            </div>
            My posts
            <div className={s.posts}>
                New post
            </div>
            <Post/>
            <Post/>
        </div>
    )
};

export default MyPosts;