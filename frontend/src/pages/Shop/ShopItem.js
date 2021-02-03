import React from 'react';




const ShopItem = (props) => {
   const { item } = props;

   const MoreDetailsClick = e => {
    e.preventDefault();
    }

    const RequestRentalClick = e => {
    e.preventDefault();
    }

 
    
    return (
        <div className='ShopItem'>
            <h2>{item.name}</h2>
            <img src={item.image_url} alt='item' />
            <p>{item.description}</p>
            <div>
                <button>More Details</button>
                <button>Request Rental</button>
            </div>
        </div>
    )
}

export default ShopItem;