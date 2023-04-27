import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBlogLoading, selectBlogError, selectBlog, selectBlogLoaded, loadBlog } from './blogSlice';
import { BlogFilterSelection } from './BlogFilterSelection';
import ErrorBoundary from '../../app/ErroBoundary';
import { BlogItem } from './BlogItem';
import './blog.css';


export const Blog = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectBlogLoading);
    const error = useSelector(selectBlogError);
    const blog = useSelector(selectBlog);
    const loaded = useSelector(selectBlogLoaded);
    const [ tagsObjCount, setTagsObjCount ] = useState({});
    const [ tagsObjSelected, setTagsObjSelected ] = useState({});
    const [ selectedTagsArr, setSelectedTagsArr ] = useState([]);

    const controlSelectedTags = (tagObj) => {
        setSelectedTagsArr(() => {
            const preSelection = Object.entries(tagObj).filter(([key, value]) => value === true);
            const selection = preSelection.flat().filter(item => typeof item === "string");
            return selection;
        })
    }

    const populateTagsCount = (tag) => {// setTagObjCount expects an object assignment, not a number, so the whole thing needs to be copied over.
        const tagLower = tag.toLowerCase();

        setTagsObjCount(prevTagObj => {
            if (!prevTagObj.hasOwnProperty(tagLower)) {
                return {...prevTagObj, [tagLower]: 1};
            } else {
                return {...prevTagObj, [tagLower]: prevTagObj[tagLower] + 1};
            }
        });
    }

    const populateTagsSelection = (tag) => {
        const tagLower = tag.toLowerCase();

        setTagsObjSelected(prevTagObj => {
            if (!prevTagObj.hasOwnProperty(tagLower)) {
                return {...prevTagObj, [tagLower]: false};
            } else {
                return prevTagObj;
            }
        })
    }

    /**
     * Filters nested objects based on any matching value between individual object's set of tags
     * and the controlled array.
     * @param {object} blogObj - blog data object - Contains data about blog posts.
     * @param {array} controlArr - selected tags array - List of currently selected tags.
     * @returns {array} Filtered array of arrays where each sub-array contains key-value pair.
     */
    const filterForSelectedTags = (blogObj, controlArr) => { // See bottom for alternative (incomplete)
        const arrayOfEntries = Object.entries(blogObj);
        const filteredEntriesArray = arrayOfEntries.filter(([key, value]) => {return controlArr.some(tag => value.tags.includes(tag))});
        return filteredEntriesArray;
    };

    useEffect(() => {
        if (!loaded) {
            dispatch(loadBlog());
        }
    }, [dispatch, loaded]);

    useEffect(() => {
        if (Object.keys(blog).length !== 0) {
            Object.entries(blog).forEach(([key, content]) => (
                content.tags.forEach((tag) => {
                    populateTagsCount(tag)
                    populateTagsSelection(tag)
                })
        ))};
        
    }, [blog])

    useEffect(() => {
        if (Object.keys(tagsObjSelected).length !== 0) {
            controlSelectedTags(tagsObjSelected);
        }
    }, [tagsObjSelected])


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

    return(
        <section className="blog-list">
            <ErrorBoundary fallback="Error in BlogFilterSelect Comp. See console for more details.">
                <BlogFilterSelection 
                    tagsObj={tagsObjCount}
                    selectedTags={tagsObjSelected}
                    setSelectedTags={setTagsObjSelected}
                />
            </ErrorBoundary>

            <div>
                {blog && Object.keys(blog).length > 0 &&
                selectedTagsArr.length === 0 
                
                ?
            
                Object.entries(blog).map(([id, content]) => (
                    <BlogItem key={id} content={content} />
                ))

                :

                filterForSelectedTags(blog, selectedTagsArr).map(([id, content]) => (
                    <BlogItem key={id} content={content} />
                ))}
            </div>
        </section>
    );
};
