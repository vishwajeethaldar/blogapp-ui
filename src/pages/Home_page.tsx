import { Box, Button } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components'
import { config } from '../providers'
import { getRefreshToken } from '../store/Auth.store/Auth.Slice'
import { useAppdispatch, useAppSelector } from '../store/hooks/store.hook'



 const Home_page = () => {
  const dispatch = useAppdispatch()
  const auth = useAppSelector(store=>store.AuthSlice)

  return (
    <Box w='100%' minH='100vh' bgGradient='linear(to-r, #2193b0, #6dd5ed)' >
        <Box >
            <Navbar/>        
        </Box>
    </Box>
  )
}
export default Home_page