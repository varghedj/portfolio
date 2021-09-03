import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {ButtonS} from '../ButtonSElement'
import {
  ContentContainer,
  ContentBg,
  VideoBg,
  MyContent,
  ContentH1,
  ContentP,
  ContentBtnWrapper,
  ArrowForward,
  ArrowRight
} from './ContentElements'

const Content = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <ContentContainer>
      <ContentBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </ContentBg>
      <MyContent>
        <ContentH1> Hello my Name is Dylan</ContentH1>
        <ContentP>
          dylanvarghese@gmail.com | 703-945-8155</ContentP>
        <ContentBtnWrapper>
          <ButtonS to='contact-me'
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary='true'
          dark='true'>
            Contact-me {hover ? <ArrowForward /> : <ArrowRight/>}
          </ButtonS>
        </ContentBtnWrapper>
      </MyContent>
    </ContentContainer>
  )
}

export default Content
