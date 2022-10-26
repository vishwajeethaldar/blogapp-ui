import React from 'react'
import { Navbar, ResetPwd } from '../components'
import {Box} from '@chakra-ui/react'
 const Forget_password_page = () => {
  return (
   <>
    <Box  minH="100vh">
      <Navbar/>
      <Box w={["96%","70%","50%","35%"]} mx="auto" py={"4%"}>
        <ResetPwd/>
      </Box>
    </Box>
   </>
  )

}

export default Forget_password_page