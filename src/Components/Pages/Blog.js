import React from 'react';
import posts from '../../data/posts.json'
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <section>
            <h1>Blog overzicht!</h1>
            <h3>Aantal blogposts: {posts.length}</h3>
            <ol>
                {posts.map((post) => {
                return <li key={post.id}><Link to={`blog/${post.id}`}>{post.title}</Link></li>
                })}
            </ol>
        </section>
    );
};

export default Blog;