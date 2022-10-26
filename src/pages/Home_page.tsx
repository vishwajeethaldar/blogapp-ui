import { Box, Button } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components'
import { config } from '../providers'

const Home_page = () => {
  const [isVisible, setIsVisible] =  useState(false)
  return (
    <Box w='100%' minH='100vh'  >
        <Box >
        <Navbar setIsVisible={setIsVisible} isVisible={isVisible}/>      
        </Box>
    </Box>
  )
}
export default Home_page