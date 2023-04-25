import React from 'react';
import { formatDateString, formatTag, formatDateStringYearMonth } from '../../util/util';
import { Chip, Button } from "@mui/material";
import { Link } from 'react-router-dom';


export const BlogItem = ({ content }) => {

    return (
        <article className="blog-item">
            <h2>
                <Link
                    to={`/blog/${content.id}/${formatDateStringYearMonth(content.date)}/${content.fragment}`}
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
                to={`/blog/${content.id}/${formatDateStringYearMonth(content.date)}/${content.fragment}`}
            >
                <Button variant="contained">
                    Read more
                </Button>
            </Link>
        </article>    
    )
}



