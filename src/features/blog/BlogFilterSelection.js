import React from 'react';
import { ToggleButton, Chip } from '@mui/material';


export const BlogFilterSelection = ({ tagsObj, selectedTags, setSelectedTags }) => {
    

    const handleClick = (e) => {
        console.log(e.target);
        const value = e.target.value;
        if (typeof value !== "undefined") {
            setSelectedTags(prevTagObj => {
                if (prevTagObj[value] === false) {
                    return {...prevTagObj, [value]: true};
                } else {
                    return {...prevTagObj, [value]: false};
                }})
        }
    }


    return (
        <section style={{display: "flex", justifyContent: "center", gap: "15px"}}>
            
            {Object.keys(tagsObj).length > 1 &&
                Object.entries(tagsObj).map(([tagName, tagCount]) => (
                    <div key={tagName}>
                    <ToggleButton
                        selected={selectedTags[tagName]}
                        onChange={handleClick}
                        value={tagName}
                        color="secondary"
                        
                    >
                        {tagName} &nbsp;&nbsp; {tagCount}
                    </ToggleButton>
                    </div>
                ))
            }
            
        </section>
    )
};
