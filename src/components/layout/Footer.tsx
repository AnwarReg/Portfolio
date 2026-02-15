'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-950 py-12 px-6 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm font-mono space-y-4 md:space-y-0"
        >
            <div className="flex flex-col text-center md:text-left">
                <span className="font-bold text-zinc-300">ANWAR REGHAI</span>
                <span>© {new Date().getFullYear()}. Built with Next.js, Tailwind, & Framer Motion.</span>
            </div>
            <div className="flex space-x-6">
                <a
                    href="https://github.com/AnwarReg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-300 transition-colors"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/anwar-reghai-8225b4218/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-300 transition-colors"
                >
                    LinkedIn
                </a>
                <a
                    href="mailto:reghan01@gettysburg.edu"
                    className="hover:text-zinc-300 transition-colors"
                >
                    Email
                </a>
            </div>
        </motion.footer>
    );
}
