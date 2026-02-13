import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-16 items-center"
                >
                    {/* Text Content */}
                    <div className="space-y-6">
                        <h2 className="flex items-center text-3xl font-bold text-slate-100">
                            <span className="text-cyan-500 mr-2">01.</span> About Me
                        </h2>
                        <div className="w-20 h-1 bg-cyan-500/50 rounded-full"></div>

                        <p className="text-slate-400 text-lg leading-relaxed">
                            I am a dedicated Full-Stack Developer and Security Enthusiast with a passion for building robust, scalable, and secure digital solutions. Currently contributing to <span className="text-cyan-500 font-medium">DevEleven-io</span>, I focus on transforming complex requirements into elegant, high-performance web architectures.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            My journey is driven by a deep curiosity for how things work under the hood, leading me to specialize in both modern web technologies and cybersecurity. I believe that performance and security should go hand-in-hand in every project I build.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4 text-sm font-mono text-slate-400">
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-500">▹</span> React / Vite
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-500">▹</span> FastAPI / Python
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-500">▹</span> PostgreSQL / NeonDB
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-500">▹</span> Cybersecurity Auditing
                            </li>
                        </div>
                    </div>

                    {/* Stats / Image Placeholder */}
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-cyan-500/20 rounded-lg blur-xl group-hover:bg-cyan-500/30 transition-all duration-300"></div>
                        <div className="relative bg-slate-800 p-8 rounded-lg border border-white/10 text-center space-y-8">
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <div className="text-4xl font-bold text-cyan-500">5+</div>
                                    <div className="text-sm text-slate-400 font-mono">Years Building</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl font-bold text-cyan-500">15+</div>
                                    <div className="text-sm text-slate-400 font-mono">Projects Done</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl font-bold text-cyan-500">300+</div>
                                    <div className="text-sm text-slate-400 font-mono">Commits</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl font-bold text-cyan-500">100%</div>
                                    <div className="text-sm text-slate-400 font-mono">Security Focus</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
