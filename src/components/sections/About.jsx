import { SectionHeading } from "../common/SectionHeading";
import { impactStats } from "../../data/siteContent";

export const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-40" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Crafting Modern Digital Experiences"
          description="Passionate about building scalable, high-performance web applications with modern technologies."
        />

        <div className="mt-20 grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              MERN Stack Developer
            </div>

            <h3 className="mt-6 text-4xl font-bold leading-tight text-slate-900">
              Building Scalable Web Applications
              <span className="block text-blue-600">
                With Modern Technologies
              </span>
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              I specialize in developing responsive and scalable web
              applications using React.js, Next.js, Node.js, Express.js,
              MongoDB, and Tailwind CSS.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              My focus is on delivering clean user experiences, optimized
              performance, secure backend systems, and maintainable code
              architecture for real-world business applications.
            </p>

            {/* Tech Stack */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "React.js",
                "Next.js",
                "Node.js",
                "MongoDB",
                "Express.js",
                "Tailwind CSS",
                "TypeScript",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-10 text-white shadow-2xl">
              <h4 className="text-2xl font-bold">
                Why Work With Me?
              </h4>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    🚀
                  </div>
                  <div>
                    <h5 className="font-semibold">
                      Performance Focused
                    </h5>
                    <p className="text-sm text-slate-300">
                      Optimized applications with fast loading times and smooth user experience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    💡
                  </div>
                  <div>
                    <h5 className="font-semibold">
                      Problem Solver
                    </h5>
                    <p className="text-sm text-slate-300">
                      Strong analytical thinking with practical development solutions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    ⚡
                  </div>
                  <div>
                    <h5 className="font-semibold">
                      Modern Stack
                    </h5>
                    <p className="text-sm text-slate-300">
                      Building applications with React, Next.js, Node.js, and MongoDB.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((item) => (
            <div
              key={item.label}
              className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-4xl font-bold text-slate-900">
                {item.value}
              </h3>

              <p className="mt-2 text-slate-600">
                {item.label}
              </p>

              <div className="mx-auto mt-4 h-1 w-8 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};