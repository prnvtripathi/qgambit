"use client"

import { motion } from 'motion/react';

const about = [
    {
        title: "The Ancient Game",
        content: "Chess is a strategic board game played between two players on an 8x8 checkered board. Dating back over 1,500 years, it originated in India and has evolved into one of the world's most popular intellectual games."
    },
    {
        title: "How to Play",
        content: "Each player begins with 16 pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns. The objective is to checkmate the opponent's king, placing it under attack with no legal moves to escape."
    },
    {
        title: "Why Play Chess?",
        content: "Chess improves critical thinking, problem-solving, and strategic planning skills. It's a game that combines creativity with logic, offering endless depth and complexity while remaining accessible to players of all skill levels."
    }
]

const AboutChess = () => {
    return (
        <section id="about" className="py-32 px-6 transition-colors duration-300">
            <div className="max-w-3xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-serif text-primary">
                        About Chess
                    </h2>
                </motion.div>

                {/* Content Sections */}
                <div className="space-y-16">
                    {about.map((section, idx) => (
                        <motion.div
                            key={idx}
                            className="space-y-4 border-b pb-6 border-muted-foreground/50 last:border-0 last:pb-0"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                        >
                            <h3 className="text-2xl font-sans text-primary">
                                {section.title}
                            </h3>
                            <p className="text-muted-foreground font-sans leading-relaxed">
                                {section.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutChess;