import { motion } from "framer-motion";
import { Star, GitFork, Code2, TrendingUp } from "lucide-react";
import TextDecrypt from "../components/TextDecrypt";
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
        { icon: Star, label: "Total Stars", value: displayStats.totalStars, color: "text-yellow-500" },
        { icon: GitFork, label: "Total Forks", value: displayStats.totalForks, color: "text-cyan-500" },
        { icon: Code2, label: "Repositories", value: displayStats.totalRepos, color: "text-blue-500" },
        { icon: TrendingUp, label: "Public Repos", value: displayStats.totalRepos, color: "text-green-500" }
    ];

    return (
        <section id="github-stats" className="py-24 relative overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-20 space-y-4"
                >
                    <h2 className="flex items-center text-4xl font-black text-[var(--text-primary)] uppercase tracking-[0.2em]">
                        <span className="text-cyan-500 mr-4 font-mono text-2xl opacity-60">06.</span>
                        <TextDecrypt text="GitHub" />
                        <span className="ml-3 text-gradient"><TextDecrypt text="Activity" delay={500} /></span>
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
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass-card p-6 rounded-2xl border-white/5 transition-all duration-500 ${theme === 'dark' ? 'hover:border-cyan-500/20' : 'hover:border-cyan-500/30 hover:shadow-lg'}`}
                        >
                            <stat.icon className={`${stat.color} mb-4`} size={32} />
                            <div className="text-3xl font-black text-[var(--text-primary)] mb-2">{stat.value}</div>
                            <div className="text-sm text-[var(--text-secondary)] font-mono uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Languages Chart */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-8 rounded-3xl border-white/5 mb-16"
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
                                <div key={index}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-[var(--text-primary)] font-medium">{lang.name}</span>
                                        <span className="text-[var(--text-secondary)] font-mono text-sm">{lang.percentage}%</span>
                                    </div>
                                    <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${lang.percentage}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: index * 0.05 }}
                                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                                        />
                                    </div>
                                </div>
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
