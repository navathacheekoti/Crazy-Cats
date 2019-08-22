import React from 'react';
import './card.css';

const Card = ({cat}) => {
    return (
        
        <div className="card-container">
            <img src={`https://robohash.org/${cat.title}?set=set4&size=180x180`} alt={cat.title}/>
            <h2>{cat.title}</h2>
         </div>
        );
};

export default Card;