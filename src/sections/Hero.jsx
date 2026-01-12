export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-black text-white pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full">

        <div className="max-w-3xl">
          <p className="text-sm text-gray-400 mb-4">
            Hi, I’m
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Shihab <br />
            <span className="text-gray-400 text-3xl md:text-5xl font-medium">
              Frontend Developer
            </span>
          </h1>

          <p className="text-gray-400 max-w-xl mb-10">
            I build clean, modern, and scalable web interfaces with a strong
            focus on user experience and performance.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 rounded-lg text-sm text-gray-300 hover:text-white hover:border-white transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}    
