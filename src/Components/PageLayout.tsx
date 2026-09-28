import type { ReactNode } from 'react'
import NavBar from './NavBar'

type PageLayoutProps = {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div
      id="page-scroll"
      className="h-screen snap-y snap-proximity scroll-pt-[73px] overflow-y-auto scroll-smooth bg-black text-[#f4f2f0]"
    >
      <NavBar />
      <main>{children}</main>
    </div>
  )
}
