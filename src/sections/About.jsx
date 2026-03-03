import { motion } from "framer-motion";

export default function About({ theme }) {
    return (
        <section id="about" className="py-24 relative overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-2 gap-16 items-center"
                >
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[var(--text-primary)] uppercase tracking-wider">
                            About Me
                        </h2>

                        <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-light">
                            I am a Full-Stack Developer with experience building scalable web applications. I emphasize clean architecture, performance,
                            and security in every project.
                        </p>

                        <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-light">
                            I work with React, Node.js, Python, and PostgreSQL, and I enjoy tackling challenging problems and learning new technologies.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
