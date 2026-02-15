'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { LucideIcon } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    subtitle: string;
    specs?: {
        [key: string]: string;
    };
    tags?: string[];
    links?: { label: string; url: string }[];
    isProductionReady?: boolean;
    detailedDescription?: string;
    icon?: LucideIcon;
}

export default function ProjectCard({
    title,
    subtitle,
    detailedDescription,
    specs,
    tags,
    links,
    isProductionReady,
    icon: Icon
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="group relative p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/20 flex flex-col h-full"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex flex-col space-y-1">
                    <h3 className="text-xl font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm font-medium text-zinc-400 font-mono tracking-tight">
                        {subtitle}
                    </p>
                </div>
                {Icon && (
                    <div className="p-2 rounded-full bg-zinc-800/50 text-zinc-400 group-hover:text-white transition-colors">
                        <Icon size={20} strokeWidth={1.5} />
                    </div>
                )}
            </div>

            {detailedDescription && (
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                    {detailedDescription}
                </p>
            )}

            <div className="space-y-3 flex-grow mb-6">
                {specs && Object.entries(specs).map(([key, value]) => (
                    <div key={key} className="flex flex-col space-y-1 text-sm">
                        <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                            {key}
                        </span>
                        <span className="text-zinc-300 leading-relaxed font-light">
                            {value}
                        </span>
                    </div>
                ))}
            </div>

            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold text-zinc-400 bg-zinc-800/50 rounded border border-zinc-700/50"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            <div className="mt-auto pt-4 border-t border-zinc-800/50 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
                <div className="flex flex-wrap gap-4">
                    {links && links.map(link => (
                        <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors group/link"
                        >
                            <span>{link.label}</span>
                            <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                        </a>
                    ))}
                </div>

                {isProductionReady && (
                    <span className="flex items-center gap-2 ml-auto"><span className="text-emerald-500">●</span> Production Ready</span>
                )}
            </div>
        </motion.div>
    );
}
