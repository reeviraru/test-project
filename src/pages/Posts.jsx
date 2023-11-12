import React, { useEffect, useState, useMemo } from "react";
import PostForm from "../components/PostForm";
import PostsList from "../components/PostsList";
import PostFilter from "../components/PostFilter";
import { useFilter } from '../hooks/useFilter';

function Posts() {
    const [posts, setPosts] = useState([{title: 'Компоненты высшего порядка', description: 'Компонент высшего порядка — это продвинутый метод в React для повторного использования логики компонента. Как таковые не являются частью React API. Это шаблон, возникающий из композиционной природы React.', tags: ['Theme #1', 'Theme #3'], id: 0}, {title: 'Интеграция с другими библиотеками', description: 'React можно использовать в любом веб-приложении. Его можно встроить в другие приложения, и, при некоторой осторожности, другие приложения могут быть встроены в React.', tags: ['Theme #1', 'Theme #5', 'Theme #6'], id: 1}]);
    const [tags, setTags] = useState(['Theme #1', 'Theme #2', 'Theme #3', 'Theme #4', 'Theme #5', 'Theme #6', 'Theme #7']);
    const [filter, setFilter] = useState([]);
    const sortPosts = useFilter(posts, filter);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post));
    }

    return (
        <div className="posts-page">
            <div className='container'>
                <div className='posts'>
                    <PostFilter
                        tags={tags}
                        setFilter={setFilter}/>
                    <PostForm
                        create={createPost}
                        tags={tags}/>
                    <PostsList
                        posts={sortPosts}
                        removePost={removePost}
                        title='Section #1'/>
                </div>
            </div>
        </div>
    );
}

export default Posts;