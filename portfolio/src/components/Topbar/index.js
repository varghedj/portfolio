import React from 'react'
import {
  TopbarContainer,
  Icon,
  CloseIcon,
  TopbarWrapper,
  TopbarMenu,
  TopbarLink,
  TopBtnWrap,
  TopbarRoute
} from './TopbarElements'

const Topbar = ({ isOpen, toggle }) => {
  return (
    <TopbarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <TopbarWrapper>
        <TopbarMenu>
          <TopbarLink to='about' onClick={toggle}>About</TopbarLink>
          <TopbarLink to='skills' onClick={toggle}>Skills</TopbarLink>
          <TopbarLink to='projects' onClick={toggle}>Projects</TopbarLink>
          <TopbarLink to='social' onClick={toggle}>Social</TopbarLink>
        </TopbarMenu>
        <TopBtnWrap>
          <TopbarRoute to="/contact-me" onClick={toggle}>
            Contact-me
          </TopbarRoute>
        </TopBtnWrap>
      </TopbarWrapper>
    </TopbarContainer>
  )
}

export default Topbar
