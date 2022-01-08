import * as React from "react"

import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faTwitter, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

import styled, {css} from "styled-components";

import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet";

import "../styles/index.scss";
import ClickyIcon from "../components/ClickyIcon";

import IconRow from "../components/containers/IconRow";

const GreyHr = styled.hr`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  border-color: #e0e0e0;
  width: 75%;
`;

const IndexPage = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | DerpZ</title>
            </Helmet>
            <header>
                <button>Dark Mode</button>
            </header>
            <main>
                <StaticImage src={`../images/profilepic.png`} alt={`DerpZ`} style={
                    {
                        width: "10rem",
                        height: "10rem",
                        borderRadius: "50%",
                    }
                }/>
                {/*<h1>DerpZ</h1>*/}
                <GreyHr/>
                <h1>Hi, I'm Robert.</h1>
                <p>
                    I'm a software engineer specializing in high-availability microservices and infrastructure.
                    Please feel free to view some of my links below.
                </p>
                <IconRow>
                    <ClickyIcon url={'mailto:robert@derpz.net'} icon={faEnvelope}/>
                    <ClickyIcon url="https://github.com/xiurobert" icon={faGithub}/>
                    <ClickyIcon url="https://linkedin.com/in/Robert-Xiu" icon={faLinkedin}/>
                </IconRow>
            </main>
        </div>

    )
}

export default IndexPage
