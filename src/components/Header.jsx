"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import NavLink from './NavLink';

const Header = () => {
  const pathname=usePathname();
  console.log(pathname);
  if(pathname.startsWith("/dashboard")) return <></>;
    return (
        <header className="px-4 py-3 border-b-2 border-b-gray-700 flex justify-between items-center flex-wrap">
          <Link href="/" className="text-lg">😊 Dev Storey</Link>
          <nav className='space-x-2'>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/stories">Stories</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/tutorials">Tutorials</NavLink>
            <NavLink href="/login">Login</NavLink>
            <NavLink href="/register">register</NavLink>
          </nav>
        </header>
    );
};

export default Header;