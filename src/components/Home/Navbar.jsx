    'use client'
    import { useState } from 'react';
    import { motion } from 'framer-motion';
import Link from 'next/link';

    const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
    };

    return (
    <nav className=" p-4 absolute w-full">
        <div className="container mx-auto flex justify-between items-center">
        <div className="text-slate-800 text-2xl font-bold">
            <Link href={"/"}><img src="/image/logob.svg" alt="logo" className='text-black w-14'/></Link>
        </div>
        <div className="md:hidden">
            <button onClick={toggleMenu} className="text-slate-800 focus:outline-none">
            ☰
            </button>
        </div>
        <div className="hidden md:flex gap-12 md:flex-row md:justify-around">
            <div className='flex gap-4 '>
            <Link href="/" className="text-slate-800 hover:text-slate-600">Home</Link>
            <Link href="/register" className="text-slate-800 hover:text-slate-600">Services</Link>
            <Link href="komentar" className="text-slate-800 hover:text-slate-600">comment</Link>
            </div>
            <div>
            <a href="#" className="text-slate-800 hover:text-slate-600">Login / Register</a>
            </div>
        </div>
        </div>
        {isOpen && (
        <motion.div
            className="md:hidden flex flex-col space-y-4 mt-4 items-end "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <a href="#" className="text-slate-800 hover:text-slate-600">Home</a>
            <a href="#" className="text-slate-800 hover:text-slate-600">Services</a>
            <a href="#" className="text-slate-800 hover:text-slate-600">Comment</a>
            <a href="#" className="text-slate-800 hover:text-slate-600">Login / Register</a>
        </motion.div>
        )}
    </nav>
    );
    };

    export default Navbar;
