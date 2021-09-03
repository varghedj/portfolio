import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const TopbarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #000;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: .3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const TopbarWrapper = styled.div`
  color: #fff;
`
export const TopbarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6,60px);
  }
`

export const TopbarLink = styled(LinkS)`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: red;
    transition: .2s ease-in-out;
  }
`

export const TopBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const TopbarRoute = styled(LinkR)`
  border-radius: 5px;
  background: red;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  outline: none;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover {
    transition: all .2s ease-in-out;
    background: #fff;
    color: #000;
  }
`