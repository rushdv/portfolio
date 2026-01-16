import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, Terminal, CheckCircle, Copy } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const [copied, setCopied] = useState(null);

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-medium mb-4">
                        <Mail size={14} />
                        <span>Contact</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
                        Get In <span className="text-cyan-500">Touch</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        I'm currently opening to new opportunities. Whether you have a question
                        or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                    {/* Contact Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <div className="grid gap-6">
                            {[
                                { icon: Mail, label: "Email", value: "shihab.zn4@gmail.com", type: "email" },
                                { icon: Phone, label: "Phone", value: "+880 1600 350566", type: "phone" },
                                { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", type: "location" }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-4 bg-cyan-500/10 rounded-xl text-cyan-500 group-hover:scale-110 transition-transform duration-300">
                                            <item.icon size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-slate-400 text-sm font-medium mb-1">{item.label}</h3>
                                            <p className="text-slate-100 font-medium text-lg">{item.value}</p>
                                        </div>
                                        {item.type !== "location" && (
                                            <button
                                                onClick={() => copyToClipboard(item.value, item.type)}
                                                className="p-2 text-slate-500 hover:text-cyan-500 transition-colors"
                                                title="Copy"
                                            >
                                                {copied === item.type ? <CheckCircle size={20} className="text-green-500" /> : <Copy size={20} />}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Simple Message Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-xl"
                    >
                        <h3 className="text-2xl font-bold text-slate-100 mb-6">Send a Message</h3>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-slate-400 text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-slate-400 text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-slate-400 text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="How can I help you?"
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-cyan-500 text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-cyan-400 transition-colors duration-300 flex items-center justify-center gap-2"
                            >
                                <span>Send Message</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
