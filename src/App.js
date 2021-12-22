import React, { useEffect, useState } from 'react'
import { ItemContextProvider } from './context/itemContext'
import { Routes, Route } from 'react-router-dom'
import AllProducts from './components/AllProducts'
import About from './components/About'
import ProductDetail from './components/ProductDetail'
import CallFakeAPI from './helpers/CallFakeAPI'
import Footer from './components/Footer'
import './App.css'
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'

function App () {
  const [product, setProduct] = useState([])
  useEffect(() => {
    CallFakeAPI(12)
      .then(res => setProduct(res))
  }, [setProduct])

  return (
    <ItemContextProvider>
      <NavBar />
      <Routes>
        <Route path='/'
          element={<AllProducts />}
        />
        <Route path='/about' element= {<About />} />
        <Route path='/product/:productId'
          element= {
            <ProductDetail data={product}/>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </ItemContextProvider>
  )
}

export default App
