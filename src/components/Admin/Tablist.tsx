import { Box, Tab, TabList } from '@chakra-ui/react'
import React from 'react'

export const Tablist = () => {
  return (
    <TabList>
        <Box pb="10px" w="100%"  textAlign={"left"}>
        <Tab w={"100%"} _selected={{ color: 'white', bg: 'blue.500' }}>
            Add new Blog
        </Tab>
        <Tab w={"100%"} _selected={{ color: 'white', bg: 'blue.500' }}>
            Add new Category
        </Tab>
        <Tab w={"100%"} _selected={{ color: 'white', bg: 'blue.500' }}>
            Pending Blogs
        </Tab>
        <Tab w={"100%"} _selected={{ color: 'white', bg: 'blue.500' }}>
            Approved Blogs
        </Tab>
        <Tab w={"100%"} _selected={{ color: 'white', bg: 'blue.500' }}>
            Vew All Users
        </Tab>
        
        </Box>
    </TabList>
  )
}
