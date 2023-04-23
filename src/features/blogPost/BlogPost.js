import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBlogPost } from './blogPostSlice';
import { selectBlogPostsLoading, selectBlogPostsError, selectBlogPostBodyById } from './blogPostSlice';
import { BlogPostHeader } from './blogPostHeader';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import './blogPost.css';

export const BlogPost = ({id, setHeroText}) => {
    const dispatch = useDispatch();
    const loading = useSelector(selectBlogPostsLoading);
    const error = useSelector(selectBlogPostsError);
    const blogPostBody = useSelector(state => selectBlogPostBodyById(state, id));
    const [postBodyClean, setPostBodyClean] = useState("");

    

    useEffect(() => {
        dispatch(loadBlogPost(id));
    }, [dispatch, id]);

    useEffect(() => {
        const markedOptions = {
            renderer: new marked.Renderer(),
            highlight: function(code, lang) {
                const hljs = require('highlight.js');
                const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                return hljs.highlight(code, { language }).value;
            },
            langPrefix: 'hljs language-',
        }
        
        const cleanPostBody = async () => {
            if (blogPostBody?.body) {
                try {
                // const response = await fetch(Test);
                // const markdownText = await response.text();
                
                
                const html = marked.parse(blogPostBody.body, markedOptions);
                const sanitizedHtml = DOMPurify.sanitize(html);
                
                setPostBodyClean(sanitizedHtml);
                } catch(error) {
                    console.error(error);
                }
            }
        }
        cleanPostBody();
    }, [blogPostBody?.body])

    if (loading === true) {
        return(
            <h2>Loading ... </h2>
        )
    }

    if (error === true) {
        return(
            <h2>Error in blog post data!</h2>
        )
    }

    if (blogPostBody === undefined) {
        return(
            <h2>No blog post found. Data is <i>undefined</i>, error likely at API. Check console log for more info.</h2>
        )
    }

    return(
        <>

            <BlogPostHeader setHeroText={setHeroText} />
            { blogPostBody?.body && 
                <div 
                dangerouslySetInnerHTML={{__html: postBodyClean}}
                style={{
                    backgroundColor: "white", 
                    padding: "15px", 
                    borderRadius: "25px",
                    boxShadow: "5px 10px 18px #888888"
                }}
                ></div>
            }
            
        </>
    );
};