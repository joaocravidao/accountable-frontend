import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { useContext } from 'react'
import { AuthContext } from '../../Context/auth.context'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function NavBar({ toggle }) {
  let navigate = useNavigate
  const { logOut, isLoggedIn, user, userId } = useContext(AuthContext); 
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>accountable</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
          {isLoggedIn && (
        <>
          <NavItem >
            <NavLinks><Link to={`/user-profile/${userId}`}>Profile</Link></NavLinks>
          </NavItem>  
          <NavItem >
            <NavLinks ><Link to={`/dashboard/${userId}`}>Taskboard</Link></NavLinks>
          </NavItem>  
          <NavBtn onClick={logOut}><NavBtnLink navigate="/">Logout</NavBtnLink>
          <span>{user && user.name}</span>
          </NavBtn>          
        </>
      )}
          {!isLoggedIn && (
        <>
          <NavBtn>
            <NavBtnLink to='/login'>Login</NavBtnLink>
          </NavBtn>
          <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
          </NavItem>
          <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
        </>
      )}
        </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default NavBar