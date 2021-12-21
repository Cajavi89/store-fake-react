import React, {useContext, useEffect, useState} from 'react'
import CallFakeAPI from '../../helpers/CallFakeAPI'
import { ItemContext } from '../../context/itemContext';

import './styles.scss'
import LoaderSpinner from '../LoadingSpinner';
import ProductCard from '../ProductCard';

const AllProducts =() =>{
const {storeItems, setStoreItems} = useContext(ItemContext);
const [searchValue,setSearchValue] = useState('')

  useEffect(()=>{
    CallFakeAPI(18)
      .then(product=>setStoreItems(product))
  },[setStoreItems]);

  const handleChange =(e)=>{
    e.preventDefault()
    setSearchValue(e.target.value.toLowerCase())
  }
  return(
    <>
      <form>
        <input
        type="text"
        placeholder='Search...'
        onChange={(data)=>handleChange(data)}
        className='search-input'
        />
      </form>
      <ul className='all-products'>
        {storeItems.length < 1
          ?<LoaderSpinner />
          :storeItems.map(product=><ProductCard key={product.id} product={product} />)
          .filter(prod=>prod.props.product.title.toLowerCase().includes(searchValue))

        }
      </ul>
    </>
  )
}
export default AllProducts;
