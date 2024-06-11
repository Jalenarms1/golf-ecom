import { ListCollapse } from 'lucide-react'
import React from 'react'
import { NavItem } from './NavItem'
import { SquareUser } from 'lucide-react'

export const Sidebar = ({onClick, currPath}) => {
  return (
    <div className='flex flex-col'>
        <div className="flex justify-between">
            <ListCollapse onClick={onClick} className='text-black active:text-zinc-600 cursor-pointer scale-[1.15]' />
            <SquareUser className='text-black cursor-pointer text-2xl' />
            
        </div>
        <div className=" mt-4 flex flex-col items-start gap-3 bg-zinc-700 p-3 h-screen">
          <NavItem text={'Home'} path={currPath} active={currPath == '/'} />

          <NavItem text={'Shop'} path={currPath} active={currPath == '/shop'} />

          <NavItem text={'Orders'} path={currPath} active={currPath == '/orders'} />

          <NavItem text={'Contact'} path={currPath} active={currPath == '/contact'} />

          <button className='text-zinc-400 hover:text-white px-2'>Logout</button>

        </div>
    </div>
  )
}
