import Link from 'next/link'
import React from 'react'
import navStyles from '../styles/Nav.module.css'

function Nav() {
  return (
    <nav className={navStyles.nav}>
        <h1><Link href="/">next lesson 1</Link></h1>
        <ul>
            <li><Link href='/'>HOME</Link></li>
            <li><Link href='/about'>ABOUT</Link></li>
        </ul>
    </nav>
  )
}

export default Nav