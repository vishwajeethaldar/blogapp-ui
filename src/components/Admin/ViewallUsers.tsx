import { Box, Flex, Stack, Text, Show } from '@chakra-ui/react'
import React from 'react'

export const ViewallUsers = () => {
  return (
    <Box w={"100%"} border={"1px solid grey"}>

        <Flex  borderRight={"1px solid #ccc"}> 
            <Box fontWeight={"600"} fontSize={["14px","14px","16px","16px"]} h="30px" w={"8%"} textAlign={"center"}>Sr.</Box>
            <Box fontWeight={"600"} fontSize={["14px","14px","16px","16px"]} h="30px" w={"22%"}textAlign={"center"}>User Name</Box>
            <Box fontWeight={"600"} fontSize={["14px","14px","16px","16px"]} h="30px" w={"40%"} textAlign={"center"}>Email</Box>
            <Box fontWeight={"600"} fontSize={["14px","14px","16px","16px"]} h="30px" w={"15%"} textAlign={"center"}>Block</Box>
            <Box fontWeight={"600"} fontSize={["14px","14px","16px","16px"]} h="30px" w={"15%"} textAlign={"center"}>Delete</Box>
        </Flex>
    </Box>
  )
}
