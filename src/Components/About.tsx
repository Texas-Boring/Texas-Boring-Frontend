const work = [
  {
    title: 'Design',
    description: 'Engineer a complete vertical boring system from the ground up.',
  },
  {
    title: 'Build',
    description: 'Turn analysis and CAD into manufactured hardware.',
  },
  {
    title: 'Test',
    description: 'Validate individual subsystems and the complete machine through testing.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-73px)] snap-start snap-always border-t border-[#5f5b57] bg-black"
    >
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-8">
        <div>
          <h2 className="text-4xl font-bold tracking-[-0.03em] text-[#f4f2f0] sm:text-5xl lg:text-6xl">
            Mission
          </h2>

          <div className="mt-8 space-y-5 text-base leading-7 text-[#c4bfbb] sm:text-lg sm:leading-8">
            <p>
              Longhorn Boring is a student-led engineering organization at The University of Texas at Austin focused on the design, manufacturing, and testing of tunnel boring technology.
            </p>
            <p>
              Our team brings together students across engineering, technology, and business with the objective of building a tunnel boring machine from the ground up and competing in The Boring Company&apos;s Not-a-Boring Competition in Bastrop, Texas.
            </p>
            <p>
              From excavation and propulsion to guidance, controls, manufacturing, and operations, Longhorn Boring gives students the opportunity to take ownership of real subsystems while building a lasting tunneling program where future Longhorns can build, test, compete, and improve upon the work of the students who came before them.
            </p>
          </div>
        </div>

        <dl className="border-y border-[#5f5b57]">
          {work.map(({ title, description }) => (
            <div
              key={title}
              className="grid gap-2 border-b border-[#5f5b57] py-6 last:border-b-0 sm:grid-cols-[7rem_1fr] sm:gap-6"
            >
              <dt className="text-xl font-bold text-[#b33a00]">{title}</dt>
              <dd className="text-base leading-7 text-[#d6d2cf]">{description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
