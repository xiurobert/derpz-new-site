import React from 'react';

import "../styles/basestyle.scss";
import "../styles/layout.scss";

import NavItem from "./NavItem";

export default function Layout({children}) {
    return (
        <div>
            <header>
                <nav className="navbar level">
                    <NavItem>
                        About Me
                    </NavItem>
                    <NavItem>
                        Portfolio
                    </NavItem>
                    <p className="level-item has-text-centered">
                        <a className="link homepage" href="/">
                            DerpZ
                        </a>
                    </p>
                    <NavItem>
                        Resume
                    </NavItem>
                    <NavItem>
                        Links
                    </NavItem>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <div className="content has-text-centered">
                    <p>
                        <strong>&copy; DerpZ 2021</strong>
                    </p>
                </div>
            </footer>
        </div>
    );
}