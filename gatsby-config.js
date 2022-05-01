module.exports = {
    siteMetadata: {
        siteUrl: "https://derpz.net",
        title: "DerpZ",
        description: "Robert's personal website",
        socials: {
            linkedIn: "https://linkedin.com/in/Robert-Xiu"
        },
        contactemail: "robert@derpz.net"
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-fontawesome-css",
        "gatsby-plugin-styled-components",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: `gatsby-source-github-api`,
            options: {
                token: process.env.TOKEN,
                variables: {},
                graphQLQuery:`
                query {
                  user(login: "xiurobert") {
                    url
                    repositories(
                      first: 3
                      privacy: PUBLIC
                      orderBy: {field: PUSHED_AT, direction: DESC}
                    ) {
                      edges {
                        node {
                          nameWithOwner
                          description
                          issues {
                            totalCount
                          }
                          stargazers {
                            totalCount
                          }
                          pullRequests {
                            totalCount
                          }
                          url
                        }
                      }
                    }
                    repositoriesContributedTo(
                      first: 5
                      privacy: PUBLIC
                      orderBy: {field: PUSHED_AT, direction: DESC}
                    ) {
                      edges {
                        node {
                          nameWithOwner
                          description
                          url
                          issues {
                            totalCount
                          }
                          stargazers {
                            totalCount
                          }
                          pullRequests {
                            totalCount
                          }
                        }
                      }
                    }
                  }
                }
                `
            }
        }
    ],
};
