    "use client"
    import { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

    const slides = [
    {
    image: "/image/hair.jpg",
    text: "Haircuts and Styling",
    nomer: "01"
},
{
    image: "/image/kuku.jpeg",
    text: "Manicure and Pedicure",
    nomer: "02"
},
{
    image: "/image/pace.jpg",
    text: "Facial Treatments",
    nomer: "03"
    },
    ];

    const imageVariants = {
    enter: (direction) => {
    return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
    };
    },
    center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    },
    exit: (direction) => {
    return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
    };
    },
    };

    const textVariants = {
    enter: {
    opacity: 0,
    y: 20,
    },
    center: {
    opacity: 1,
    y: 0,
    },
    exit: {
    opacity: 0,
    y: -20,
    },
    };

    const Service = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
    };

    const imageIndex = ((page % slides.length) + slides.length) % slides.length;

    return (
        <div className="bg-[url('/image/servicebg.png')] relative bg-cover bg-no-repeat w-full h-screen overflow-x-hidden flex items-center justify-center flex-col bg-black">
            <h1 className='text-white self-start text-4xl ml-9 '>Service</h1>
            <div className='bg-white w-40 h-2 self-start ml-9'/>
    <div className="relative w-1/2 h-4/5   overflow-hidden bg-black rounded ">
        <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.img
            key={page}
            src={slides[imageIndex].image}
            className="absolute w-full h-full object-cover"
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
            }}
            />
        </AnimatePresence>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center z-10">
        <button 
            onClick={() => paginate(-1)} 
            className="h-14 ml-6 w-10 text-white bg-gray-800 p-2 rounded-full"
            >
            {"<<"}
        </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center z-10">
        <button 
            onClick={() => paginate(1)} 
            className="h-14 mr-6 w-10 text-white bg-gray-800 p-2 rounded-full"
            >
            {">>"}
        </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 text-center text-white bg-gray-900 bg-opacity-75 z-10">
        <AnimatePresence mode="wait">
            <motion.div
            key={page}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            >
            <h2 className="text-xl">{slides[imageIndex].text}</h2>
            </motion.div>
            <h3 className='absolute bottom-3 left-11'>{slides[imageIndex].nomer} / 03</h3>
        </AnimatePresence>
        <Link href={"/register"}><button className="mt-4 px-4 py-2 bg-gray-700 text-white rounded">Register</button></Link>
        <img src="/image/logo.svg" alt="logo" className='absolute w-16 right-4 bottom-4' />
        </div>
    </div>
            </div>
    );
    };

    export default Service;
