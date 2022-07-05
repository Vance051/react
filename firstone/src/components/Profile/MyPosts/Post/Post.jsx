import React from "react";
import s from './Post.module.css';


const Post = (props) => {
        return (
        <div className={s.item}>
            <img src="https://sun6-22.userapi.com/s/v1/ig2/IMKRu0bBwHVSTpqIr0lzgrTrRfPyPI1vD2NcygMkrYWzrIE5LOE8vGKbH4o-XWhZD0591tDbH905_oVKMcVhxjoc.jpg?size=200x200&quality=95&crop=102,102,819,819&ava=1" alt="&&" />
            {props.message}
           <div>
            <span> like  </span>{props.likeCount}
            </div>
        </div>
    )
};

export default Post;