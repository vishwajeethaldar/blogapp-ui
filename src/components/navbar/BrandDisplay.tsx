import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const BrandDisplay = () => {
  return (
    <Link to="/">
    <Flex fontSize={["1.5em","1.5em","1.6em","1.6em"]} gap="10px">
        {/* <Text color={"#01579B"} fontWeight={"700"} fontFamily={"revert"}> Hindituts</Text> */}
        <Text color={"#004D40"} fontWeight={"600"} > Blogs</Text>
    </Flex> 
    </Link>
  )
}
