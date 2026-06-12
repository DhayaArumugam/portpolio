import React from "react";
import profile from "../../images/profile.png";
export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900">
      {/* Background Effects */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-between gap-16 py-24 lg:flex-row">
        
        {/* Left Content */}
        <div className="max-w-3xl text-center lg:text-left">
          <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
            ● Available for Opportunities
          </span>

          <h2 className="mt-6 text-lg font-medium text-slate-300">
            Hello, I'm
          </h2>

          <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Dhayalan
          </h1>

          <h3 className="mt-4 text-2xl font-semibold text-blue-300 sm:text-3xl">
            MERN Stack Developer
          </h3>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            I build scalable and modern web applications using
            <span className="font-semibold text-white">
              {" "}MongoDB, Express.js, React.js, and Node.js
            </span>.
            Currently expanding my expertise in Next.js, API development,
            authentication, cloud deployment, and full-stack architecture.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-500 px-8 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-10 lg:justify-start">
            <div>
              <h4 className="text-3xl font-bold text-white">10+</h4>
              <p className="text-slate-400">Projects Built</p>
            </div>

            <div>
              <h4 className="text-3xl font-bold text-white">MERN</h4>
              <p className="text-slate-400">Full Stack Focus</p>
            </div>

            <div>
              <h4 className="text-3xl font-bold text-white">Next.js</h4>
              <p className="text-slate-400">Learning & Building</p>
            </div>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl"></div>

          <img
            src={profile}
            alt="Dhayalan"
            className="relative h-80 w-80 rounded-full border-4 border-white/20 object-cover shadow-2xl lg:h-96 lg:w-96"
          />
        </div>
      </div>
    </section>
  );
};