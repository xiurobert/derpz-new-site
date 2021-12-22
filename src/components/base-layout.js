import React from 'react';

import "../styles/basestyle.scss";
import "../styles/layout.scss";

export default function Layout({children }) {
  return (
      <div>
          <header>
              <nav className="navbar level">
                  <p className="level-item has-text-centered">
                      <a className="link regular-nav-item">
                          About me
                      </a>
                  </p>
                  <p className="level-item has-text-centered">
                      <a className="link regular-nav-item">
                          Portfolio
                      </a>
                  </p>
                  <p className="level-item has-text-centered">
                      <a className="link regular-nav-item">
                          Qualifications
                      </a>
                  </p>
                  <p className="level-item has-text-centered">
                      <a className="link homepage">
                          DerpZ
                      </a>
                  </p>
                  <p className="level-item has-text-centered">
                      <a className="link regular-nav-item">
                          Contact
                      </a>
                  </p>
                  <p className="level-item has-text-centered">
                      <a className="link regular-nav-item">
                          Resume
                      </a>
                  </p>
                  <p className="level-item has-text-centered">
                      <a className="link regular-nav-item">
                          Links
                      </a>
                  </p>
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