import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, ChevronRight, Shield, ShieldAlert, Cpu } from 'lucide-react';

const CommandConsole = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', content: 'Shihab OS v1.0.4 - Secure Kernel Initialized.' },
        { type: 'system', content: 'Type "/help" for available commands.' }
    ]);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const commands = {
        '/help': 'Display all available system commands.',
        '/skills': 'Scan and list all technical competencies.',
        '/clear': 'Flush system console history.',
        '/security-scan': 'Initiate a deep architectural integrity audit.',
        '/about': 'Access core developer methodology.',
        '/contact': 'Open communication endpoints.'
    };

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            setHistory(prev => [...prev, { type: 'user', content: cmd }]);

            setTimeout(() => {
                if (cmd === '/help') {
                    setHistory(prev => [...prev, { type: 'system', content: 'Available Directives:' }, ...Object.entries(commands).map(([c, d]) => ({ type: 'system', content: `${c} - ${d}` }))]);
                } else if (cmd === '/clear') {
                    setHistory([]);
                } else if (cmd === '/skills') {
                    setHistory(prev => [...prev, { type: 'system', content: 'Scanning Tech Stack...' }, { type: 'success', content: 'Kernel: React, Node, Python, C++, Go' }, { type: 'success', content: 'Defense: JWT, OAuth2, ZeroTrust, PenTesting' }]);
                } else if (cmd === '/security-scan') {
                    setHistory(prev => [...prev, { type: 'system', content: 'Initializing Audit...' }, { type: 'success', content: 'System Integrity: [SECURE]' }, { type: 'success', content: 'Firewall: [ACTIVE]' }, { type: 'success', content: 'Architectural Vulnerabilities: 0' }]);
                } else if (cmd === '/about') {
                    setHistory(prev => [...prev, { type: 'system', content: 'Developer ID: Shihab Shahriar' }, { type: 'system', content: 'Focus: High-Performance Secure Infrastructure' }]);
                } else if (cmd === '/contact') {
                    setHistory(prev => [...prev, { type: 'system', content: 'Ping: shihab.zn4@gmail.com' }]);
                    window.location.hash = '#contact';
                } else {
                    setHistory(prev => [...prev, { type: 'error', content: `Command not found: ${cmd}` }]);
                }
            }, 500);

            setInput('');
        }
    };

    return (
        <>
            {/* Floating System Health Widget */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 left-8 z-50 flex items-center gap-3 px-4 py-3 bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.1)] group"
            >
                <div className="relative">
                    <Terminal size={18} className="text-cyan-500" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-300 group-hover:text-cyan-400 transition-colors">System Command</span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        className="fixed bottom-24 left-8 z-50 w-[400px] h-[450px] bg-slate-950/95 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl overflow-hidden flex flex-col font-mono"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                            <div className="flex items-center gap-2">
                                <Cpu size={14} className="text-cyan-500" />
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Shihab_OS // Terminal</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
                                <X size={16} />
                            </button>
                        </div>

                        {/* Console Body */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-6 space-y-3 scrollbar-hide text-[12px]"
                        >
                            {history.map((line, i) => (
                                <div key={i} className={`leading-relaxed ${line.type === 'user' ? 'text-white' :
                                        line.type === 'error' ? 'text-rose-500' :
                                            line.type === 'success' ? 'text-emerald-400' : 'text-cyan-400/80'
                                    }`}>
                                    {line.type === 'user' && <span className="text-slate-500 mr-2">$</span>}
                                    {line.content}
                                </div>
                            ))}
                        </div>

                        {/* Input Line */}
                        <div className="p-6 bg-white/5 border-t border-white/5 flex items-center gap-2">
                            <ChevronRight size={14} className="text-cyan-500" />
                            <input
                                autoFocus
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleCommand}
                                placeholder="type directive..."
                                className="bg-transparent border-none outline-none text-white w-full placeholder-slate-700 text-[12px]"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default CommandConsole;
