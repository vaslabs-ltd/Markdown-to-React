import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='headerContainer'>
        <div className='logo'>
            <Link href="/">M2R</Link>
            
        </div>
        <div className='navbar'>
            <div><Link href="/customProps">Blog</Link></div>
            <div><Link href="/themes">Themes</Link></div>       
        </div>
    </div>
  )
}
