import React from 'react';
import ProductMenuItem from '../ProductMenu-item/ProductMenu-item.component';

import './ProductMenu.style.scss'

class ProductMenu extends React.Component {
    constructor() {
        super();

        this.state = {
            section: [

                {
                    title: 'Food',
                    background: 'https://i.huffpost.com/gen/1766671/images/o-DOG-FOOD-facebook.jpg',
                    id: 1,
                    linkUrl: 'food'
                },
                
                {
                    title: 'Habitats',
                    background: 'http://homesfeed.com/wp-content/uploads/2015/04/awesome-nice-adorable-cool-amazing-fantastic-dog-house-idea-with-wooden-small-house-concept-with-realistic-design-with-small-entrance.jpg',
                    id: 2,
                    linkUrl: ''
                },
                
                {
                    title: 'Accessories',
                    background: 'https://s3.amazonaws.com/tc-global-prod/download_resource/us/downloads/2488/pet-products-non-food-master-thumbnail-v1.jpg',
                    id: 3,
                    linkUrl: ''
                },
                
                {
                    title: 'Dogs',
                    background: 'https://www.dreamdogs.co.uk/wp-content/uploads/2010/06/puppy-eyes-beagle.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                
                {
                    title: 'Cats',
                    background: 'https://hddesktopwallpapers.in/wp-content/uploads/2015/09/wallpapers-cats-hd.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
                
            ]
        }
    }

    render() {
        return (
            <div className="ProductMenu">
                {this.state.section.map(({ id , ...otherSectionProps}) => <ProductMenuItem key={ id } {...otherSectionProps} /> )}
            </div>
            );
    }
}

export default ProductMenu;