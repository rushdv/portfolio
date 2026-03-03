import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact({ theme }) {
    return (
        <section id="contact" className="py-24 relative overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-20 space-y-4"
                >
                    <h2 className="text-4xl font-bold text-[var(--text-primary)] uppercase tracking-wider">
                        Contact
                    </h2>
                    <p className="text-[var(--text-secondary)] max-w-2xl font-light text-lg">
                        For inquiries or opportunities, please email <a href="mailto:shihab.zn4@gmail.com" className="text-cyan-400 hover:underline">shihab.zn4@gmail.com</a> or connect on LinkedIn.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
