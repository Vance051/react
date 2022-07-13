import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    //     let posts = [
    //         { id: 1, post: 'Hi. how are U?', likesCount: 12 },
    //         { id: 2, post: 'It\' my firs post', likesCount: 15 },
    //     ]


    let postElement = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount} />)

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
            {postElement}
            {/* <Post message={postData[0].post} likesCount={postData[0].likesCount} />
            <Post message={postData[1].post} likesCount={postData[1].likesCount} /> */}
        </div>
    )
};

export default MyPosts;