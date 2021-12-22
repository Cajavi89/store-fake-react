import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const NavBar = () => {
  return (
    <nav className='menu'>
      <Link to= '/'>Home</Link>
      <Link to= '/about'>About</Link>
    </nav>
  )
}

export default NavBar
