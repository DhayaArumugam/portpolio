import { SectionHeading } from '../common/SectionHeading'
import { projects } from '../../data/siteContent'

export const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="My Work"
          title="Featured Projects"
          description="A collection of projects that showcase my skills in frontend development, backend development, and full-stack application building."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>

              <p className="mt-4 text-sm font-medium text-amber-600">
                {project.tech}
              </p>

              <div className="mt-5 flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}