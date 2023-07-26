import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'> REDUX STORE </span>
      <div>
        <Link className='Navlink' to="/">Home</Link> <s></s>
        <Link className='Navlink' to="/cart">Cart</Link>
        <span className='cartCount '> Cart Item : 0 </span>
      </div>
    </div>
  )
}

export default Navbar
