import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'Numbers', href: '#numbers', sectionId: 'numbers' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Subteams', href: '#subteams', sectionId: 'subteams' },
  { label: 'Join', href: '#join', sectionId: 'join' },
  { label: 'Partners', href: '#partners', sectionId: 'partners' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
]

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const scrollContainer = document.getElementById('page-scroll')
    const sections = links
      .map(({ sectionId }) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      { root: scrollContainer, threshold: [0.5, 0.7] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-20 w-full border-b border-[#5f5b57] bg-black font-sans"
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setMenuOpen(false)
          event.currentTarget.querySelector<HTMLButtonElement>('button')?.focus()
        }
      }}
    >
      <div className="mx-auto flex min-h-[72px] max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a
          href={import.meta.env.BASE_URL}
          className="flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b33a00]"
          onClick={() => setMenuOpen(false)}
        >
          <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center bg-[#b33a00] text-sm font-bold text-black">
            TB
          </span>
          <span className="whitespace-nowrap text-xl font-bold uppercase tracking-tight text-[#f4f2f0]">
            Texas <span className="text-[#b33a00]">Boring</span>
          </span>
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[#5f5b57] bg-black text-[#f4f2f0] hover:border-[#b33a00] hover:text-[#b33a00] focus-visible:outline-2 focus-visible:outline-[#b33a00] md:hidden"
          aria-controls="navbar-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close main menu' : 'Open main menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg className="h-6 w-6" aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d={menuOpen ? 'M6 6l12 12M6 18 18 6' : 'M5 7h14M5 12h14M5 17h14'} />
          </svg>
        </button>

        <div className={`${menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-menu">
          <ul className="flex flex-col gap-1 border border-[#5f5b57] bg-black p-2 font-medium md:flex-row md:items-center md:gap-8 md:border-0 md:p-0">
            {links.map(({ label, href, sectionId }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-current={activeSection === sectionId ? 'page' : undefined}
                  onClick={() => {
                    setActiveSection(sectionId)
                    setMenuOpen(false)
                  }}
                  className={`block rounded-sm px-3 py-2 text-sm uppercase tracking-wide focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b33a00] md:px-0 ${
                    activeSection === sectionId
                      ? 'bg-[#b33a00] text-black md:bg-black md:text-[#b33a00]'
                      : 'text-[#aaa5a1] hover:bg-[#1b1816] hover:text-[#f4f2f0] md:hover:bg-black md:hover:text-[#b33a00]'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
