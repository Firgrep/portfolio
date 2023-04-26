import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBlogPost } from './blogPostSlice';
import { useParams } from 'react-router-dom';
import { selectBlogPostsLoading, selectBlogPostsError, selectBlogPostBodyById } from './blogPostSlice';
import { BlogPostHeader } from './blogPostHeader';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import './blogPost.css';


export const BlogPost = ({setHeroText}) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const loading = useSelector(selectBlogPostsLoading);
    const error = useSelector(selectBlogPostsError);
    const blogPostBody = useSelector(state => selectBlogPostBodyById(state, id));
    const [postBodyClean, setPostBodyClean] = useState("");

    useEffect(() => {
        if (!blogPostBody) {
            dispatch(loadBlogPost(id));
        }
    }, [dispatch, id, blogPostBody]);

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
                const html = marked.parse(blogPostBody.body, markedOptions);
                const sanitizedHtml = DOMPurify.sanitize(html);
                
                setPostBodyClean(sanitizedHtml);
                } catch(error) {
                    console.error(error);
                }
            }
        }
        cleanPostBody();

    }, [blogPostBody?.body]);

    if (loading === true) {
        return(
            <h2 style={{textAlign: "center"}}>Loading ... </h2>
        )
    }

    if (error === true) {
        return(
            <h2 style={{textAlign: "center"}}>Error in blog post data!</h2>
        )
    }

    if (blogPostBody === undefined) {
        return(
            <h2 style={{textAlign: "center"}}>No blog post found. Data is <i>undefined</i>, error likely at API. Check console log for more info.</h2>
        )
    }

    return(
        <>
            <article 
                style={{
                    transform: "translateY(-150px)",
                    backgroundColor: "white", 
                    padding: "15px", 
                    borderRadius: "0",
                    boxShadow: "5px 5px 10px #888888",
                    paddingBottom: "75px",
                    marginBottom: "-75px"
                }}
            >
            <BlogPostHeader setHeroText={setHeroText} />
            { blogPostBody?.body && 
                <section className="blog-post-contents" dangerouslySetInnerHTML={{__html: postBodyClean}}></section>
            }
            </article>
        </>
    );
};
