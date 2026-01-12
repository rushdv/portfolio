import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl font-bold text-slate-100">
                            <span className="text-cyan-500 mr-2">04.</span> Get In Touch
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Although I'm not currently looking for any new opportunities, my inbox is always open.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-slate-800 p-8 rounded-2xl border border-white/5 space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-500">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-slate-100 font-semibold mb-1">Email</h3>
                                        <p className="text-slate-400">shihab.zn4@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-500">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-slate-100 font-semibold mb-1">Phone</h3>
                                        <p className="text-slate-400">+880 1000 000000</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-500">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-slate-100 font-semibold mb-1">Location</h3>
                                        <p className="text-slate-400">Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-slate-100 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                                        placeholder="Abdullah"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-slate-100 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-slate-100 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-slate-100 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-cyan-500 text-slate-900 font-bold py-4 rounded-lg hover:bg-cyan-400 transition-all flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
