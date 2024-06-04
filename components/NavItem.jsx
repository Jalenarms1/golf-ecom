'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const NavItem = ({text, path}) => {
    
    
  return (
    
    <div className=''>
      <Link href={`/${path == 'Home' ? '' : text.toLowerCase()}`} className={`cursor-pointer ${text == path ? 'text-white' : 'text-zinc-400'} hover:text-white`}>{text}</Link>
      <div className={`w-[99%] mx-auto ${text == path ? 'border-b border-zinc-500' : ''} `}></div>
    </div>
  )
}
