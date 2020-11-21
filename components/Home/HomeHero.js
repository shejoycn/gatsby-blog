import React from "react"

export default function HomeHero() {
  return (
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
  )
}
