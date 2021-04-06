import React from 'react';
import Post from './Post';
import { connect } from 'react-redux'

const Posts = ({syncPost}) => {
    if(!syncPost.length) return (<p className="text-center">Постов пока нет</p>);

    return syncPost.map((post) => {
        return <Post post={post} key={post.id} />
    });
};
// преобразуем нужные поля стейта в пропсы для компонента.  Стейт берем из редукса, в данном случае из postsReducer
const mapStateToProps = (state) => {
    return {
        syncPost: state.posts.posts
    };
};

export default connect(mapStateToProps, null)(Posts);