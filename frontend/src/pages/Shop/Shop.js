import React, {useState} from 'react';
import ShopItem from './ShopItem';

// import axios from 'axios';

const initialState = [
    {
    user_id: 1,
    category_id: 1,
    name: 'Red Dragon',
    description: 'The DRAGON-X BRAIN features a Super35 sensor and can shoot and record at 6K uncropped up to 75 fps',
    image_url: 'some image'
    },
    {
    user_id: 2,
    category_id: 2,
    name: 'Item 2',
    description: 'The DRAGON-X BRAIN features a Super35 sensor and can shoot and record at 6K uncropped up to 75 fps',
    image_url: 'some image'
    },
    {
    user_id: 3,
    category_id: 3,
    name: 'Item 3',
    description: 'The DRAGON-X BRAIN features a Super35 sensor and can shoot and record at 6K uncropped up to 75 fps',
    image_url: 'some image'
    },
    {
    user_id: 4,
    category_id: 4,
    name: 'Item 4',
    description: 'The DRAGON-X BRAIN features a Super35 sensor and can shoot and record at 6K uncropped up to 75 fps',
    image_url: 'some image'
    },
    {
    user_id: 5,
    category_id: 5,
    name: 'Item 5',
    description: 'The DRAGON-X BRAIN features a Super35 sensor and can shoot and record at 6K uncropped up to 75 fps',
    image_url: 'some image'
    },
];


const Shop = (props) => {
   const [items, setItems] = useState(initialState);

 



    
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