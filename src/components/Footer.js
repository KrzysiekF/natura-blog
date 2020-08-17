import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className={'container'}>
          <div className={'grid-noGutter-middle'}>
            <div className={'col'}>
              <section className="menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/" className="navbar-item">Bliżej Natury</Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/blog">Blog</Link>
                  </li>
                  {/* <li>
                    <Link className="navbar-item" to="/about">About</Link>
                  </li> */}
                </ul>
              </section>
            </div>
            <div className={'col text-right fs-12'}>
              copyright &copy; Krzysztof Furtak 2020
            </div>
          </div>
        </div>
      </footer>
    )
  }
};

export default Footer;
