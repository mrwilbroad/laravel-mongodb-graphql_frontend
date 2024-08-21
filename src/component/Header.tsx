import React , { FC } from 'react'
import { HelmetProvider , Helmet } from 'react-helmet-async'

interface HeaderProps {
    children : React.ReactNode
}
const Header : FC<HeaderProps> = ({ children }) => {


  return (
    <HelmetProvider>
       <Helmet>
       { children }
       </Helmet>
    </HelmetProvider>
  )
}

export default Header