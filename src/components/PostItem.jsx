import React from "react";
import Button from "./UI/Button/Button";

function PostItem(props) {

    return (
        <div className="item">
            <div className="item__info">
                <ul className="item__info_tags">
                    {props.post.tags.map((tag, index) =>
                        <li className="tag" key={index}>{tag}</li>)
                    }
                </ul>
                <a className="item__info_name" href="">{props.post.title}</a>
                <p className="item__info_text">{props.post.description}</p>
            </div>

            <div className="item__btn">
                <Button
                    text='Read more'
                    theme='dark'/>
                <Button
                    text='Delete'
                    theme='dark border'
                    onClick={() => props.removePost(props.id)}/>
            </div>
        </div>
    );
}

export default PostItem;