const socialLinks = [
  {
    name: 'LinkedIn',
    label: 'linkedin.com/company/texas-boring',
    href: 'https://www.linkedin.com/company/texas-boring/',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12m1.78 13.02H3.56V9h3.56z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    label: '@texasboring',
    href: 'https://www.instagram.com/texasboring/?hl=en',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.67 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.25-.15-4.77-1.69-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.63 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.69 21.3.27 16.95.07 15.67.01 15.26 0 12 0m0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84m0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m7.85-10.41a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-[#5f5b57] bg-black"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div>
          <h2 className="text-5xl font-bold tracking-[-0.035em] text-[#f4f2f0] sm:text-7xl">
            Texas <span className="text-[#b33a00]">Boring</span>
          </h2>
          <p className="mt-5 text-xl text-[#c4bfbb] sm:text-2xl">
            Built in Austin. Digging toward the future.
          </p>
        </div>

        <div className="mt-12 grid gap-10 border-t border-[#5f5b57] pt-8 md:grid-cols-2 md:gap-16">
          <address className="space-y-4 text-base not-italic leading-7 text-[#aaa5a1] sm:text-lg">
            <p>The University of Texas at Austin — Austin, Texas</p>
            <a
              href="mailto:texas.boring.ut@gmail.com"
              className="inline-block text-[#f4f2f0] underline decoration-[#b33a00] decoration-2 underline-offset-4 hover:text-[#b33a00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b33a00]"
            >
              texas.boring.ut@gmail.com
            </a>
          </address>

          <ul className="divide-y divide-[#47423e] border-y border-[#47423e]">
            {socialLinks.map(({ name, label, href, icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 py-4 text-[#d6d2cf] transition-colors hover:text-[#b33a00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b33a00]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#5f5b57] text-[#b33a00]">
                    {icon}
                  </span>
                  <span>
                    <span className="block font-semibold text-[#f4f2f0]">{name}</span>
                    <span className="mt-0.5 block text-sm text-[#aaa5a1]">{label}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-sm text-[#716a64]">
          Texas Boring · The University of Texas at Austin
        </p>
      </div>
    </footer>
  )
}
