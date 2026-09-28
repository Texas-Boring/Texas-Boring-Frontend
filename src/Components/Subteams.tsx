const subteams = [
  {
    name: 'Cutterhead & Excavation',
    description: 'Develops the excavation system, cutting tools, cutter geometry, and ground-interaction strategy.',
  },
  {
    name: 'Drivetrain & Shaft',
    description: 'Develops the system that transmits controlled torque and rotational speed to the cutterhead, including the shaft, bearings, couplings, and drive interfaces.',
  },
  {
    name: 'Chassis & Structures',
    description: 'Designs the machine\'s primary load-bearing structure and mechanical integration points.',
  },
  {
    name: 'Simulation / FEA',
    description: 'Uses analytical and computational models to evaluate loads and validate designs before manufacturing.',
  },
  {
    name: 'Electrical Systems',
    description: 'Develops power distribution, motor interfaces, protection, wiring, sensors, and electrical hardware.',
  },
  {
    name: 'Programming & Embedded Systems',
    description: 'Develops machine controls, sensing, data acquisition, monitoring, and embedded software.',
  },
  {
    name: 'Product Management & Systems',
    description: 'Coordinates requirements, subsystem interfaces, documentation, schedules, and system-level integration.',
  },
  {
    name: 'Sponsorship & Partnerships',
    description: 'Builds relationships with industry and secures financial, technical, material, and manufacturing support.',
  },
  {
    name: 'Marketing & Communications',
    description: 'Manages branding, recruitment, outreach, media, and public communication.',
  },
]

export default function Subteams() {
  return (
    <section
      id="subteams"
      className="min-h-[calc(100vh-73px)] snap-start snap-always border-t border-[#5f5b57] bg-[#0d0c0b]"
    >
      <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl flex-col justify-center px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-[-0.03em] text-[#f4f2f0] sm:text-5xl">
          Subteams
        </h2>

        <div className="mt-6 border-y border-[#5f5b57]">
          {subteams.map(({ name, description }) => (
            <article
              key={name}
              className="grid items-start gap-2 border-b border-[#47423e] py-3.5 last:border-b-0 md:grid-cols-[minmax(14rem,0.7fr)_1.3fr] md:gap-10"
            >
              <h3 className="text-base font-semibold leading-6 text-[#b33a00] sm:text-lg">
                {name}
              </h3>
              <p className="text-sm leading-6 text-[#c4bfbb] sm:text-base">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
