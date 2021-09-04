import React, {useState} from 'react'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Topbar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Content />
      <InfoSection {...homeObjOne}/>
    </>
  )
}

export default Home
