import React from 'react'
import { Box, Flex, Stack, Text,Show, Hide } from '@chakra-ui/react'

export const RejectedBlogs = () => {
  return (
    <Box w={"100%"} border={"1px solid grey"}>
       <Show breakpoint='(min-width: 768px)'>

       <Flex  borderRight={"1px solid #ccc"}> 
            <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"5%"} textAlign={"center"}>Sr.</Box>
            <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"14%"} textAlign={"center"}>Category</Box>
            <Box fontWeight={"600"} fontSize={"16px"} h="60px" w={"33%"} textAlign={"center"}>Blog Title</Box>
            <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"11%"}textAlign={"center"}>User Name</Box>
            <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"11%"} textAlign={"center"}>Approve</Box>
            <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"9%"} textAlign={"center"}>Reject</Box>
            <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"8%"} textAlign={"center"}>View</Box>
            <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"9%"} textAlign={"center"}>Delete</Box>
        </Flex>

        <Flex  borderRight={"1px solid #ccc"}> 
            <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"5%"} textAlign={"center"}>Sr.</Box>
            <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"14%"} textAlign={"center"}>Category</Box>
            <Box fontWeight={"600"} fontSize={"16px"} h="60px" w={"33%"} textAlign={"center"}>Blog Title</Box>
            <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"11%"}textAlign={"center"}>User Name</Box>
            <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"11%"} textAlign={"center"}>Approve</Box>
            <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"9%"} textAlign={"center"}>Reject</Box>
            <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"8%"} textAlign={"center"}>View</Box>
            <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"9%"} textAlign={"center"}>Delete</Box>
        </Flex>
      </Show>

    <Show breakpoint='(max-width: 767px)'>
      <Flex>
        <Stack w={["28%","20%","14%","8%"]} borderRight={"1px solid #ccc"}> 
            <Box h="30px" borderBottom={"1px solid #ccc"}>Sr.</Box>
            <Box h="30px" borderBottom={"1px solid #ccc"}>Category</Box>
            <Box h="60px" borderBottom={"1px solid #ccc"}>Blog Title</Box>
            <Box h="30px" borderBottom={"1px solid #ccc"}>UserName</Box>
            <Box h="30px" borderBottom={"1px solid #ccc"}>Approve</Box>
            <Box h="30px" borderBottom={"1px solid #ccc"}>Reject</Box>
            <Box h="30px" borderBottom={"1px solid #ccc"}>View</Box>
            <Box h="30px" borderBottom={"1px solid #ccc"}>Delete</Box>
        </Stack>

        <Flex  w={["72%","78%","85%","91%"]} gap="20px" overflow={"scroll"}>
         
            <Stack>
                <Box h="30px" borderBottom={"1px solid #ccc"} pl={"10px"}>1</Box>
                <Box h="30px" borderBottom={"1px solid #ccc"} pl={"10px"}>Category</Box>
                <Box h="60px" borderBottom={"1px solid #ccc"} pl={"10px"}>Blog Title</Box>
                <Box h="30px" borderBottom={"1px solid #ccc"} pl={"10px"}>UserName</Box>
                <Box h="30px" borderBottom={"1px solid #ccc"} pl={"10px"}>Approve</Box>
                <Box h="30px" borderBottom={"1px solid #ccc"} pl={"10px"}>Reject</Box>
                <Box h="30px" borderBottom={"1px solid #ccc"} pl={"10px"}>View</Box>
                <Box h="30px" borderBottom={"1px solid #ccc"} pl={"10px"}>Delete</Box>
            </Stack>

    
        </Flex>
      </Flex>
    </Show>
    </Box>
  )
}
