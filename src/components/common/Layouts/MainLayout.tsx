import Footer from '@/components/common/Footer'
import Head from '@/components/common/Head'
import LandingNavbar from '@/components/common/Navbar/LandingNavbar'
import MarketplaceNavbar from '@/components/common/Navbar/MarketplaceNavbar'
import React from 'react'


interface MainLayoutProps {
   navbar: "landing" | "marketplace" | "store"
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
   
   const { children, navbar, ...rest } = props
   
   let Navbar
   switch (navbar) {
      case 'marketplace':
         Navbar = <MarketplaceNavbar />
         break
      case 'landing':
         Navbar = <LandingNavbar />
         break
      case "store":
         Navbar = <></>
         break
      
   }
   
   return (
      <>
         <Head />
         {Navbar}
         <main className="fit">{children}</main>
         <Footer />
      </>
   )
   
}

export default MainLayout
