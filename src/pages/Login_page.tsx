import { Box } from '@chakra-ui/react'
import React from 'react'
import { Login } from '../components/Auth/login/Login'

const Login_page = () => {
  return (
  <Box w={["96%","96%","60%","40%"]} mx="auto" py={"10%"}>
          <Login/>
  </Box>
  )
}

export default Login_page