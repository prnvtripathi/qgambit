'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { IconChessQueen } from '@tabler/icons-react';
import { ModeToggle } from '../ui/mode-toggle';
import { Button } from '../ui/button';


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerVariants = {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    const mobileMenuVariants = {
        closed: { opacity: 0, height: 0 },
        open: { opacity: 1, height: 'auto' },
    };


    return (
        <motion.header
            className="ransition-all duration-300"
            variants={headerVariants}
            initial="initial"
            animate={isScrolled ? 'scrolled' : 'animate'}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between lg:h-20">
                    <motion.div
                        className="flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                        <Link
                            prefetch={false}
                            href="/"
                            className="flex items-center space-x-2"
                        >
                            <div className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                                <IconChessQueen className="size-6 text-primary" />
                            </div>
                            <span className="bg-gradient-to-r from-primary to-primary/80 dark:from-primary dark:to-primary/60 bg-clip-text text-xl font-bold font-sans text-transparent">
                                QGambit
                            </span>
                        </Link>
                    </motion.div>

                    <div className="flex items-center space-x-4">
                        <ModeToggle />
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="default" asChild>
                                <Link
                                    prefetch={false}
                                    href="/game">
                                    <span>Get Started</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </motion.header>
    );
}
