export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white px-6 py-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm text-gray-300">
        {/* About */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-2">About</h2>
          <p>
            Christian Zambrano is an IT professional and AI developer passionate about
            cybersecurity, machine learning, and modern web technologies.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="/projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="/resume" className="hover:text-blue-400 transition">Resume</a></li>
            <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-2">Contact</h2>
          <p>Email: <a href="zambrach@kean.edu" className="hover:text-blue-400">zambrach@kean.edu</a></p>
          <p>Location: Union, NJ</p>
          <div className="flex gap-4 mt-2">
            <a href="https://www.linkedin.com/in/christianzambrano20" target="_blank" rel="noreferrer" className="hover:text-blue-400">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-8 border-t border-white/10 pt-4">
        © {new Date().getFullYear()} Christian Zambrano. All rights reserved.
      </div>
    </footer>
  );
}
