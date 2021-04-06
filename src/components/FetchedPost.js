import React from 'react';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Loader from './Loader';

export default function FetchedPost() {
    const dispatch = useDispatch(); // с помощью этого создаем action creater, который принимает action
    const posts = useSelector(state => state.posts.fetchedPost); //обозначаем, что нужно "достать" и хранилища
    const loading = useSelector(state => state.app.loading);
    
    if (loading) {
        return <Loader />
    }

    if (!posts.length) return (<button onClick={() => dispatch(fetchPosts())} className="btn btn-primary">Загрузить</button>);

    return posts.map((post) => {
        return <Post post={post} key={post.id} />
    });
};