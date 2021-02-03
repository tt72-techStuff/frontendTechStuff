import React, {useState} from 'react';
import ShopItem from './ShopItem';

// import axios from 'axios';

const initialState = [
    {
    user_id: 1,
    category_id: 1,
    name: 'Red Dragon',
    description: 'The DRAGON-X BRAIN features a Super35 sensor and can shoot and record at 6K uncropped up to 75 fps',
    image_url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
    },
    {
    user_id: 2,
    category_id: 2,
    name: 'Item 2',
    description: 'The DRAGON-X BRAIN features a Super35 sensor and can shoot and record at 6K uncropped up to 75 fps',
    image_url: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcHV0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
    user_id: 3,
    category_id: 3,
    name: 'Item 3',
    description: 'The DRAGON-X BRAIN features a Super35 sensor and can shoot and record at 6K uncropped up to 75 fps',
    image_url: 'https://images.unsplash.com/photo-1534131707746-25d604851a1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
    user_id: 4,
    category_id: 4,
    name: 'Item 4',
    description: 'The DRAGON-X BRAIN features a Super35 sensor and can shoot and record at 6K uncropped up to 75 fps',
    image_url: 'https://images.unsplash.com/photo-1542908945-2d06f969cc61?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=786&q=80'
    },
    {
    user_id: 5,
    category_id: 5,
    name: 'Item 5',
    description: 'The DRAGON-X BRAIN features a Super35 sensor and can shoot and record at 6K uncropped up to 75 fps',
    image_url: 'https://images.unsplash.com/photo-1591196702597-062a87208fed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
];


const Shop = (props) => {
   const [items, setItems] = useState(initialState);

 
    const MoreDetailsClick = e => {
        e.preventDefault();
    }


    
    return (
        <div className='Shop'>
        <h1>Shop</h1>
            <div className='ShopList'>
            {
				items.map(item => {
					return (<ShopItem key={item.user_id} item={item} />);
					})
			}
            </div>
        </div>
    )
}

export default Shop;