import React, {useEffect, useState} from "react";
import InputGroup from "./UI/InputGroup/InputGroup";
import TextareaGroup from "./UI/TextareaGroup/TextareaGroup";
import Button from "./UI/Button/Button";
import Tags from "./UI/Tags/Tags";

function PostForm({create, tags}) {
    const [post, setPost] = useState({
        title: '',
        description: '',
        tags: []
    });
    const [state, setState] = useState({
        titleValid: false,
        descriptionValid: false,
        formValid: false,
    });

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

    function handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        setPost({...post, [name]: value});
        validateField(name, value);
    }

    function validateField(fieldName, fieldValue) {
        const fieldInput = document.querySelector(`[name="${fieldName}"]`);
        let titleValid = state.titleValid;
        let descriptionValid = state.descriptionValid;

        switch(fieldName) {
            case 'title':
                titleValid = fieldValue.length < 10 ? false : true;
                titleValid
                    ? fieldInput.classList.remove('is-invalid')
                    : fieldInput.classList.add('is-invalid')
                break;
            case 'description':
                descriptionValid = fieldValue.length < 20 ? false : true;
                descriptionValid
                    ? fieldInput.classList.remove('is-invalid')
                    : fieldInput.classList.add('is-invalid')
                break;
            default:
                break;
        }

        setState({
            ...state,
            titleValid: titleValid,
            descriptionValid: descriptionValid
        });
    }

    useEffect(() => {
        function validateForm() {
            setState({
                ...state,
                formValid: state.titleValid && state.descriptionValid
            });
        }

        validateForm();
    }, [state.titleValid, state.descriptionValid]);

    return (
        <div className='posts__form'>
            <h2>Create post</h2>
            <form id="post-form" method="post">
                <InputGroup
                    value={post.title}
                    name='title'
                    type='text'
                    placeholder='Please enter at least 10 characters...'
                    title='Title'
                    required
                    onChange={(event) => handleInput(event)}/>
                <Tags
                    tags={tags}
                    tagsArr={post.tags}
                    tagsList={tagsList}/>
                <TextareaGroup
                    value={post.description}
                    name='description'
                    placeholder='Please enter at least 20 characters...'
                    title='Description'
                    required
                    onChange={(event) => handleInput(event)}/>
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