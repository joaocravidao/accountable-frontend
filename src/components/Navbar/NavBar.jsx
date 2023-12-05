import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../Context/auth.context'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

function NavBar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 768) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  let navigate = useNavigate();
  const { logOut, isLoggedIn, user, userId } = useContext(AuthContext);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            accountable
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>

            {isLoggedIn && (
              <>
                <NavItem>
                  <NavLinks>
                    <Link to={`/user-profile/${userId}`}>Profile</Link>
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks>
                    <Link to={`/dashboard/${userId}`}>Taskboard</Link>
                  </NavLinks>
                </NavItem>
                <NavBtn onClick={logOut}>
                  <NavBtnLink to='/'>Logout</NavBtnLink>
                  <span>{user && user.name}</span>
                </NavBtn>
              </>
            )}
            {!isLoggedIn && (
              <>
                <NavItem>
              <NavLinks to='about' smooth={true} duration={500} spy={true} exact={true} offset={0}>
                About
              </NavLinks>
            </NavItem>
                <NavItem>
                  <NavLinks to='contact' smooth={true} duration={500} spy={true} exact={true} offset={0}>
                    Contact Us
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='services' smooth={true} duration={500} spy={true} exact={true} offset={0}>
                    Services
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='signup' smooth={true} duration={500} spy={true} exact={true} offset={0}>
                    Sign Up
                  </NavLinks>
                </NavItem>
              <NavBtn>
              <NavBtnLink to='/login'>Login</NavBtnLink>
            </NavBtn>
              </>
            )}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default NavBar;
