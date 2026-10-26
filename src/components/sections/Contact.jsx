export const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-500">
            Get In Touch
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900">
            Let's Connect
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            I'm currently open to internships, full-time opportunities,
            freelance projects, and collaborations. Feel free to reach out if
            you'd like to work together or discuss a project.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          
          {/* Contact Information */}
          <div className="rounded-2xl border border-slate-200 p-8">
            <h3 className="text-xl font-semibold text-slate-900">
              Contact Information
            </h3>

            <div className="mt-6 space-y-4">
              <div>
                <p className="font-medium text-slate-900">Email</p>
                <p className="text-slate-600">
                  dhayalan.a2002@gmail.com
                  
                </p>
              </div>

              <div>
                <p className="font-medium text-slate-900">Phone</p>
                <p className="text-slate-600">
                  +91 9791644761  
                </p>
              </div>

              <div>
                <p className="font-medium text-slate-900">Location</p>
                <p className="text-slate-600">
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="rounded-2xl border border-slate-200 p-8">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
              />

              <button
                type="submit"
                className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
              >
                Send Message
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}