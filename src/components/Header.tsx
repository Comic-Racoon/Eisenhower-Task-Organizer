import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <NavLink to='/'>
            <img src="./src/assets/Eisenhower task organiser-logos_black.png"/>

        </NavLink>
    </header>
    
  )
}
