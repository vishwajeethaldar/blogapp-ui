import { Box } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from '../components'
import { useAppSelector } from '../store/hooks/store.hook'

 const Admin = () => {
  const userInfo =  useAppSelector(store=>store.userSlice)
  console.log(userInfo);
  
  return (
    <Box bg="green">
        <Navbar/>
    </Box>
  )
}
export default Admin