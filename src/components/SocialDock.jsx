import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";

const socials = [
    { icon: <Github size={20} />, href: "https://github.com/rushdv/", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/shihab-shahriar-rashu-431a3a217/", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "https://twitter.com/rushdv313/", label: "Twitter" },
    { icon: <Mail size={20} />, href: "mailto:shihab@example.com", label: "Email" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" }
];

export default function SocialDock({ theme }) {
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="flex items-center gap-2 p-2 bg-[var(--bg-primary)]/40 backdrop-blur-xl border border-[var(--card-border)] rounded-2xl shadow-2xl transition-colors duration-500"
            >
                {socials.map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -4, scale: 1.1 }}
                        className="p-3 text-[var(--text-secondary)] hover:text-cyan-500 hover:bg-cyan-500/10 rounded-xl transition-all duration-200"
                        title={social.label}
                    >
                        {social.icon}
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
}
