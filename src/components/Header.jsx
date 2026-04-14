"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {
  const pathname=usePathname();
  console.log(pathname);
  if(pathname.startsWith("/dashboard")) return <></>;
    return (
        <header className="px-4 py-3 border-b-2 border-b-gray-700 flex justify-between items-center flex-wrap">
          <Link href="/" className="text-lg">😊 Dev Storey</Link>
          <nav className='space-x-2'>
            <Link href="/">Home</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/about">About</Link>
            <Link href="/tutorials">Tutorials</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">register</Link>
          </nav>
        </header>
    );
};

export default Header;