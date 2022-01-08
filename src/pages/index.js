import * as React from "react"

import {faTwitter, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

import styled, {css} from "styled-components";

import "../styles/index.scss";
import ClickyIcon from "../components/ClickyIcon";

import IconRow from "../components/containers/IconRow";

const GreyHr = styled.hr`
  border-color: #e0e0e0;
  width: 75%;
`;
// markup
const IndexPage = () => {
    return (
        <main>
            <h1>DerpZ</h1>
            <GreyHr/>
            <IconRow>
                <ClickyIcon url="https://github.com/xiurobert" icon={faGithub}/>
                <ClickyIcon url="https://linkedin.com/in/Robert-Xiu" icon={faLinkedin}/>
            </IconRow>
        </main>
    )
}

export default IndexPage
