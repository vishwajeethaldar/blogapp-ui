import React from 'react'
import {Box} from '@chakra-ui/react'
import { Navbar, Register } from '../components'

const Signup_page = () => {
  return (
    <Box  minH="100vh">
        <Navbar/>
        <Box w={["96%","70%","50%","35%"]} mx="auto" py={"4%"}>
         <Register />
        </Box>
    </Box>
  )
}
export default Signup_page

// bgGradient='linear(to-r, #2193b0, #6dd5ed)'