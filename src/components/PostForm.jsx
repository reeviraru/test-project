import React, {useEffect, useState} from "react";
import InputGroup from "./UI/InputGroup/InputGroup";
import TextareaGroup from "./UI/TextareaGroup/TextareaGroup";
import Button from "./UI/Button/Button";
import Tags from "./UI/Tags/Tags";

function PostForm({create}) {
    const [post, setPost] = useState({title: '', description: '', tags: []});

    const createPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        };
        create(newPost);
        setPost({title: '', description: '', tags: []});
    }

    function tagsList(tagsArr) {
        setPost({...post, tags: tagsArr});
    }

    return (
        <div className='posts__form'>
            <form name="post_form" method="post" action="">
                <InputGroup
                    value={post.title}
                    name='post_title'
                    type='text'
                    placeholder='Text here...'
                    title='Title'
                    required
                    onChange={e => setPost({...post, title: e.target.value})}/>
                <Tags
                    tagsArr={post.tags}
                    tagsList={tagsList}/>
                <TextareaGroup
                    value={post.description}
                    name='post_description'
                    placeholder='Text here...'
                    title='Description'
                    required
                    onChange={e => setPost({...post, description: e.target.value})}/>
                <Button
                    type='submit'
                    text='Create'
                    theme='dark'
                    onClick={createPost}
                    disabled={!state.formValid}/>
            </form>
        </div>
    );
}

export default PostForm;