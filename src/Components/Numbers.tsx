const statistics = [
  { value: '2026', label: 'Founded in', accent: true },
  { value: '30', label: 'Team members', accent: false },
  { value: '9', label: 'Subteams', accent: false },
  { value: '3', label: 'Cofounders', accent: true },
]

export default function Numbers() {
  return (
    <section
      id="numbers"
      className="min-h-[calc(100vh-73px)] snap-start snap-always border-t border-[#5f5b57] bg-[#0d0c0b]"
    >
      <h2 className="sr-only">Texas Boring by the numbers</h2>

      <dl className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl grid-cols-2 px-4 sm:px-6 lg:px-8">
        {statistics.map(({ value, label, accent }, index) => (
          <div
            key={label}
            className={[
              'flex flex-col justify-center py-8',
              index % 2 === 0 ? 'border-r border-[#5f5b57] pr-5 sm:pr-10' : 'pl-5 sm:pl-10',
              index < 2 ? 'border-b border-[#5f5b57]' : '',
            ].join(' ')}
          >
            <dd className={`text-5xl font-bold tracking-[-0.035em] sm:text-7xl lg:text-8xl ${accent ? 'text-[#b33a00]' : 'text-[#f4f2f0]'}`}>
              {value}
            </dd>
            <dt className="mt-3 text-lg text-[#c4bfbb] sm:text-xl">{label}</dt>
          </div>
        ))}
      </dl>
    </section>
  )
}
