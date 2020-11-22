import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <div id="header">
      <div>
        <div className="logo">
          <Link to="/">Zero Type</Link>
        </div>
        <ul id="navigation">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
