import React from 'react';

export default function Post({post}) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text"></p>
            </div>
        </div>
    )
};