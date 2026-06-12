import { SectionHeading } from '../common/SectionHeading'
import { services } from '../../data/siteContent'

export const Skills = () => {
  return (
    <section id="skills" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="My Skills"
          title="Technologies & Tools I Work With"
          description="I build modern web applications using frontend and backend technologies, focusing on performance, scalability, and user experience."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.map((skill) => (
            <article
              key={skill.title}
              className="rounded-2xl border border-slate-200 p-6 transition hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {skill.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {skill.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}