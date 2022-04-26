import * as React from "react"

import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

import styled from "styled-components";

import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet";

import "../styles/index.scss";
import ClickyIcon from "../components/ClickyIcon";

import IconRow from "../components/containers/IconRow";
import {graphql} from "gatsby";
import Repository from "../components/Repository";

const GreyHr = styled.hr`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  border-color: #e0e0e0;
  width: 75%;
`;

const IndexPage = ({data}) => {
    return (
        <div id={`pageWrapper`}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | {data.site.siteMetadata.title}</title>
            </Helmet>
            <div id={`pagePush`}>
                <main>
                    <StaticImage src={`../images/profilepic.png`} alt={`DerpZ`} style={
                        {
                            width: "10rem",
                            height: "10rem",
                            borderRadius: "50%",
                        }
                    }/>
                    <GreyHr/>
                    <h1>Hi, I'm Robert.</h1>
                    <p>
                        I'm a software engineer specializing in high-availability microservices and infrastructure.
                        Please feel free to view some of my links below.
                    </p>
                    <IconRow>
                        <ClickyIcon url={`mailto:${data.site.siteMetadata.contactemail}`} icon={faEnvelope}/>
                        <ClickyIcon url={data.githubData.data.user.url} icon={faGithub}/>
                        <ClickyIcon url={data.site.siteMetadata.socials.linkedIn} icon={faLinkedin}/>
                    </IconRow>
                    <GreyHr/>
                    <h3>
                        Recently updated repositories
                    </h3>

                    {data.githubData.data.user.repositories.edges.map(({node}) => (
                        <Repository node={node} />
                    ))}

                    <h3>
                        Recent contributions
                    </h3>
                    {data.githubData.data.user.repositoriesContributedTo.edges.map(({node}) => (
                        <Repository node={node} />
                    ))}
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

export const query = graphql`
    {
        site {
            siteMetadata {
                title
                siteUrl
                contactemail
                socials {
                    linkedIn
                }
            }
        }
        githubData {
            data {
                user {
                    url
                    repositoriesContributedTo {
                        edges {
                            node {
                                nameWithOwner
                                description
                                url
                                stargazers {
                                    totalCount
                                }
                            }
                        }
                    }
                    repositories {
                        edges {
                            node {
                                nameWithOwner
                                description
                                url
                                stargazers {
                                    totalCount
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export default IndexPage
