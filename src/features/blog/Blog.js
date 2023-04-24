import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBlogLoading, selectBlogError, selectBlog, loadBlog } from './blogSlice';
import { formatDateString, formatTag, formatDateStringYearMonth } from '../../util/util';
import { Chip, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import './blog.css';


export const Blog = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectBlogLoading);
    const error = useSelector(selectBlogError);
    const blog = useSelector(selectBlog);


    useEffect(() => {
        dispatch(loadBlog());
    }, [dispatch]);


    if (loading === true) {
        return(
            <h2 style={{textAlign: "center"}}>Loading ... </h2>
        )
    }

    if (error === true) {
        console.log("Blog Slice has loaded with error.");
        return(
            <h2 style={{textAlign: "center"}}>Error in blog data! See console log.</h2>
        )
    }

    if (blog === undefined) {
        return(
            <h2 style={{textAlign: "center"}}>No blog found. Data is <i>undefined</i>, error likely at API. Check console log for more info.</h2>
        )
    }

    // we need a function that gets all the tags from all blog posts, but does not add duplicate tags,
    // it then renders these tags at the top of the page. should this be its own comp or part of this comp?
    // initially, these renders need to be buttons, none of them selected such that all blog posts are displayed (arranged according to date)

    // let's start from the output. initially, all blog posts will be shown based on no selector

    return(
        <section className="blog-list">
            <div>
            {blog && Object.keys(blog).length > 0 &&
            Object.entries(blog).map(([key, content]) => (
                
                <article key={key} className="blog-item">
                    <h2>
                        <Link
                            to={`/blog/${key}/${formatDateStringYearMonth(content.date)}/${content.fragment}`}
                            className="site-link-extra"
                        >
                            {content.title}
                        </Link>
                    </h2>
                    <span className="date-style">{formatDateString(content.date)}</span>
                    <ul className="tags">
                    { content?.tags && content.tags.map((tag) => (
                        <li key={tag}>
                            <Chip 
                                variant="outlined" 
                                color="info" 
                                size="small"
                                label={`${formatTag(tag)}`}
                            />
                        </li>
                    ))}
                    </ul>
                    <p>{content.preview}</p>
                    <Link
                        to={`/blog/${key}/${formatDateStringYearMonth(content.date)}/${content.fragment}`}
                    >
                        <Button variant="contained">
                            Read more
                        </Button>
                    </Link>
                </article>    
                
                
            ))}
            </div>
        </section>
    );
};
