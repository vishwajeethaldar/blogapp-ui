import { Box } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from '../components'

 const Home_page = () => {
  return (
    <Box w='100%' minH='100vh' bgGradient='linear(to-r, #2193b0, #6dd5ed)' >
        <Box >
            <Navbar/>
        </Box>
    </Box>
  )
}
export default Home_page