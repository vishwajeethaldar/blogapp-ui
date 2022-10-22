import React from 'react'
import { Navbar, ResetPwd } from '../components'
import {Box} from '@chakra-ui/react'
 const Forget_password_page = () => {
  return (

   <>
    <Box bgGradient='linear(to-r, #2193b0, #6dd5ed)' minH="100vh">
      <Navbar/>
   
      <Box w={["96%","96%","60%","40%"]} mx="auto" py={"4%"}>
        <ResetPwd/>
      </Box>
    </Box>
   </>
  )
}

export default Forget_password_page