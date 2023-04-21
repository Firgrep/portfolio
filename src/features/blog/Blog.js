import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBlogState, selectBlog, loadBlog } from './blogSlice';
import { formatDateString } from '../../util/util';
import { Chip } from "@mui/material";
import './blog.css';


export const Blog = () => {
    const dispatch = useDispatch();
    const blogState = useSelector(selectBlogState);
    const blog = useSelector(selectBlog);


    useEffect(() => {
        dispatch(loadBlog());
    }, [dispatch]);


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

    // we need a function that gets all the tags from all blog posts, but does not add duplicate tags,
    // it then renders these tags at the top of the page. should this be its own comp or part of this comp?
    // initially, these renders need to be buttons, none of them selected such that all blog posts are displayed (arranged according to date)

    // let's start from the output. initially, all blog posts will be shown based on no selector

    console.log(Object.entries(blog))
    return(
        <section>
            {blog && Object.keys(blog).length > 0 &&
            Object.entries(blog).map(([key, content]) => (
                
                <article key={key}>
                    <h2>{content.title}</h2>
                    <ul className="tags">
                    { content.tags.map((tag) => (
                        <li key={tag}>
                            <Chip 
                                variant="outlined" 
                                color="primary" 
                                size="small"
                                label={`${tag}`}
                            />
                        </li>
                    ))}
                    </ul>
                    <span>{formatDateString(content.date)}</span>
                    <p>{content.preview}</p>
                    <p>Read more</p>
                </article>    
                
                
            ))}
        </section>
    );
};
