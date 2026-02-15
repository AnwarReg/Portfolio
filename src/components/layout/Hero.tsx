'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-zinc-950 text-center px-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 opacity-50 z-0 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 flex flex-col items-center space-y-6 max-w-4xl"
            >
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600 drop-shadow-2xl">
                    ANWAR REGHAI
                </h1>
                <p className="text-xl md:text-2xl font-light text-zinc-400 tracking-wide max-w-2xl">
                    Engineering scalable ML infrastructure and product-ready systems.
                </p>

                <div className="flex space-x-4 mt-8">
                    <span className="px-3 py-1 bg-zinc-900 border border-zinc-700 rounded-full text-xs font-mono text-zinc-300 uppercase tracking-widest">
                        DevOps
                    </span>
                    <span className="px-3 py-1 bg-zinc-900 border border-zinc-700 rounded-full text-xs font-mono text-zinc-300 uppercase tracking-widest">
                        MLOps
                    </span>
                    <span className="px-3 py-1 bg-zinc-900 border border-zinc-700 rounded-full text-xs font-mono text-zinc-300 uppercase tracking-widest">
                        Cloud Architecture
                    </span>
                    <span className="px-3 py-1 bg-zinc-900 border border-zinc-700 rounded-full text-xs font-mono text-zinc-300 uppercase tracking-widest">
                        Backend Engineering
                    </span>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 z-10"
            >
                <ArrowDown className="text-zinc-500 w-6 h-6" />
            </motion.div>
        </section>
    );
}
