const INTEREST_FORM_URL = ''

const opportunities = [
  {
    area: 'Mechanical',
    roles: 'Cutterhead | Drivetrain | Structures | Simulation',
  },
  {
    area: 'Electrical & Software',
    roles: 'Electrical | Embedded Systems | Controls',
  },
  {
    area: 'Systems',
    roles: 'Integration | Requirements | Project Management',
  },
  {
    area: 'Operations',
    roles: 'Sponsorship | Partnerships | Marketing',
  },
]

export default function Join() {
  return (
    <section
      id="join"
      className="min-h-[calc(100vh-73px)] snap-start snap-always border-t border-[#5f5b57] bg-black"
    >
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <div>
          <h2 className="text-4xl font-bold tracking-[-0.03em] text-[#f4f2f0] sm:text-5xl lg:text-6xl">
            Join Texas Boring
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#c4bfbb]">
            We&apos;re looking for students who want to take ownership of real engineering, technical, and organizational challenges as we build Texas Boring&apos;s first competition machine.
          </p>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#aaa5a1]">
            Recruitment takes place during the first three weeks of every semester.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={INTEREST_FORM_URL || '#join'}
              aria-disabled={!INTEREST_FORM_URL}
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#b33a00] px-6 py-3 font-semibold text-black transition-colors hover:bg-[#c74608] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b33a00]"
            >
              Open interest form
            </a>
            <a
              href="https://boringcompany.com/competition"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[#5f5b57] bg-black px-6 py-3 font-semibold text-[#f4f2f0] transition-colors hover:border-[#b33a00] hover:text-[#b33a00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b33a00]"
            >
              View competition
            </a>
          </div>
        </div>

        <dl className="border-y border-[#5f5b57]">
          {opportunities.map(({ area, roles }) => (
            <div
              key={area}
              className="border-b border-[#5f5b57] py-6 last:border-b-0"
            >
              <dt className="text-lg font-bold text-[#b33a00] sm:text-xl">
                {area}
              </dt>
              <dd className="mt-2 text-base leading-7 text-[#d6d2cf]">
                {roles}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
