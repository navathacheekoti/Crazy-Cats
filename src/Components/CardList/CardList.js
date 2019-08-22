import React from 'react';
import Card from '../Card/Card';
import './cardList.css';

const CardList = ({cats,onSearch}) => {
    return (
        <div className="card-list">
            {cats.map(cat => {
                return (
                  <Card key={cat.id}  cat={cat}/>  
                )
            })
            }
        </div>
        
        
    );
};

export default CardList;