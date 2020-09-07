import React from "react"
import { PageProps, Link } from "gatsby"

import "../styles/intro.scss";
import ProfileImage from "./profile_image";

const Intro = (props) => {


  return (
    <>
      <h1>
        Hey, I'm Vanshaj Girotra
      </h1>
      <div className="intro grid">
        <ProfileImage />
        <div className="intro__text">
          <p>I'm a <b>software developer</b> working at <a href="https://practo.com" rel="noreferrer noopener" target="_blank">Practo</a> from <b>Delhi, India.</b></p>
          <p>
            I work with React.js and javascript primarily, but you can find more about my toolbox <Link to="/page-2">here</Link>.</p>
        </div>
      </div>
    </>
  );
}

export default Intro;