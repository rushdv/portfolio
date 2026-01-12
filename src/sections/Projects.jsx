import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
    {
        title: "Project One",
        description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information of each track.",
        tags: ["React", "Express", "Spotify API", "Styled Components"],
        github: "#",
        live: "#"
    },
    {
        title: "Project Two",
        description: "A nice and fresh start for a new portfolio site. Built with React and Tailwind CSS. Fully responsive and accessible.",
        tags: ["React", "Tailwind CSS", "Framer Motion"],
        github: "#",
        live: "#"
    },
    {
        title: "Project Three",
        description: "Web application that allows users to search for movies and view details about them. Uses the TMDB API.",
        tags: ["Next.js", "TypeScript", "TMDB API"],
        github: "#",
        live: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-12"
                >
                    <h2 className="flex items-center text-3xl font-bold text-slate-100">
                        <span className="text-cyan-500 mr-2">02.</span> Some Things I've Built
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="group bg-slate-800 p-8 rounded-xl border border-white/5 hover:border-cyan-500/50 transition-colors shadow-lg"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="text-cyan-500">
                                        <Folder size={40} />
                                    </div>
                                    <div className="flex gap-4 text-slate-400">
                                        <a href={project.github} className="hover:text-cyan-500 transition-colors"><Github size={20} /></a>
                                        <a href={project.live} className="hover:text-cyan-500 transition-colors"><ExternalLink size={20} /></a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-cyan-500 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 mb-8 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 text-xs font-mono text-slate-500">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="bg-slate-900/50 px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
