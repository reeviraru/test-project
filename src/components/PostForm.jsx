import React, {useEffect, useState} from "react";
import InputGroup from "./UI/InputGroup/InputGroup";
import TextareaGroup from "./UI/TextareaGroup/TextareaGroup";
import Button from "./UI/Button/Button";
import Tags from "./UI/Tags/Tags";

function PostForm({create}) {
    const [post, setPost] = useState({title: '', description: '', tags: []});

    const createPost = (e) => {
        e.preventDefault();
        const newPost = {...post};
        create(newPost);
        setPost({title: '', description: '', tags: []});
    }

    function tagsList(selectTags) {
        setPost({...post, tags: selectTags});
    }

    return (
        <div className='container'>
            <div className='posts'>
                <form>
                    <InputGroup
                        value={post.title}
                        type='text'
                        placeholder='Text here...'
                        title='Title'
                        onChange={e => setPost({...post, title: e.target.value})}/>
                    <Tags
                        tagsList={tagsList}/>
                    <TextareaGroup
                        value={post.description}
                        placeholder='Text here...'
                        title='Description'
                        onChange={e => setPost({...post, description: e.target.value})}/>
                    <Button
                        text='Create'
                        theme='dark'
                        onClick={createPost}/>
                </form>
            </div>
        </div>
    );
}

export default PostForm;