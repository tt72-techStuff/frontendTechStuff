import React, {useState, useEffect} from 'react';
import ShopItem from './ShopItem';
import { Link, Switch, Route } from "react-router-dom";
// import axiosWithAuth from '../../utils/axiosAuth';
import TechViewpage from '../Tech-view/TechViewPage'

import axios from 'axios';


const Shop = () => {
   const [items, setItems] = useState([]);

   useEffect(() => { 
    axios
        .get('https://tech-stuff-tt72.herokuapp.com/api/posts/')
      .then (res => {
        setItems(res.data)
      })
      .catch (err => {
        console.log(err.response)
      })
    }, [])

  console.log('items', items);
    

    
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