import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Web Developer",
    company: "DevEleven-io",
    location: "Remote",
    period: "2024 – Present",
    description: "Building and maintaining full-stack web applications within a GitHub organization. Focused on security-centric architecture, clean component design, and delivering high-performance products collaboratively.",
    skills: ["React", "Vite", "Tailwind CSS", "API Development"],
  },
  {
    title: "Computer Science Student",
    company: "University",
    location: "Bangladesh",
    period: "2025 – Present",
    description: "Studying core CS fundamentals with a focus on algorithms, data structures, and network security. Actively applying academic knowledge through a growing portfolio of security tools and web platforms.",
    skills: ["Algorithms", "Python", "Network Security", "Databases"],
  },
  {
    title: "Open Source Contributor",
    company: "Various Projects",
    location: "GitHub",
    period: "2022 – Present",
    description: "Contributing to open-source projects across debugging tools, security utilities, and developer tooling. Focused on code quality, documentation, and building tools that solve real problems.",
    skills: ["Git", "System Design", "JavaScript", "Security Auditing"],
  },
];

export default function Experience({ theme }) {
  return (
    <section id="experience" className="py-28 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center text-center mb-20 space-y-4"
        >
          <h2 className="flex items-center text-4xl font-black text-[var(--text-primary)] uppercase tracking-[0.2em]">
            <span className="text-cyan-500 mr-4 font-mono text-2xl opacity-60">04.</span> Experience
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
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{
                x: 6,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
              className="group glass-card p-8 rounded-2xl border border-white/10 hover:border-white/25 hover:shadow-lg hover:shadow-black/10 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1.5">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)] font-mono">
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={13} className="text-cyan-500 opacity-70" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-cyan-500 opacity-70" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono uppercase tracking-widest rounded-full">
                  <Calendar size={11} />
                  {exp.period}
                </span>
              </div>

              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 font-light">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 + j * 0.05 }}
                    className="px-3 py-1 bg-white/5 border border-white/5 text-[var(--text-secondary)] rounded-lg text-[10px] font-mono group-hover:text-[var(--text-primary)] group-hover:border-white/10 transition-colors duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
