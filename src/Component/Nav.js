import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

export const Nav = () => {
  return (
      
    <div className='nav'>
       <div className='rows'>
         <button> <Link style={{ textDecoration: 'none',color:'white' }} to={'/Add'}>AddAnimal</Link></button>
      </div>

      <div className='rows'>
      <button> <Link style={{ textDecoration: 'none',color:'white' }} to={'/display'}>Page</Link></button>
      </div>
      
      {/* <div className='rows'>
      <button> <Link style={{ textDecoration: 'none' }} to={'/Add'}>showProfile</Link></button>
      </div> */}
    
      <div className='rows'>
      <button><Link style={{ textDecoration: 'none', color:'white'}} to={"/Logout"}>Logout</Link> </button>
      </div>

      
     
    
      
   
   
    </div>
 
  )
}
