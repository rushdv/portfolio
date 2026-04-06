import { motion } from "framer-motion";
import { Shield, Code, Cloud, GraduationCap } from "lucide-react";

const certifications = [
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2024",
    icon: Shield,
    status: "In Progress",
    skills: ["Penetration Testing", "Network Security", "Vulnerability Assessment"],
  },
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2024",
    icon: Cloud,
    status: "Planned",
    skills: ["Cloud Architecture", "Serverless", "DevOps"],
  },
  {
    title: "Full-Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2023",
    icon: Code,
    status: "Completed",
    skills: ["React", "Node.js", "MongoDB", "APIs"],
  },
  {
    title: "Computer Science Degree",
    issuer: "University",
    date: "2025 – Present",
    icon: GraduationCap,
    status: "In Progress",
    skills: ["Algorithms", "Data Structures", "System Design"],
  },
];

const statusStyle = {
  Completed: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  "In Progress": "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
  Planned: "bg-amber-500/10 border-amber-500/30 text-amber-400",
};

export default function Certifications({ theme }) {
  return (
    <section id="certifications" className="py-28 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center text-center mb-20 space-y-4"
        >
          <h2 className="flex items-center text-4xl font-black text-[var(--text-primary)] uppercase tracking-[0.2em]">
            <span className="text-cyan-500 mr-4 font-mono text-2xl opacity-60">07.</span> Certifications
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-5">
          {certifications.map((cert, i) => {
            const fromLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: fromLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{
                  y: -6,
                  transition: { type: "spring", stiffness: 350, damping: 20 },
                }}
                className="group glass-card p-7 rounded-2xl border border-white/10 hover:border-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/5 transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/0 via-cyan-500/40 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-start gap-5">
                    <motion.div
                      whileHover={{ rotate: -10, scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-colors duration-300"
                    >
                      <cert.icon size={22} className="text-cyan-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-[var(--text-primary)] font-bold mb-1">{cert.title}</h3>
                      <div className="text-[var(--text-secondary)] text-xs font-mono mb-3">
                        {cert.issuer} · {cert.date}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((s, j) => (
                          <motion.span
                            key={s}
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.08 + j * 0.05 }}
                            className="px-2.5 py-1 bg-white/5 border border-white/5 text-[var(--text-secondary)] text-[10px] font-mono rounded-md group-hover:border-white/10 transition-colors"
                          >
                            {s}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className={`self-start sm:self-center px-3 py-1.5 rounded-full border text-[10px] font-mono uppercase tracking-widest shrink-0 ${statusStyle[cert.status]}`}>
                    {cert.status}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
