import React from 'react';

// import axios from 'axios';




const ShopItem = (props) => {
   const { item } = props;

 



    
    return (
        <div className='ShopItem'>
            <h2>{item.name}</h2>
            <p className='ItemImage'>{item.image_url}</p>
            <p>{item.description}</p>
        </div>
    )
}

export default ShopItem;