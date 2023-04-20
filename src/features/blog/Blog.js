import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBlogState, selectBlog, loadBlog } from './blogSlice';

export const Blog = () => {
    const dispatch = useDispatch();
    const blogState = useSelector(selectBlogState);
    const blog = useSelector(selectBlog);

    let blogList = useRef([])

    useEffect(() => {
        dispatch(loadBlog());
    }, [dispatch]);

    useEffect(() => {
        blogList.current = Object.keys(blog);
    }, [blog])

    if (blogState.isLoading === true) {
        return(
            <h2>Loading ... </h2>
        )
    }

    if (blogState.hasError === true) {
        console.log("Blog Slice has loaded with eror.");
        return(
            <h2>Error in blog data! See console log.</h2>
            
        )
    }

    if (blogState.blog === undefined) {
        return(
            <h2>No blog found. Data is <i>undefined</i>, error likely at API. Check console log for more info.</h2>
        )
    }

    return(
        <section>
            {blog && Object.keys(blog).length > 0 &&
            Object.keys(blog)
            }
        </section>
    );
};
