import { motion } from "framer-motion";
import { Star, GitFork, Code2, TrendingUp } from "lucide-react";
import useGitHubStats from "../hooks/useGitHubStats";

export default function GitHubStats({ theme }) {
    const { stats, loading } = useGitHubStats('rushdv');
    
    const defaultStats = {
        totalStars: 0,
        totalForks: 0,
        totalRepos: 0,
        contributions: 0,
        languages: []
    };

    const displayStats = stats || defaultStats;

    const statCards = [
        { icon: Star, label: "Stars Earned", value: displayStats.totalStars, color: "from-amber-500 to-orange-600" },
        { icon: GitFork, label: "Repository Forks", value: displayStats.totalForks, color: "from-cyan-500 to-blue-600" },
        { icon: Code2, label: "Total Projects", value: displayStats.totalRepos, color: "from-violet-500 to-purple-600" },
        { icon: TrendingUp, label: "Public Repos", value: displayStats.totalRepos, color: "from-emerald-500 to-teal-600" }
    ];

    return (
        <section id="github-stats" className="py-24 relative overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center text-center mb-20 space-y-4"
                >
                    <h2 className="flex items-center text-4xl font-black text-[var(--text-primary)] uppercase tracking-[0.2em]">
                        <span className="text-cyan-500 mr-4 font-mono text-2xl opacity-60">06.</span> GitHub Activity
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                    <p className="text-[var(--text-secondary)] max-w-2xl font-light text-lg">
                        Open-source contributions and development metrics
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {statCards.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                            whileHover={{ scale: 1.05, y: -8 }}
                            className="group glass-card p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-xl cursor-pointer"
                        >
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} mb-6 group-hover:shadow-lg group-hover:shadow-${stat.color.split('-')[1]}-500/50 transition-all duration-500`}>
                                <stat.icon className="text-white" size={28} strokeWidth={2} />
                            </div>
                            <div className="text-4xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-500">
                                {stat.value}
                            </div>
                            <div className="text-sm text-[var(--text-secondary)] font-mono uppercase tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Languages Chart */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="glass-card p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-xl"
                >
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 flex items-center gap-3">
                        <Code2 className="text-cyan-500" size={28} />
                        Top Languages
                    </h3>
                    {loading ? (
                        <div className="text-[var(--text-secondary)]">Loading GitHub data...</div>
                    ) : displayStats.languages && displayStats.languages.length > 0 ? (
                        <div className="space-y-6">
                            {displayStats.languages.slice(0, 5).map((lang, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                                >
                                    <div className="flex justify-between mb-3">
                                        <span className="text-[var(--text-primary)] font-semibold">{lang.name}</span>
                                        <span className="text-[var(--text-secondary)] font-mono text-sm font-bold">{lang.percentage}%</span>
                                    </div>
                                    <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden border border-white/10">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${lang.percentage}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full shadow-lg shadow-cyan-500/50"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-[var(--text-secondary)]">No language data available</div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
