import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            Dylan Varghese
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='skills'>
                Skills
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='projects'>
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='social'>
                Social
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/contact-me'>
              Contact-me
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
