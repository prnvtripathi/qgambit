"use client"

import { MessageSquare, Mic, Users, Zap } from "lucide-react";
import { motion } from 'motion/react';

const features = [
  {
    icon: Users,
    title: "Play with Friends",
    description: "Invite your friends and challenge them to competitive matches.",
  },
  {
    icon: MessageSquare,
    title: "Real-time Chat",
    description: "Communicate with your opponent during matches.",
  },
  {
    icon: Mic,
    title: "Voice Chat",
    description: "Talk strategy or just chat with built-in voice communication features.",
  },
  {
    icon: Zap,
    title: "Instant Matches",
    description: "Jump into games quickly with our streamlined, minimal interface.",
  },
];

const Features = () => {
  return (
    <section className="py-32 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-primary mb-4">
            Everything You Need
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-serif max-w-2xl mx-auto">
            A complete chess experience built for modern players
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <motion.div 
                className="text-center space-y-4"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <motion.div 
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-primary mb-2"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-sans text-slate-900 dark:text-slate-100">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground font-sans leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;