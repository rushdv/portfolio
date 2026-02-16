import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer({ theme }) {
    return (
        <footer className="relative overflow-hidden transition-colors duration-500 py-16 border-t border-[var(--card-border)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16 relative z-10">
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <a href="#home" className="text-2xl font-black tracking-tighter text-[var(--text-primary)] flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center border border-white/5 transition-transform group-hover:rotate-12 shadow-xl">
                            <img src="/shihab.jpg" alt="Shihab" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <span className="font-outfit uppercase tracking-[0.2em] text-sm opacity-80">Shihab</span>
                    </a>
                    <p className="text-[var(--text-secondary)] max-w-sm font-light leading-relaxed">
                        Architecting the future with secure, high-performance digital environments. Dedicated to clean code and uncompromising architectural integrity.
                    </p>
                </div>

                <div>
                    <h3 className="text-[var(--text-primary)] font-bold text-xs uppercase tracking-[0.2em] mb-6 font-mono opacity-60">Sitemap</h3>
                    <ul className="space-y-4 text-[var(--text-secondary)] text-sm font-light">
                        <li><a href="#about" className="hover:text-cyan-500 transition-colors">Information</a></li>
                        <li><a href="#projects" className="hover:text-cyan-500 transition-colors">Creations</a></li>
                        <li><a href="#skills" className="hover:text-cyan-500 transition-colors">Stack</a></li>
                        <li><a href="#contact" className="hover:text-cyan-500 transition-colors">Connection</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-[var(--text-primary)] font-bold text-xs uppercase tracking-[0.2em] mb-6 font-mono opacity-60">Socials</h3>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <a href="https://github.com/rushdv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[var(--text-secondary)] hover:text-cyan-500 hover:bg-cyan-500/10 transition-all"><Github size={18} /></a>
                            <a href="https://www.linkedin.com/in/shihab-shahriar-rashu-431a3a217/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[var(--text-secondary)] hover:text-cyan-500 hover:bg-cyan-500/10 transition-all"><Linkedin size={18} /></a>
                            <a href="https://twitter.com/rushdv313/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[var(--text-secondary)] hover:text-cyan-500 hover:bg-cyan-500/10 transition-all"><Twitter size={18} /></a>
                        </div>
                        <p className="text-[var(--text-secondary)] text-[11px] font-mono tracking-wider">shihab.zn4@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-[var(--card-border)] flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                <p className="text-[var(--text-secondary)] text-[10px] uppercase font-mono tracking-widest opacity-60">
                    &copy; {new Date().getFullYear()} S.Shahriar / All Rights Reserved
                </p>
                <div className="flex gap-8 text-[10px] uppercase font-mono tracking-widest text-[var(--text-secondary)] opacity-60">
                    <span className="hover:text-cyan-500 cursor-pointer transition-colors">Privacy</span>
                    <span className="hover:text-cyan-500 cursor-pointer transition-colors">Terms</span>
                </div>
            </div>
        </footer>


    );
}
