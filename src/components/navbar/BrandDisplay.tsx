import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const BrandDisplay = () => {
  return (
    <Link to="/">
    <Flex fontSize={["1.5em","1.5em","1.6em","2em"]} gap="10px">
        <Text color={"#fff"} fontWeight={"700"} fontFamily={"revert"}> Hindituts</Text>
        <Text color={"#fff"} fontWeight={"700"} fontFamily={"revert"}> Blogs</Text>
    </Flex>
    </Link>
  )
}
