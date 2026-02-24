import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Shield, Cpu, Database, Network } from 'lucide-react';

const logs = [
    { icon: Shield, text: "Kernel Protection: ACTIVE", color: "text-emerald-500" },
    { icon: Activity, text: "Neural Link: OPTIMIZED", color: "text-cyan-500" },
    { icon: Cpu, text: "Uptime: 99.98% [STABLE]", color: "text-blue-500" },
    { icon: Database, text: "Data Integrity: VERIFIED", color: "text-purple-500" },
    { icon: Network, text: "Node Latency: < 12ms", color: "text-pink-500" },
    { icon: Shield, text: "Zero Trust Protocol: ENABLED", color: "text-emerald-400" },
    { icon: Activity, text: "Threat Detection Scan: CLEAN", color: "text-cyan-400" }
];

const SystemTicker = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % logs.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const currentLog = logs[index];

    return (
        <div className="fixed bottom-0 left-0 w-full h-8 bg-slate-950/90 backdrop-blur-md border-t border-white/5 z-[9999] flex items-center px-6 overflow-hidden select-none">
            <div className="flex items-center gap-2 mr-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-slate-500">Live_Status_Feed</span>
            </div>

            <div className="flex-1 flex items-center relative h-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="flex items-center gap-3"
                    >
                        <currentLog.icon size={10} className={currentLog.color} />
                        <span className={`text-[10px] font-mono tracking-widest ${currentLog.color} uppercase opacity-80`}>
                            {currentLog.text}
                        </span>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex items-center gap-4 ml-auto font-mono text-[9px] text-slate-500 uppercase tracking-widest hidden md:flex">
                <span>MEM: 4.2GB</span>
                <span className="opacity-30">|</span>
                <span>CPU: 12%</span>
                <span className="opacity-30">|</span>
                <span>LOC: DHAKA_BD</span>
            </div>
        </div>
    );
};

export default SystemTicker;
