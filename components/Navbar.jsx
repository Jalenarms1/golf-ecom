'use client'
import { ShoppingCart } from 'lucide-react';
import { SquareUser } from 'lucide-react';
import { LandPlot } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NavItem } from './NavItem';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname()

  const[currPath, setCurrPath] = useState('Home')

  useEffect(() => {
    setCurrPath(pathname == '/' ? 'Home' : pathname)
  }, [pathname])

  console.log(currPath);

  return (
    <nav className="w-full relative py-2 sm:p-4">
      <div className="container  flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <LandPlot className="text-green-600 text-3xl mr-2" />
            <span className="text-green-600 text-2xl font-bold">Golf Gear</span>

          </div>
          
        </div>
        <div className="flex sm:hidden">
          <Menu />
        </div>
        <div className=" gap-6 items-center hidden sm:flex">
          <NavItem text={'Home'} path={currPath} />
          <NavItem text={'Shop'} path={currPath} />
          <NavItem text={'Orders'} path={currPath} />
          <NavItem text={'Contact'} path={currPath} />
          

        </div>
        <div className=" space-x-4 hidden sm:flex">
          <SquareUser className='text-white cursor-pointer' />
          <ShoppingCart className='text-white cursor-pointer' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
