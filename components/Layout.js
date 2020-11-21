import React from "react"

import "../css/style.css"
function Layout() {
  return (
    <>
      <div id="header">
        <div>
          <div className="logo">
            <a href="index.html">Zero Type</a>
          </div>
          <ul id="navigation">
            <li className="active">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="features.html">Features</a>
            </li>
            <li>
              <a href="news.html">News</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="adbox">
        <div className="clearfix">
          <img src="images/box.png" alt="Img" height="342" width="368" />
          <div>
            <h1>Ideas?</h1>
            <h2>That's what we live for.</h2>
            <p>
              Wix is an online website builder with a simple drag & drop
              interface, meaning you do the work online and instantly publish to
              the web.{" "}
              <span>
                <a href="index.html" className="btn">
                  Try It Now!
                </a>
                <b>Don’t worry it’s for free</b>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div id="contents">
        <div id="tagline" className="clearfix">
          <h1>Design With Simplicity.</h1>
          <div>
            <p>
              You can replace all this text with your own text. Want an easier
              solution for a Free Website?
            </p>
            <p>
              Head straight to Wix and immediately start customizing your
              website!
            </p>
            <p>
              Wix is an online website builder with a simple drag & drop
              interface, meaning you do the work online and instantly publish to
              the web.
            </p>
          </div>
          <div>
            <p>
              You can replace all this text with your own text. Want an easier
              solution for a Free Website?
            </p>
            <p>
              Head straight to Wix and immediately start customizing your
              website!
            </p>
            <p>
              Wix is an online website builder with a simple drag & drop
              interface, meaning you do the work online and instantly publish to
              the web.
            </p>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="clearfix">
          <div id="connect">
            <a
              href="http://freewebsitetemplates.com/go/facebook/"
              target="_blank"
              className="facebook"
            ></a>
            <a
              href="http://freewebsitetemplates.com/go/googleplus/"
              target="_blank"
              className="googleplus"
            ></a>
            <a
              href="http://freewebsitetemplates.com/go/twitter/"
              target="_blank"
              className="twitter"
            ></a>
            <a
              href="http://www.freewebsitetemplates.com/misc/contact/"
              target="_blank"
              className="tumbler"
            ></a>
          </div>
          <p>© 2023 Zerotype. All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Layout
