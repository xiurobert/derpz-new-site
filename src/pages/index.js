import * as React from "react"

import {faEnvelope, faFlask} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

import styled from "styled-components";

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
        <div id={`pageWrapper`}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | DerpZ</title>
            </Helmet>
            <div id={`pagePush`}>
                {/*<header>*/}
                {/*    <button>Dark Mode</button>*/}
                {/*</header>*/}
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
                    <GreyHr/>
                    <h3>Other services</h3>
                    <p>
                        Enter theLab: A playground for me to test things
                    </p>
                    <IconRow>
                        <ClickyIcon url={'https://lab.derpz.net'} icon={faFlask}/>
                    </IconRow>
                    <h3>
                        Currently working on:
                    </h3>
                    <p>
                        <a href={`https://github.com/xiurobert/deeptch`}>deepTCH</a> - Bad machine learning framework
                        <a href={`https://github.com/xiurobert/finsight`}>finSight</a> - Experiments for automatic trading and analysis of financial data
                    </p>
                </main>
            </div>
            <footer>
                <StaticImage src={'../images/xrdz_logo.png'} alt={'XRDZ Logo'} style={{
                    height: "1em",
                    aspectRatio: "481/112",
                }}/>
                <br />
                &copy; 2022 XRDZ Software Engineering

            </footer>
        </div>

    )
}

export default IndexPage
