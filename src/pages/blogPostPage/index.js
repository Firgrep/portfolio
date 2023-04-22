import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogPost } from '../../features/blogPost/BlogPost';
import ErrorBoundary from '../../app/ErroBoundary';
import Hero from '../../components/hero';


const BlogPostPage = () => {
    const [heroText, setHeroText] = useState("Individual Project");
    const { id } = useParams();

    return(
        <>
            <Hero
                displayText={heroText}
                type="projects"
            />
            <main className="container">
                <ErrorBoundary fallback="Error in BlogPost component. Check console log for details.">
                    <BlogPost 
                        id={id} 
                        setHeroText={setHeroText}
                    />
                </ErrorBoundary>
            </main>

            
        </>
    );
};

export default BlogPostPage;
