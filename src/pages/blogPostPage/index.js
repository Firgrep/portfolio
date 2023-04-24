import React, { useState } from 'react';
import { BlogPost } from '../../features/blogPost/BlogPost';
import ErrorBoundary from '../../app/ErroBoundary';
import Hero from '../../components/hero';


const BlogPostPage = () => {
    const [heroText, setHeroText] = useState("Blog Post");

    return(
        <>
            <Hero
                displayText={heroText}
                type="blog"
            />
            <main className="container">
                <ErrorBoundary fallback="Error in BlogPost component (or children). Check console log for details.">
                    <BlogPost 
                        setHeroText={setHeroText}
                    />
                </ErrorBoundary>
            </main>

            
        </>
    );
};

export default BlogPostPage;
