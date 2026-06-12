export const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <p className="inline-block rounded-full bg-amber-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-amber-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
      {description ? <p className="max-w-3xl text-slate-600">{description}</p> : null}
    </div>
  )
}
