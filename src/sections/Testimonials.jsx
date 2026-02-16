import { motion } from "framer-motion";
import { Quote, Star, Briefcase } from "lucide-react";
import { useState } from "react";
import TextDecrypt from "../components/TextDecrypt";

export default function Testimonials({ theme }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            name: "DevEleven Team",
            role: "Organization Lead",
            company: "DevEleven-io",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=dev1",
            rating: 5,
            text: "Shihab consistently delivers high-quality, security-focused solutions. His attention to detail and architectural thinking make him a valuable asset to any development team."
        },
        {
            name: "Open Source Community",
            role: "Fellow Contributor",
            company: "GitHub",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=dev2",
            rating: 5,
            text: "A dedicated contributor who brings fresh perspectives to complex problems. His code is clean, well-documented, and follows best practices."
        },
        {
            name: "University Mentor",
            role: "Computer Science Professor",
            company: "University",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=dev3",
            rating: 5,
            text: "Exceptional problem-solving skills and a deep understanding of algorithms and system design. Always eager to learn and help peers."
        }
    ];

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-24 relative overflow-hidden transition-colors duration-500">
            {/* Background Gradients */}
            <div className={`absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] -ml-64 -mt-64 transition-opacity duration-1000 ${theme === 'dark' ? 'bg-cyan-500/5' : 'bg-cyan-500/10 opacity-60'}`}></div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-20 space-y-4"
                >
                    <h2 className="flex items-center text-4xl font-black text-[var(--text-primary)] uppercase tracking-[0.2em]">
                        <span className="text-cyan-500 mr-4 font-mono text-2xl opacity-60">08.</span>
                        <TextDecrypt text="What" />
                        <span className="ml-3 text-gradient"><TextDecrypt text="People Say" delay={500} /></span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                </motion.div>

                {/* Testimonial Card */}
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className={`glass-card p-12 rounded-3xl border-white/5 relative ${theme === 'dark' ? 'hover:border-cyan-500/20' : 'hover:border-cyan-500/30'}`}
                >
                    {/* Quote Icon */}
                    <Quote className="text-cyan-500/20 absolute top-8 left-8" size={64} />

                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-8 relative z-10">
                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                            <Star key={i} className="text-yellow-500 fill-yellow-500" size={20} />
                        ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-12 text-center font-light italic relative z-10">
                        "{testimonials[activeIndex].text}"
                    </p>

                    {/* Author Info */}
                    <div className="flex flex-col items-center gap-4 relative z-10">
                        <img
                            src={testimonials[activeIndex].image}
                            alt={testimonials[activeIndex].name}
                            className="w-16 h-16 rounded-full border-2 border-cyan-500/30"
                        />
                        <div className="text-center">
                            <h4 className="text-lg font-bold text-[var(--text-primary)]">{testimonials[activeIndex].name}</h4>
                            <div className="flex items-center justify-center gap-2 text-sm text-[var(--text-secondary)] font-mono">
                                <Briefcase size={14} className="text-cyan-500" />
                                <span>{testimonials[activeIndex].role}</span>
                                <span className="opacity-50">•</span>
                                <span>{testimonials[activeIndex].company}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Navigation */}
                <div className="flex justify-center items-center gap-6 mt-12">
                    <button
                        onClick={prevTestimonial}
                        className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${theme === 'dark' ? 'border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10' : 'border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10'}`}
                    >
                        <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className="flex gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === activeIndex ? 'bg-cyan-500 w-8' : 'bg-white/20'}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextTestimonial}
                        className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${theme === 'dark' ? 'border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10' : 'border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10'}`}
                    >
                        <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
