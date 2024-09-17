import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const ProfessionalProfiles = () => (
    <section className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-white">Professional Profiles</h2>
        <div className="flex flex-wrap gap-6">
            <motion.a
                href="https://www.upwork.com/freelancers/~01d7b5ac3b1f1b3985"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-md font-bold text-lg inline-flex items-center"
                whileHover={{ scale: 1.05, backgroundColor: "#059669" }}
            >
                Upwork Profile
            </motion.a>
            <motion.a
                href="https://www.fiverr.com/rahees_zada"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-md font-bold text-lg inline-flex items-center"
                whileHover={{ scale: 1.05, backgroundColor: "#10B981" }}
            >
                Fiverr Profile
            </motion.a>
            <motion.a
                href="https://github.com/RaheesAhmed"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-6 py-3 rounded-md font-bold text-lg inline-flex items-center"
                whileHover={{ scale: 1.05, backgroundColor: "#374151" }}
            >
                <FaGithub className="mr-2" /> GitHub Profile
            </motion.a>
            <motion.a
                href="https://www.linkedin.com/in/raheesahmed/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-6 py-3 rounded-md font-bold text-lg inline-flex items-center"
                whileHover={{ scale: 1.05, backgroundColor: "#0a66c2" }}
            >
                Linkedin Profile
            </motion.a>
        </div>
    </section>
);

export default ProfessionalProfiles;