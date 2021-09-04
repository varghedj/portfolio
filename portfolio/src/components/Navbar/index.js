import React from 'react'
import { FaBars } from 'react-icons/fa'
import src from '../../images/seal.jpg'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  Logo
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <Logo src={src}/>
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
