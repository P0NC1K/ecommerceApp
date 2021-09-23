import React from 'react';
import { withRouter } from 'react-router-dom';

import './ProductMenu-item.style.scss'

const ProductMenuItem = ({ title, background, size, history, linkUrl, match }) => {
    const styles = {
        backgroundImage: `url(${ background })`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`
    }

    return (
            <div 
                className={ `${ size } ProductMenu-item` } 
                onClick={ () => history.push(`${match.url}${linkUrl}`) }>

                <div className="background-img" style={ styles }></div>
                    <div className="Item-component">
                        <h1 className="title">{ title }</h1>
                        <span className="subtitle">Buy Now</span>
                    </div>
            </div>
    )
}

export default withRouter(ProductMenuItem);