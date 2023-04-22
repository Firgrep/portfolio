import React from 'react';
import { useParams } from 'react-router-dom';


const BlogPostPage = () => {
    const { id, blogpost } = useParams();

    return(
        <>
            <p>Blogpostpage for:</p>
            <p>{id}</p>
            <p>{blogpost}</p>
        </>
    );
};

export default BlogPostPage;
