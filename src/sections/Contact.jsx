import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, Terminal, CheckCircle, Copy } from "lucide-react";
import { useState } from "react";

export default function Contact({ theme }) {
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
        <section id="contact" className="py-24 relative overflow-hidden transition-colors duration-500">
            {/* Background Gradients */}
            <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] -mr-64 -mt-64 transition-opacity duration-1000 ${theme === 'dark' ? 'bg-cyan-500/5' : 'bg-cyan-500/10 opacity-60 mix-blend-multiply'}`}></div>
            <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] -ml-64 -mb-64 transition-opacity duration-1000 ${theme === 'dark' ? 'bg-blue-600/5' : 'bg-blue-600/10 opacity-60 mix-blend-multiply'}`}></div>
            {theme === 'light' && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full"></div>}

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-20 space-y-4"
                >
                    <h2 className="flex items-center text-4xl font-black text-[var(--text-primary)] uppercase tracking-[0.2em]">
                        <span className="text-cyan-500 mr-4 font-mono text-2xl opacity-60">05.</span> Get In <span className="ml-3 text-gradient">Touch</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                    <p className="text-[var(--text-secondary)] max-w-2xl font-light text-lg">
                        Currently exploring new opportunities and interesting collaborations. My inbox is always open whether you have a question or just want to connect.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">

                    {/* Contact Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2 space-y-4"
                    >
                        {[
                            { icon: Mail, label: "Email", value: "shihab.zn4@gmail.com", type: "email" },
                            { icon: Phone, label: "Phone", value: "+880 1600 350566", type: "phone" },
                            { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", type: "location" }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="glass-card p-6 rounded-[2rem] border-white/5 hover:border-cyan-500/20 transition-all duration-500 group"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 group-hover:scale-110 transition-transform duration-500">
                                        <item.icon size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-slate-500 text-[10px] uppercase tracking-widest font-mono mb-1">{item.label}</h3>
                                        <p className="text-[var(--text-primary)] font-medium text-lg tracking-tight">{item.value}</p>
                                    </div>
                                    {item.type !== "location" && (
                                        <button
                                            onClick={() => copyToClipboard(item.value, item.type)}
                                            className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-cyan-500 hover:bg-cyan-500/10 transition-all"
                                            title="Copy"
                                        >
                                            {copied === item.type ? <CheckCircle size={18} className="text-green-400" /> : <Copy size={18} />}
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}

                        <div className="p-8 mt-8 glass-card rounded-[2rem] border-white/5 opacity-60">
                            <div className="flex items-center gap-3 text-cyan-500 mb-4">
                                <Terminal size={20} />
                                <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold">Network Status</span>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-[11px] font-mono">
                                    <span className="text-slate-500">Node Status</span>
                                    <span className="text-emerald-500 font-bold">Online</span>
                                </div>
                                <div className="flex justify-between text-[11px] font-mono">
                                    <span className="text-slate-500">Traffic Level</span>
                                    <span className="text-cyan-500 font-bold">Optimized</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Simple Message Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-3 glass-card p-10 rounded-[2rem] border-white/5 shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>

                        <h3 className="text-2xl font-black text-[var(--text-primary)] mb-8 tracking-tight">Direct <span className="text-gradient">Transmission</span></h3>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-slate-500 text-[10px] uppercase tracking-widest font-mono ml-4">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-[var(--text-primary)] placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900/80 transition-all duration-300 font-light"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-slate-500 text-[10px] uppercase tracking-widest font-mono ml-4">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email address"
                                        className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-[var(--text-primary)] placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900/80 transition-all duration-300 font-light"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-slate-500 text-[10px] uppercase tracking-widest font-mono ml-4">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Enter your message payload..."
                                    className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-[var(--text-primary)] placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900/80 transition-all duration-300 resize-none font-light"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-cyan-500 text-slate-950 font-black py-4 px-8 rounded-2xl hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs shadow-[0_0_30px_rgba(6,182,212,0.2)] active:scale-95"
                            >
                                <span>Execute Send</span>
                                <Send size={16} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>


    );
}
