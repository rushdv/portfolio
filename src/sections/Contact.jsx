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
                        <Terminal size={14} />
                        <span>contact.js</span>
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
                                { icon: Phone, label: "Phone", value: "+880 1000 000000", type: "phone" },
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

                    {/* Terminal Style Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col"
                    >
                        {/* Terminal Header */}
                        <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="text-slate-400 text-xs font-mono">sendMessage.ts</div>
                            <div className="w-12"></div> {/* Spacer for centering */}
                        </div>

                        {/* Terminal Body */}
                        <div className="p-6 md:p-8 font-mono relative flex-1 bg-slate-900/90 backdrop-blur-sm">
                            <form className="space-y-4">
                                <div className="flex gap-4">
                                    <span className="text-slate-600 select-none">01</span>
                                    <div className="w-full">
                                        <span className="text-purple-400">const</span> <span className="text-blue-400">user</span> = <span className="text-yellow-400">{"{"}</span>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-center">
                                    <span className="text-slate-600 select-none">02</span>
                                    <div className="w-full flex items-center">
                                        <span className="text-slate-400 pl-4 w-24">name:</span>
                                        <span className="text-green-400">"</span>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className="bg-transparent border-none text-green-400 placeholder-slate-600 focus:ring-0 p-0 w-full outline-none font-mono"
                                        />
                                        <span className="text-green-400">",</span>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-center">
                                    <span className="text-slate-600 select-none">03</span>
                                    <div className="w-full flex items-center">
                                        <span className="text-slate-400 pl-4 w-24">email:</span>
                                        <span className="text-green-400">"</span>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                            className="bg-transparent border-none text-green-400 placeholder-slate-600 focus:ring-0 p-0 w-full outline-none font-mono"
                                        />
                                        <span className="text-green-400">",</span>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <span className="text-slate-600 select-none">04</span>
                                    <div className="w-full">
                                        <span className="text-yellow-400">{"}"}</span>;
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <span className="text-slate-600 select-none">05</span>
                                    <div className="w-full">
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <span className="text-slate-600 select-none">06</span>
                                    <div className="w-full">
                                        <span className="text-purple-400">const</span> <span className="text-blue-400">message</span> = <span className="text-green-400">`</span>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <span className="text-slate-600 select-none">07</span>
                                    <div className="w-full">
                                        <textarea
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            rows={4}
                                            placeholder="Write your message here..."
                                            className="w-full bg-transparent border-none text-slate-300 placeholder-slate-600 focus:ring-0 p-0 outline-none font-mono resize-none pl-4 leading-relaxed"
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <span className="text-slate-600 select-none">08</span>
                                    <div className="w-full">
                                        <span className="text-green-400">`</span>;
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <span className="text-slate-600 select-none">09</span>
                                    <div className="w-full">
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <span className="text-slate-600 select-none">10</span>
                                    <div className="w-full pt-2">
                                        <button
                                            type="button"
                                            className="group flex items-center gap-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-500 px-4 py-2 rounded-lg font-mono text-sm transition-all border border-cyan-500/30 hover:border-cyan-500/50"
                                        >
                                            <span>sendMessage(user, message)</span>
                                            <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
