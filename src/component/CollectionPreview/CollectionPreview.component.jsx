import React from 'react';
import CollectionElement from '../CollectionElement/CollectionElement.component';

import './CollectionPreview.style.scss';

const CollectionPreview = ({title, items}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title' > { title.toUpperCase() } </h1>
            <div className='preview-items'>
                { items
                    .filter( (item, index) => index < 4 )
                    .map( ({ id, ...OtherItemProperties }) => (
                        <CollectionElement key={id} {...OtherItemProperties}/>
                     ))}
            </div>
            
        </div>
    )
}

export default CollectionPreview;