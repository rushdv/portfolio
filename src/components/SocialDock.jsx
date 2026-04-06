import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socials = [
  { icon: <Github size={18} />, href: "https://github.com/rushdv/", label: "GitHub" },
  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/shihab-shahriar-rashu-431a3a217/", label: "LinkedIn" },
  { icon: <Twitter size={18} />, href: "https://twitter.com/rushdv313/", label: "Twitter" },
  { icon: <Mail size={18} />, href: "mailto:shihab.zn4@gmail.com", label: "Email" },
];

export default function SocialDock() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="fixed left-6 bottom-0 z-50 hidden lg:flex flex-col items-center gap-4 pb-0"
    >
      <div className="flex flex-col gap-3">
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            title={s.label}
            whileHover={{ x: 4 }}
            className="text-[var(--text-secondary)] hover:text-cyan-400 transition-colors duration-200"
          >
            {s.icon}
          </motion.a>
        ))}
      </div>
      <div className="w-px h-24 bg-gradient-to-b from-[var(--card-border)] to-transparent mt-2" />
    </motion.div>
  );
}
