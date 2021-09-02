import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const ButtonS = styled(LinkS)`
  border-radius: 5px;
  background: ${({primary}) => (primary ? '#FF0000' : '#000')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#fff' : '#FF0000')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '18px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s ease-in-out;

  &:hover {
    transition: all .3s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#fff')};
    color: ${({dark}) => (dark ? '#000' : '#000')};
  }
`