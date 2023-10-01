import React, { useState } from "react";
import PostForm from "../components/PostForm";
import PostsList from "../components/PostsList";

function Posts() {
    const [posts, setPosts] = useState([{title: 'Компоненты высшего порядка', description: 'Компонент высшего порядка — это продвинутый метод в React для повторного использования логики компонента. Как таковые не являются частью React API. Это шаблон, возникающий из композиционной природы React.', tags: [], id: 0}, {title: 'Интеграция с другими библиотеками', description: 'React можно использовать в любом веб-приложении. Его можно встроить в другие приложения, и, при некоторой осторожности, другие приложения могут быть встроены в React.', tags: [], id: 1}]);
    
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post));
    }

    return (
        <div className='container'>
            <div className='posts'>
                <PostForm create={createPost}/>
                <PostsList
                    posts={posts}
                    removePost={removePost}
                    title='Section #1'/>
            </div>
        </div>
    );
}

export default Posts;