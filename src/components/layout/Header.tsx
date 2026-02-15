'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { clsx } from 'clsx';
import { useState, useEffect } from 'react';

const navItems = [
    { name: 'About', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Math', path: '#math' },
    { name: 'Hobbies', path: '#hobbies' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300',
                scrolled
                    ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800'
                    : 'bg-transparent'
            )}
        >
            <Link href="/" className="text-xl font-bold tracking-tighter text-zinc-100 uppercase">
                ANWAR REGHAI
            </Link>

            <nav className="hidden md:flex space-x-6">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.path}
                        className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>

            {/* Mobile Menu Placeholder (if needed) */}
            <div className="md:hidden">
                {/* Simple hamburger, omitted for brevity but recommended */}
            </div>
        </motion.header>
    );
}
