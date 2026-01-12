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
                            Hello! My name is Shihab and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS was pretty fun!
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4 text-sm font-mono text-slate-400">
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-500">▹</span> React
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-500">▹</span> JavaScript (ES6+)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-500">▹</span> Node.js
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-500">▹</span> Python
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
                                    <div className="text-sm text-slate-400 font-mono">Years of Experience</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl font-bold text-cyan-500">10+</div>
                                    <div className="text-sm text-slate-400 font-mono">Projects Completed</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl font-bold text-cyan-500">5+</div>
                                    <div className="text-sm text-slate-400 font-mono">Happy Clients</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl font-bold text-cyan-500">24/7</div>
                                    <div className="text-sm text-slate-400 font-mono">Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
