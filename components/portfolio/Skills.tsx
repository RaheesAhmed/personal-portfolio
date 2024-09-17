import React from 'react';
import { motion } from 'framer-motion';

const skills = ['Python', 'FastAPI', 'Flask', 'Node.js', 'express.js', 'React', 'Next.js', 'AI Automation', 'API Development', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'SQL', 'MongoDB', 'PostgreSQL', 'Git', 'GitHub', 'Custom Chatbots', 'Web Scraping', 'Zapier Integrations', 'Make.com', 'Full Stack Development', 'AI Chatbot Development', 'AI Image Generation', 'Lnagchain', 'OpenAI', 'AI Integration', 'AI Agents', 'AI Tools', 'AI with Custom Tools', 'Assistant with Tools'];

const Skills = () => (
    <section className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-white">Skills</h2>
        <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
                <motion.span
                    key={index}
                    className="bg-gray-800 text-green-400 px-4 py-2 rounded-md text-lg font-semibold"
                    whileHover={{ scale: 1.05, backgroundColor: "#2C3E50" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    {skill}
                </motion.span>
            ))}
        </div>
    </section>
);

export default Skills;