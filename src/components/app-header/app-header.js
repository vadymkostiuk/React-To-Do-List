import React from "react";

import './app-header.css'

const AppHeader = ({name, liked, allPosts}) => {
    return (
        <div className='app-header d-flex'>
            <h1>{name}</h1>
            <h2>{allPosts} posts, like {liked}</h2>
        </div>
    )
}

export default AppHeader