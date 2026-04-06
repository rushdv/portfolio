import { motion } from "framer-motion";
import { Star, GitFork, Code2, BookOpen } from "lucide-react";
import useGitHubStats from "../hooks/useGitHubStats";

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const gridCard = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function GitHubStats({ theme }) {
  const { stats, loading } = useGitHubStats("rushdv");

  const statCards = [
    { icon: Star, label: "Stars Earned", value: stats?.totalStars ?? "—", color: "from-amber-500 to-orange-500" },
    { icon: GitFork, label: "Forks", value: stats?.totalForks ?? "—", color: "from-cyan-500 to-blue-500" },
    { icon: Code2, label: "Repositories", value: stats?.totalRepos ?? "—", color: "from-violet-500 to-purple-500" },
    { icon: BookOpen, label: "Followers", value: stats?.followers ?? "—", color: "from-emerald-500 to-teal-500" },
  ];

  return (
    <section id="github-stats" className="py-28 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center text-center mb-20 space-y-4"
        >
          <h2 className="flex items-center text-4xl font-black text-[var(--text-primary)] uppercase tracking-[0.2em]">
            <span className="text-cyan-500 mr-4 font-mono text-2xl opacity-60">06.</span> GitHub Activity
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          />
          <p className="text-[var(--text-secondary)] max-w-xl font-light">
            Open-source contributions and development metrics.
          </p>
        </motion.div>

        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8"
        >
          {statCards.map((stat, i) => (
            <motion.div
              key={i}
              variants={gridCard}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { type: "spring", stiffness: 350, damping: 18 },
              }}
              className="group glass-card p-7 rounded-2xl border border-white/10 hover:border-white/22 hover:shadow-xl hover:shadow-black/15 transition-colors duration-300 text-center"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-5 shadow-lg`}
              >
                <stat.icon className="text-white" size={22} strokeWidth={2} />
              </motion.div>
              <div className="text-3xl font-bold text-[var(--text-primary)] mb-1">
                {loading ? (
                  <motion.span
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    className="text-[var(--text-secondary)] text-xl"
                  >
                    —
                  </motion.span>
                ) : stat.value}
              </div>
              <div className="text-[var(--text-secondary)] text-[10px] font-mono uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass-card p-8 rounded-2xl border border-white/10 hover:border-white/18 transition-colors duration-300"
        >
          <h3 className="text-lg font-bold text-[var(--text-primary)] mb-7 flex items-center gap-2">
            <Code2 size={20} className="text-cyan-500" />
            Top Languages
          </h3>
          {loading ? (
            <div className="space-y-5">
              {[80, 60, 45].map((w, i) => (
                <div key={i}>
                  <motion.div
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2 }}
                    className="h-3 bg-white/5 rounded-full mb-2"
                    style={{ width: `${w / 4}%` }}
                  />
                  <motion.div
                    animate={{ opacity: [0.15, 0.35, 0.15] }}
                    transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2 }}
                    className="h-1.5 bg-white/5 rounded-full"
                    style={{ width: `${w}%` }}
                  />
                </div>
              ))}
            </div>
          ) : stats?.languages?.length > 0 ? (
            <div className="space-y-5">
              {stats.languages.slice(0, 5).map((lang, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.09, ease: "easeOut" }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-[var(--text-primary)] text-sm font-medium">{lang.name}</span>
                    <span className="text-[var(--text-secondary)] text-xs font-mono">{lang.percentage}%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-[var(--text-secondary)] text-sm">No language data available.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
