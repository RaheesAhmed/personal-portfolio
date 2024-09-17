import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    { name: 'AI-powered Social Media Marketing', url: 'https://github.com/RaheesAhmed/-aI-powered-social-media-marketing' },
    { name: 'OpenAI Assistants API v2', url: 'https://github.com/RaheesAhmed/openai-assistants-api-v2' },
    { name: 'Math Physics Learning Platform', url: 'https://github.com/RaheesAhmed/math-physics-learning-platform' },
    { name: 'Pro Article Writer', url: 'https://github.com/RaheesAhmed/pro-article-writter' },
    { name: 'Company Insights Chatbot', url: 'https://github.com/RaheesAhmed/Company-Insights-Chatbot' },
    { name: 'Assistant with Tools', url: 'https://github.com/RaheesAhmed/assistant_with_tools' },
];

const Projects = () => (
    <section className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
                <motion.a
                    key={index}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 p-6 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.03, backgroundColor: "#1A202C" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <h3 className="text-xl font-bold mb-2 text-yellow-300">{project.name}</h3>
                    <p className="text-gray-400 text-sm">View on GitHub</p>
                </motion.a>
            ))}
        </div>
    </section>
);

export default Projects;