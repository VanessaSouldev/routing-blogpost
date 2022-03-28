import React from 'react';
import posts from '../../data/posts.json';
import { useParams } from "react-router-dom";

function Blogpost() {

    const {id} = useParams();

    const check = posts.find(post => {
        return post.id === id
        })

    console.log(posts);

    return (
        <>
            <h1>{check.title}</h1>
            <h3>{check.date}</h3>
            <p>{check.content}</p>
        </>

    );
};

export default Blogpost;