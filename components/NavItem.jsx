'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const NavItem = ({text, path, active}) => {
    
    console.log(text, path);
  return (
    
    <div className={`w-[100%]  rounded-md px-2 ${active ? 'border-b border-zinc-300 ' : ''} `}>
      <Link href={`/${text == 'Home' ? '' : text.toLowerCase()}`} className={`cursor-pointer ${active ? 'text-white' : 'text-zinc-400'} hover:text-white`}>{text}</Link>
      {/* <div className={`w-[100%] rounded-full mx-auto ${active ? 'border-b border-zinc-300 ' : ''} `}></div> */}
    </div>
  )
}
