'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"



function Header() {

  const pathname = usePathname()
  const isActive = (href: string) => pathname == href;

  return (
    <header>
        <Link href={'/'}><h1>minimal blog<span className="fullstop">.</span></h1></Link>
        <div className="links">
          <Link  href={'/'}><p className={isActive('/')? 'active': ''}>Trending</p></Link>
          <span>•</span>
          <Link  href={'/bookmarks'}><p className={isActive('/bookmarks')? 'active': ''}>Saved</p></Link>
        </div>

   {/* Styled-JSX Styles */}
  <style jsx>{`

    header {
      margin: 0 auto;
      padding: 2rem 1rem;
      width: 100%;
      max-width: 1200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      font-weight: 300;
      color: #333;
      line-height: 32px;
    }

    .fullstop {
      font-size:4rem;
    }

    .active {
      text-decoration: underline;
      text-underline-offset: 8px;
      color: #333;
    }

    .links {
      display: flex;
      gap: .5rem;
    }

    p {
      color: #999;
    }
    
    }
    @media (min-width: 580px) {
      h1 {
        font-size: 4rem;
      }
    }
  `}</style>


      </header>
  )
}

export default Header