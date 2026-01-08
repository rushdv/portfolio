export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <h1 className="text-white font-bold text-xl">
          YourName
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Projects</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>

      </div>
    </nav>
  )
}
