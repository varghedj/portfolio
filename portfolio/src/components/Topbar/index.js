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
          <TopbarLink to='about'>About</TopbarLink>
          <TopbarLink to='skills'>Skills</TopbarLink>
          <TopbarLink to='projects'>Projects</TopbarLink>
          <TopbarLink to='social'>Social</TopbarLink>
        </TopbarMenu>
        <TopBtnWrap>
          <TopbarRoute to='/contact-me'>Contact-me</TopbarRoute>
        </TopBtnWrap>
      </TopbarWrapper>
    </TopbarContainer>
  )
}

export default Topbar
