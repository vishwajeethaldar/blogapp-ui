import React from 'react'
import {Box} from '@chakra-ui/react'
import { Navbar, Register } from '../components'

const Signup_page = () => {
  return (
    <Box bgGradient='linear(to-r, #2193b0, #6dd5ed)' minH="100vh">
        <Navbar/>
        <Box w={["96%","96%","60%","40%"]} mx="auto" py={"4%"}>
         <Register />
        </Box>
    </Box>
  )
}
export default Signup_page