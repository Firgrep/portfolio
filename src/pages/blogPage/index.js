import React from 'react';
import Hero from '../../components/hero/index.js';
import { Blog } from '../../features/blog/Blog.js';
import ErrorBoundary from '../../app/ErroBoundary.js';

const BlogPage = () => {

    return (
        <>
            <Hero
                displayText="Blog"
                type="projects"
            />
            <main className="container">
                <ErrorBoundary fallback="Error in Blog component. Check console log for details.">
                    <Blog /> 
                </ErrorBoundary>
            </main>
        </>
    );
};

export default BlogPage;
