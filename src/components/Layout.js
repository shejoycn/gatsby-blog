import React from "react"

import "../../css/style.css"
import Footer from "./Footer"
import Header from "./Header"
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
