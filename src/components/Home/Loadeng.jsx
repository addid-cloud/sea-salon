"use client"
import { animate, motion } from 'framer-motion';

const Loadeng = () => {
    const dotAnimation = {
        initial:{opacity:0},
        animate:{
            opacity: [0,1,0],
            transition: {
                duration: 1,
                repeat:Infinity,
                ease:"easeInOut",
            }
        }
    }
return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-gray-100">
    <motion.div
        className="w-16 h-16 border-t-4 border-slate-950 border-solid rounded-full animate-spin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
    />
    <div>
    <h1>Loading SEA</h1>
    <motion.span
            className="w-4 h-4 bg-blue-500 rounded-full"
            variants={dotAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: 0 }}
            />
    <motion.span
            className="w-4 h-4 bg-blue-500 rounded-full"
            variants={dotAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            />
    <motion.span
            className="w-4 h-4 bg-blue-500 rounded-full"
            variants={dotAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
            />
            </div>
    </div>
);
};

export default Loadeng;
