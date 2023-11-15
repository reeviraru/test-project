import React from "react";
import { useHistory } from 'react-router-dom';
import Button from "./UI/Button/Button";

function PostItem(props) {
    const router = useHistory();

    return (
        <div className="item">
            <div className="item__info">
                <ul className="item__info_tags">
                    {props.post.tags.map((tag, index) =>
                        <li className="tag" key={index}>{tag}</li>)
                    }
                </ul>
                <a className="item__info_name" href={`/posts/${props.post.id}`}>{props.post.title}</a>
                <p className="item__info_text">{props.post.description}</p>
            </div>

            <div className="item__btn">
                <Button
                    text='Read more'
                    theme='dark'
                    onClick={() => router.push(`/posts/${props.post.id}`)}/>
                <Button
                    text='Delete'
                    theme='dark border'
                    onClick={() => props.removePost(props.id)}/>
            </div>
        </div>
    );
}

export default PostItem;