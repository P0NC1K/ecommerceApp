import React from 'react';

import './CollectionElement.style.scss'

const CollectionElement = ({ id, name, imageUrl, price }) => {
    return( 

        <div className="CollectionElement">
            <div 
                className="element-image"
                style = {{
                    backgroundImage: `URL(${imageUrl})`
                }}>
            </div>

            <div className="element-footer">
                <span className="name"> { name } </span>
                <span className="price"> { price } </span>
            </div>
        </div>

    )
}

export default CollectionElement;