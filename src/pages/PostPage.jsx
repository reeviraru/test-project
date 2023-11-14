import React from "react";
import {useParams} from "react-router-dom";
import usePostStore from "../store/postStore";

function PostPage() {
    const {id} = useParams()
    const {posts} = usePostStore()
    const post = posts.find(it => it.id === Number(id))

    return (
        <div className='post-page'>
            <div className="container">
                <div className="post">
                    <div className="post__info">
                        <h1>{post.title}</h1>
                        <p>{post.description}</p>
                    </div>
                    <ul className="post__tags">
                        <li className="item">Тут тег.</li>
                        <li className="item">И тут тоже.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PostPage;
