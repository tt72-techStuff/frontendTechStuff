import React, {useEffect} from 'react';
import ShopItem from './ShopItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../store/actions/index';


const Shop = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.itemData);
  
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch])

    
    return (
        <div className='Shop'>
          <h1>Shop</h1>
          <div className='ShopList'>
              {
              items.map(item => { 
                return <ShopItem key={item.id} item={item} />
              })
              }
          </div>
        </div>
    )
}

export default Shop;