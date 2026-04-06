import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/rushdv", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shihab-shahriar-rashu-431a3a217/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/rushdv313/", label: "Twitter" },
  { icon: Mail, href: "mailto:shihab.zn4@gmail.com", label: "Email" },
];

export default function Footer({ theme }) {
  return (
    <footer className="relative border-t border-[var(--card-border)] transition-colors duration-500 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10">
            <img src="/shihab.jpg" alt="Shihab" className="w-full h-full object-cover grayscale" />
          </div>
          <span className="text-[var(--text-secondary)] text-xs font-mono uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Shihab Shahriar
          </span>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              title={label}
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500/20 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="text-[var(--text-secondary)] text-[10px] font-mono uppercase tracking-widest opacity-50">
          Built with React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
