'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

interface SectionProps {
    id: string;
    title: string;
    subtitle?: string;
    children: ReactNode;
    className?: string; // Additional classes for container
}

export default function Section({ id, title, subtitle, children, className }: SectionProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className={clsx('relative min-h-[50vh] py-24 px-6 md:px-12 lg:px-24 scroll-mt-20', className)}
        >
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="flex flex-col space-y-2">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-100"
                    >
                        {title}
                    </motion.h2>
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-lg text-zinc-400 font-light max-w-2xl"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {children}
                </div>
            </div>
        </motion.section>
    );
}
