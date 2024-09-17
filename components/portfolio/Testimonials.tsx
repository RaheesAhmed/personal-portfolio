import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
    {
        text: "Ahmed has successfully fulfilled his mission. He seamlessly integrated a ChatGPT-based chatbot and in-house training with Facebook Messenger, enabling the automation of customer responses. This has effectively streamlined customer interactions. I believe that implementing this bot will save me hundreds of hours of work during the holiday season.",
        project: "Integrate ChatGPT with Facebook Messenger",
        date: "Aug 12, 2023 - Aug 18, 2023",
        rating: 5,
        platform: "Upwork"
    },
    {
        text: "Amazing work. Very skilled at what he does and the out of the box thinking to solve challenges was top notch.",
        project: "AI Story Automation",
        date: "Jun 4, 2024 - Jun 28, 2024",
        rating: 5,
        platform: "Upwork"
    },
    {
        text: "Rahees was able to answer all of my AI questions and offered insightful solutions. I look forward to working with him again.",
        project: "30 minute consultation",
        date: "May 19, 2024 - Jun 4, 2024",
        rating: 5,
        platform: "Upwork"
    },
    {
        text: "Thank you for the quick responses and the ability to adapt to my project. Very professional service",
        client: "nico_dellagio",
        location: "Switzerland",
        platform: "Fiverr",
        rating: 5,
        date: "Mar 15, 2024"
    },
    {
        text: "fantastic, really knows his stuff. helped me with a problem been stuck with for days",
        client: "adamgreen575",
        location: "United Kingdom",
        platform: "Fiverr",
        rating: 5,
        date: "Feb 28, 2024"
    }
];

const Testimonials = () => (
    <section className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-white">Client Testimonials</h2>
        <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
                <motion.div
                    key={index}
                    className="bg-gray-900 p-6 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                    {testimonial.project && (
                        <p className="text-green-400 font-semibold">{testimonial.project}</p>
                    )}
                    {testimonial.client && (
                        <p className="text-green-400 font-semibold">{testimonial.client} - {testimonial.location}</p>
                    )}
                    <div className="flex items-center mt-2">
                        {testimonial.rating && (
                            <div className="flex mr-2">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400" />
                                ))}
                            </div>
                        )}
                        <span className="text-gray-400">{testimonial.platform}</span>
                    </div>
                    {testimonial.date && (
                        <p className="text-gray-500 text-sm mt-1">{testimonial.date}</p>
                    )}
                </motion.div>
            ))}
        </div>
        <div className="mt-8 flex justify-center space-x-4">
            <a href="https://www.upwork.com/freelancers/~01d7b5ac3b1f1b3985" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                View all Upwork reviews
            </a>
            <a href="https://www.fiverr.com/rahees_zada" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                View all Fiverr reviews
            </a>
        </div>
    </section>
);

export default Testimonials;