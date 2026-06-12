export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Dhayalan A
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Full Stack Developer passionate about building modern web
            applications using React, Next.js, Node.js, Express.js, and
            MongoDB. Focused on creating scalable and user-friendly solutions.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h4>
          <p className="mt-3 text-sm text-slate-400">
            dhayalan.a2002@gmail.com
          </p>
          <p className="text-sm text-slate-400">
            +91 9791644761
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h4>

          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © 2026 Dhayalan A. All Rights Reserved.
      </div>
    </footer>
  )
}