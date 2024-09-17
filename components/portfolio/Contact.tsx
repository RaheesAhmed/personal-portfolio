import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => (
    <section>
        <h2 className="text-4xl font-bold mb-6 text-white">Get in Touch</h2>
        <p className="text-xl leading-relaxed text-gray-300 mb-6">
            Ready to bring your ideas to life? Let's collaborate on your next project and create something extraordinary together.
        </p>
        <motion.a
            href="mailto:raheesahmed256@gmail.com"
            className="bg-green-500 text-black font-bold py-3 px-8 rounded-md text-xl inline-block"
            whileHover={{ scale: 1.05, backgroundColor: "#4ADE80" }}
            whileTap={{ scale: 0.95 }}
        >
            Contact Me
        </motion.a>
    </section>
);

export default Contact;