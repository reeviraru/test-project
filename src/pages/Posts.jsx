import React, {useState} from "react";
import PostForm from "../components/PostForm";
import PostsList from "../components/PostsList";
import PostFilter from "../components/PostFilter";
import {useFilter} from '../hooks/useFilter';
import usePostStore from "../store/postStore";

function Posts() {
    const {posts, addPost, removePost} = usePostStore();

    console.log('posts', posts)

    const [tags, setTags] = useState(['Theme #1', 'Theme #2', 'Theme #3', 'Theme #4', 'Theme #5', 'Theme #6']);
    const [filter, setFilter] = useState([]);
    const sortPosts = useFilter(posts, filter);

    return (
        <div className="posts-page">
            <div className='container'>
                <div className='posts'>
                    <PostForm
                        create={addPost}
                        tags={tags}/>
                    <PostFilter
                        tags={tags}
                        setFilter={setFilter}/>
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
