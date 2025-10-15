"use client"

import { ArrowRight } from 'lucide-react';
import { IconChessQueen } from '@tabler/icons-react';
import { motion } from 'motion/react';

export default function Hero() {
    return (
        <main className="min-h-screen relative overflow-hidden py-12 transition-colors duration-300">
            {/* Subtle animated background element */}
            <motion.div
                className="absolute inset-x-1/6 md:inset-x-96 inset-y-1/6 w-72 md:w-[60vh] h-72 md:h-[60vh] bg-slate-400 dark:bg-neutral-700 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className='max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center'>
                <div className='space-y-10'>
                    {/* Chess Queen Icon */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="inline-block"
                            animate={{
                                rotate: [0, -5, 5, -5, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        >
                            <IconChessQueen className="w-16 h-16 mx-auto text-primary" strokeWidth={1.5} />
                        </motion.div>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-primary leading-tight tracking-tight">
                            Play Chess
                            <br />
                            <span className="text-slate-400 dark:text-slate-500">with Friends</span>
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        className="text-lg md:text-xl max-w-2xl mx-auto font-sans text-muted-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Challenge your friends to a match, communicate in real-time.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.button
                            className='group inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-sans text-lg rounded-full transition-colors duration-300'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Play Now
                            <motion.div
                                animate={{ x: [0, 4, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <ArrowRight className='w-5 h-5' />
                            </motion.div>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}