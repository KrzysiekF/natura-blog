import React from 'react';
import { Link } from 'gatsby';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="kk-navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="grid grid-middle kk-container pb-0">
          <div className="col-3">
            <Link to="/" className="navbar-item" title="Logo">
              <strong>BLIŻEJ NATURY</strong>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`col ${this.state.navBarActiveClass}`}
          >
            <div className="kk-navbar-menu">
              <Link className="navbar-item" to="/about">
                <span>O co kaman?</span>
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/zielnik">
                Zielnik
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
};

export default Navbar;
