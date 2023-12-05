import React, { useState, useEffect, useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { AuthContext } from '../../Context/auth.context';
import { useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

function NavBar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);
  const { isLoggedIn, logOut, user, userId } = useContext(AuthContext);

  const changeNav = () => {
    if (window.scrollY >= 768) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  let navigate = useNavigate();

  return (
    <>
      <Nav scrollNav={scrollNav} isLoggedIn={isLoggedIn}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            accountable.
          </NavLogo>
          <NavMenu>
            {isLoggedIn && (
              <>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavBtn>
                  <NavBtnLink to={`/user-profile/${userId}`}>Hello, <strong>{user && user.name}</strong>.</NavBtnLink>
                </NavBtn>
                <NavBtn>
                  <NavBtnLink to={`/dashboard/${userId}`}>My Dashboard</NavBtnLink>
                </NavBtn>
                <NavBtn onClick={logOut}>
                  <NavBtnLink to='/'>Logout</NavBtnLink>
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