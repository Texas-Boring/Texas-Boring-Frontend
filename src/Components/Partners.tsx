const bronzePerks = [
  'Tax-deductible contribution',
  'Logo on website',
  'Social media shoutout',
]

const silverPerks = [
  ...bronzePerks,
  'Resume book access',
  'Logo on hardware',
]

const goldPerks = [...silverPerks, 'Networking events']

const partnerships = [
  {
    name: 'Bronze',
    price: '$500',
    accent: 'border-t-[#b98355] text-[#d6a47a]',
    perks: bronzePerks,
  },
  {
    name: 'Silver',
    price: '$1,000',
    accent: 'border-t-[#b6b8bc] text-[#cdd0d4]',
    perks: silverPerks,
  },
  {
    name: 'Gold',
    price: '$2,000',
    accent: 'border-t-[#c3a258] text-[#ddbf79]',
    perks: goldPerks,
  },
  {
    name: 'Platinum',
    price: '$6,000',
    accent: 'border-t-[#d5e1e5] text-[#d5e1e5]',
    perks: [...goldPerks, 'On-site demonstrations'],
  },
]

export default function Partners() {
  return (
    <section
      id="partners"
      className="min-h-[calc(100vh-73px)] snap-start snap-always border-t border-[#5f5b57] bg-[#0d0c0b]"
    >
      <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl flex-col justify-center gap-12 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div>
          <h2 className="text-4xl font-bold tracking-[-0.03em] text-[#f4f2f0] sm:text-5xl lg:text-6xl">
            Partners
          </h2>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {partnerships.map(({ name, price, accent, perks }) => (
            <li
              key={name}
              className={`rounded-sm border border-[#5f5b57] border-t-2 bg-black p-6 ${accent}`}
            >
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="mt-4 text-4xl font-bold tracking-[-0.03em] text-[#f4f2f0]">
                {price}
              </p>
              <ul className="mt-6 space-y-3 border-t border-[#5f5b57] pt-6">
                {perks.map((perk) => (
                  <li key={perk} className="flex gap-3 text-sm leading-6 text-[#d6d2cf]">
                    <span aria-hidden="true" className="text-[#c4bfbb]">✓</span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
