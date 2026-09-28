const supportAreas = [
  'Financial',
  'Materials / components',
  'Manufacturing',
  'Transportation',
]

export default function Partners() {
  return (
    <section
      id="partners"
      className="min-h-[calc(100vh-73px)] snap-start snap-always border-t border-[#5f5b57] bg-[#0d0c0b]"
    >
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8">
        <div>
          <h2 className="text-4xl font-bold tracking-[-0.03em] text-[#f4f2f0] sm:text-5xl lg:text-6xl">
            Partners
          </h2>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-[#c4bfbb] sm:text-2xl sm:leading-10">
            Texas Boring is seeking industry partners to help us design, manufacture, test, and compete with our first tunnel boring machine.
          </p>
        </div>

        <ul className="border-y border-[#5f5b57]">
          {supportAreas.map((area) => (
            <li
              key={area}
              className="border-b border-[#5f5b57] py-6 text-xl font-semibold text-[#f4f2f0] last:border-b-0 sm:text-2xl"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
