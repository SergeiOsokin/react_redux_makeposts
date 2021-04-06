import React from 'react';

export default function Warning({text}) {
    return (
        <div className="alert alert-primary" role="alert">
           {text}
        </div>
    )
};