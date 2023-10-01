import React from "react";
import PostItem from "./PostItem";

function PostsList({posts, removePost, title}) {
    return (
        <div className="posts__list">
            <h2>{title}</h2>
            {posts.map((post, index) => <PostItem post={post} key={index} removePost={removePost} id={post.id}/>)}
        </div>
    );
}

export default PostsList;