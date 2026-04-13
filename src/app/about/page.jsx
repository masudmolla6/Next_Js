import Title from '@/components/Title';
import Link from 'next/link';
import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <Title>About Us Page 😇</Title>
            <nav className='space-x-2'>
                <Link href={"/about/contact"}>Contact</Link>
                <Link href={"/about/teams"}>Teams</Link>
            </nav>
        </div>
    );
};

export default AboutUs;