import React from 'react';
import  SHOP_DATA from './SHOP_DATA';
import CollectionPreview from '../../component/CollectionPreview/CollectionPreview.component';

class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return(
            <div className='shop-page'>
                { 
                    collections.map( ({ id , ...OtherItemProps}) => (
                        <CollectionPreview  key={ id } { ...OtherItemProps }/>
                    )) 
                }
            </div>
            );
        }
}

export default ShopPage;