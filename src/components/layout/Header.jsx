import { navItems } from '../../data/siteContent'

export const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between  py-5">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-full border border-white/60 bg-white text-sm font-bold text-slate-900">
            DA
          </div>

          <div>
            <p className="text-lg font-bold">Dhayalan A</p>
            <p className="text-xs uppercase tracking-[0.16em] text-white/70">
              Mern Stack Developer
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-white/90 transition hover:text-amber-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="rounded-full border border-amber-300 px-5 py-2 text-xs font-semibold text-amber-300 transition hover:bg-amber-300 hover:text-slate-900"
        >
          Contact Me
        </a>
      </div>
    </header>
  )
}