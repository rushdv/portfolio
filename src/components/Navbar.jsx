import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo / Name */}
        <span className="text-white font-semibold text-lg">
          YourName
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <li className="hover:text-white transition cursor-pointer">About</li>
          <li className="hover:text-white transition cursor-pointer">Projects</li>
          <li className="hover:text-white transition cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 hover:text-white"
        >
          ☰
        </button>

      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 gap-4 text-gray-300">
            <li className="hover:text-white">About</li>
            <li className="hover:text-white">Projects</li>
            <li className="hover:text-white">Contact</li>
          </ul>
        </div>
      )}
    </header>
  )
}
