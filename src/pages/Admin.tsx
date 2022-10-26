import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Navbar } from '../components'
import { Menus } from '../components/Admin/Menus'
import { useAppSelector } from '../store/hooks/store.hook'

 const Admin = () => {
  const [isVisible, setIsVisible] =  useState(false)
  return (
    <Box>
        <Navbar setIsVisible={setIsVisible} isVisible={isVisible}/>
        <Menus isVisible={isVisible}/>
    </Box>
  )
}
export default Admin