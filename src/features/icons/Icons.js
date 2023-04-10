import React from "react";
import { Icon } from "../icon/Icon";
import { v4 as uuidv4 } from "uuid";
import './icons.css';

export const Icons = ({dataArray}) => {

    return(
        <section className="icons-container">
            {dataArray.map(data => 
                <Icon key={uuidv4()} icon={data} />
            )}
        </section>
    );
};
