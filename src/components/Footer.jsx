import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <a href="#" className="text-2xl font-bold font-mono text-cyan-500 block mb-4">
                        &lt;Shihab /&gt;
                    </a>
                    <p className="text-slate-400 max-w-sm">
                        Building digital experiences with clean code and modern design.
                        Let's create something amazing together.
                    </p>
                </div>

                <div>
                    <h3 className="text-slate-200 font-semibold mb-4">Links</h3>
                    <ul className="space-y-2 text-slate-400">
                        <li><a href="#about" className="hover:text-cyan-500 transition-colors">About</a></li>
                        <li><a href="#projects" className="hover:text-cyan-500 transition-colors">Projects</a></li>
                        <li><a href="#skills" className="hover:text-cyan-500 transition-colors">Skills</a></li>
                        <li><a href="#contact" className="hover:text-cyan-500 transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-slate-200 font-semibold mb-4">Contact</h3>
                    <ul className="space-y-2 text-slate-400">
                        <li>shihab@example.com</li>
                        <li>+1 (555) 123-4567</li>
                        <li className="flex gap-4 mt-4">
                            <a href="#" className="hover:text-cyan-500 transition-colors"><Github size={20} /></a>
                            <a href="#" className="hover:text-cyan-500 transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="hover:text-cyan-500 transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-cyan-500 transition-colors"><Mail size={20} /></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Shihab. All rights reserved.</p>
            </div>
        </footer>
    );
}
