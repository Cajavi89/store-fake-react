import React, { useEffect, useState } from 'react'
import { ItemContextProvider } from './context/itemContext'
import { Routes, Route, Link } from 'react-router-dom'
import AllProducts from './components/AllProducts'
import About from './components/About'
import ProductDetail from './components/ProductDetail'
import CallFakeAPI from './helpers/CallFakeAPI'
import Footer from './components/Footer'
import './App.css'

function App () {
  const [product, setProduct] = useState([])
  useEffect(() => {
    CallFakeAPI(12)
      .then(res => setProduct(res))
  }, [setProduct])

  return (
    <ItemContextProvider>
      <div className="app">
        <nav className='menu'>
          <Link to= '/'>Home</Link>
          <Link to= '/about'>About</Link>
        </nav>

        <Routes>
          <Route path='/'
            element=
              {
                <>
                  <h1>Super Store</h1>
                  <AllProducts />
                </>
              }
          />
          <Route path='/about' element= {<About />} />
          <Route path='/product/:productId'
            element= {
              <ProductDetail data={product}/>
            }
          />
        </Routes>
        <Footer />
      </div>
    </ItemContextProvider>
  )
}

export default App
