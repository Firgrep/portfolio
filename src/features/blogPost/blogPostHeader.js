import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBlogLoading, selectBlogError, selectBlogDetailsById, loadBlog } from '../blog/blogSlice';
import { useParams } from 'react-router-dom';
import { Chip } from "@mui/material";
import { formatDateString, formatTag } from '../../util/util';
import '../blog/blog.css';


export const BlogPostHeader = ({ setHeroText }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const loading = useSelector(selectBlogLoading);
    const error = useSelector(selectBlogError);
    const blogPostDetails = useSelector(state => selectBlogDetailsById(state, id));

    useEffect(() => {
        dispatch(loadBlog());
    }, [dispatch]);

    useEffect(() => {
        if (blogPostDetails) {
            setHeroText(blogPostDetails.title);
        }
    }, [
        blogPostDetails,
        setHeroText
    ]);

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

    if (blogPostDetails === undefined) {
        return(
            <h2 style={{textAlign: "center"}}>No blog post details found. Data is <i>undefined</i>, error likely at API. Check console log for more info.</h2>
        )
    }

    return(
        <>
            {blogPostDetails && 
                <section style={{marginBottom: "25px"}}>
                    <h1>{blogPostDetails.title}</h1>
                    <ul className="tags">
                    { blogPostDetails?.tags && blogPostDetails.tags.map((tag) => (
                        <li key={tag}>
                            <Chip 
                                variant="outlined" 
                                color="primary" 
                                size="small"
                                label={`${formatTag(tag)}`}
                            />
                        </li>
                    ))}
                    </ul>
                    <p className="date-style">{formatDateString(blogPostDetails.date)}</p>
                </section>
            }
        </>
    )
};
