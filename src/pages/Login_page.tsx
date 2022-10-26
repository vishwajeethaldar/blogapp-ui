import { Box } from '@chakra-ui/react'
import React from 'react'
import { Login, Navbar } from '../components'

const Login_page = () => {
  return (
  <Box  minH="100vh">
    <Navbar/>
    <Box w={["96%","70%","50%","35%"]} mx="auto" py={"4%"}>
          <Login/>
    </Box>
  </Box>
  )
}

export default Login_page