import React from 'react';
import Hero from '../../components/hero/index.js';
import { Blog } from '../../features/blog/Blog.js';

const BlogPage = () => {

    return (
        <>
            <Hero
                displayText="Blog"
                type="projects"
            />
            <main className="container">
                <Blog />
            </main>
        </>
    );
};

export default BlogPage;
