import React from 'react';

const Anime = ({title,image}) => {
    return(
        <div className="title">
            <h1>{title}</h1>
            <img src={image} alt=""/>
        </div>
    )
}
export default Anime;