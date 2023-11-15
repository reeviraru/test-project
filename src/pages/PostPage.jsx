import React from "react";
import usePostStore from "../store/postStore";
import {useHistory, useParams} from "react-router-dom";
import Button from "../components/UI/Button/Button";

function PostPage() {
    const { posts } = usePostStore();
    const { id } = useParams();
    const post = posts.find(item => item.id === Number(id));
    const router = useHistory();

    return (
        <div className='post-page'>
            <div className="container">
                <div className="post">
                    <div className="post__info">
                        <h1>{post.title}</h1>
                        <p>{post.description}</p>
                    </div>
                    <ul className="post__tags">
                        {post.tags.map(item =>
                            <li className="item" key={item}>{item}</li>
                        )}
                    </ul>
                    <Button
                        type='button'
                        text='Go back'
                        theme='dark border'
                        onClick={router.goBack}/>
                </div>
            </div>
        </div>
    );
}

export default PostPage;