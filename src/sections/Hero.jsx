export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center px-6">

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-blue-500">YourName</span>
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Frontend Developer focused on building clean, modern,
          and security-aware web experiences.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-600 hover:border-white rounded-lg"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  )
}
