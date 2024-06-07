'use client'
import { ShoppingCart } from 'lucide-react';
import { SquareUser } from 'lucide-react';
import { LandPlot } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NavItem } from './NavItem';
import { Menu } from 'lucide-react';
import { ListCollapse } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname()

  const[currPath, setCurrPath] = useState('Home')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  useEffect(() => {
    setCurrPath(pathname)
  }, [pathname])

  console.log(currPath);

  return (
    <nav className="w-full relative py-2 sm:p-4">
      <div className="p-2  flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <LandPlot className="text-green-600 text-4xl mr-2" />
            <span className="text-green-600 text-3xl font-bold merri-font">Golf Gear</span>

          </div>
          
        </div>
        <div className="flex sm:hidden">
          <Menu onClick={toggleSidebar} className='text-white cursor-pointer active:text-zinc-400 scale-[1.15]' />
        </div>
        <div className=" gap-4 items-center hidden sm:flex bg-black rounded-md p-2">
          <NavItem text={'Home'} path={currPath} active={currPath == '/'} />
          <div className='border border-white'></div>

          <NavItem text={'Shop'} path={currPath} active={currPath == '/shop'} />
          <div className='border border-white'></div>

          <NavItem text={'Orders'} path={currPath} active={currPath == '/orders'} />
          <div className='border border-white'></div>

          <NavItem text={'Contact'} path={currPath} active={currPath == '/contact'} />

          

        </div>
        <div className="gap-2 hidden sm:flex bg-black rounded-md p-2">
          <SquareUser className='text-white cursor-pointer text-2xl' />
          <div className='border border-white'></div>
          <ShoppingCart className='text-white cursor-pointer text-2xl' />
        </div>
      </div>
      <div id='sliding-nav' className={`bg-zinc-300 p-3 shadow-md shadow-zinc-900 border-l border-zinc-900 absolute right-0 z-[1] ${sidebarOpen ? 'active' : ''}`}>
        <div className='flex '>
        <ListCollapse onClick={toggleSidebar} className='text-black active:text-zinc-600 cursor-pointer scale-[1.15]' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
