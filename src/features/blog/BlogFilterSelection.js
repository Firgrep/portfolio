import React from 'react';
import { ToggleButton, Chip } from '@mui/material';


export const BlogFilterSelection = ({ tagsObj, selectedTags, setSelectedTags }) => {
    
    const handleClick = (e) => {
        const value = e.currentTarget.value;
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
        <section style={{
            display: "flex", 
            justifyContent: "center", 
            gap: "15px", 
            marginBottom: "65px"
        }}>
            
            {Object.keys(tagsObj).length > 1 &&
                Object.entries(tagsObj).map(([tagName, tagCount]) => (
                    <div key={tagName}>
                    <ToggleButton
                        selected={selectedTags[tagName]}
                        onChange={handleClick}
                        value={tagName}
                        color="secondary"
                        size="small"
                        
                    >
                        {tagName} &nbsp;&nbsp; <Chip 
                            label={tagCount} 
                            size="small" 
                            color="info"
                            variant="outlined"
                        />
                    </ToggleButton>
                    </div>
                ))
            }
            
        </section>
    )
};
