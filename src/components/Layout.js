import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet 
      title="Iconnick Makeup | Toronto Makeup Artist - Annick Beau" 
      description="Annick Beau is a makeup artist in Toronto"
      keywords="makeup, toronto, makeup artist, mua, annick beau, toronto makeup"
    />
    {/* <Navbar/> */}
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
