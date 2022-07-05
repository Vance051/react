import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
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
            <Post message='Hi. how are U?' likeCount='12'/>
            <Post message= "It' my firs post" likeCount='21'/>
        </div>
    )
};

export default MyPosts;