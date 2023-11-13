import React from "react";
import {useParams} from "react-router-dom";

function PostPage() {

    return (
        <div className='post-page'>
            <div className="container">
                <div className="post">
                    <div className="post__info">
                        <h1>Title</h1>
                        <p>Description</p>
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