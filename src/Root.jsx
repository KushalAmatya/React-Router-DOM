import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function Root() {
  return (
    <>
        <div className="nav">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/sdad'>Extra</NavLink>
            
        </div>
        <Outlet/>
        
    </>
  )
}
