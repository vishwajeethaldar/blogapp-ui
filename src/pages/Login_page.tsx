import { Box } from '@chakra-ui/react'
import React from 'react'
import { Login, Navbar } from '../components'

const Login_page = () => {
  return (
  <Box bgGradient='linear(to-r, #2193b0, #6dd5ed)' minH="100vh">
    <Navbar/>
    <Box w={["96%","96%","60%","40%"]} mx="auto" py={"4%"}>
          <Login/>
    </Box>
  </Box>
  )
}

export default Login_page