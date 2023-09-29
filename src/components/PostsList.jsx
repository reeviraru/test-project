import React from "react";
import PostItem from "./PostItem";

function PostsList({posts, remove, title}) {
    return (
        <div className="list">
            <h2>{title}</h2>
            {posts.map((post, index) => <PostItem post={post} key={index} remove={remove}/>)}
        </div>
    );
}

export default PostsList;