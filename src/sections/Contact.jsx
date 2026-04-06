import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: "shihab.zn4@gmail.com", href: "mailto:shihab.zn4@gmail.com", desc: "Best for project inquiries" },
  { icon: Linkedin, label: "LinkedIn", value: "shihab-shahriar-rashu", href: "https://www.linkedin.com/in/shihab-shahriar-rashu-431a3a217/", desc: "Professional networking" },
  { icon: Github, label: "GitHub", value: "rushdv", href: "https://github.com/rushdv", desc: "Open-source work" },
];

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const listItem = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Contact({ theme }) {
  return (
    <section id="contact" className="py-28 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center text-center mb-20 space-y-4"
        >
          <h2 className="flex items-center text-4xl font-black text-[var(--text-primary)] uppercase tracking-[0.2em]">
            <span className="text-cyan-500 mr-4 font-mono text-2xl opacity-60">08.</span> Contact
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[var(--text-secondary)] text-lg leading-relaxed font-light max-w-xl mx-auto text-center mb-14"
          >
            I&apos;m currently open to new opportunities. Whether you have a project in mind, a question, or just want to connect — feel free to reach out.
          </motion.p>

          <motion.div
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-4"
          >
            {links.map(({ icon: Icon, label, value, href, desc }, i) => (
              <motion.a
                key={i}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                variants={listItem}
                whileHover={{
                  x: 8,
                  transition: { type: "spring", stiffness: 400, damping: 22 },
                }}
                className="group flex items-center justify-between glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/35 hover:shadow-lg hover:shadow-cyan-500/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-5">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-300"
                  >
                    <Icon size={20} className="text-cyan-400" />
                  </motion.div>
                  <div>
                    <div className="text-[var(--text-primary)] font-semibold text-sm">{label}</div>
                    <div className="text-[var(--text-secondary)] text-xs font-mono mt-0.5">{value}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[var(--text-secondary)] text-xs hidden sm:block">{desc}</span>
                  <motion.div
                    animate={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  >
                    <ArrowRight size={16} className="text-[var(--text-secondary)] group-hover:text-cyan-400 transition-colors duration-200" />
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
