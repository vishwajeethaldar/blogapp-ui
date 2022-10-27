import { Box, Flex, Stack, Text, Show, Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { getAllBlog } from '../../store/blog.slice/blog.slice'
import { useAppdispatch, useAppSelector } from '../../store/hooks/store.hook'

export const Pendingblog = () => {
      const dispatch = useAppdispatch()
      const blogs = useAppSelector(store=>store.blogSlice)
      const categories = useAppSelector(store=>store.CategorySlice)
  useEffect(()=>{
      dispatch(getAllBlog())
      console.log(blogs);
      
  },[])

  return (
    <Box w={"100%"} border={"1px solid grey"}>
       <Show breakpoint='(min-width: 768px)'>

       <Flex align={"center"} borderRight={"1px solid #ccc"} py="10px"> 
            <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"5%"} textAlign={"center"}>Sr.</Box>
            <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"14%"} textAlign={"center"}>Category</Box>
            <Box fontWeight={"600"} fontSize={"16px"}  w={"33%"} textAlign={"center"}>Blog Title</Box>
            <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"11%"}textAlign={"center"}>User Name</Box>
            <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"11%"} textAlign={"center"}>Approve</Box>
            <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"9%"} textAlign={"center"}>Reject</Box>
            <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"8%"} textAlign={"center"}>View</Box>
            <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"9%"} textAlign={"center"}>Delete</Box>
        </Flex>

        {blogs.blogs?.map((item, i)=>{
            return (
              <Flex key={item._id} border={"1px solid #ccc"} align={"center"} py={"10px"}> 
                <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"5%"} textAlign={"center"}>
                      {i+1}
                </Box>
                <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"14%"} textAlign={"center"}>
                    
                </Box>
                <Box fontWeight={"600"} fontSize={"16px"}  w={"33%"} textAlign={"center"}>
                    {item.title}
                </Box>
                <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"11%"}textAlign={"center"}>

                </Box>
                <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"11%"} textAlign={"center"}>
                <Button colorScheme={"whatsapp"}> Approve </Button>
                </Box>
                <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"9%"} textAlign={"center"}>
                <Button colorScheme={"orange"}> Reject </Button>
                </Box>
                <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"8%"} textAlign={"center"}>
                <Button colorScheme={"teal"}> View </Button>
                </Box>
                <Box fontWeight={"600"} fontSize={"16px"} h="30px" w={"9%"} textAlign={"center"}>
                      <Button colorScheme={"red"}> Delete </Button>
                </Box>
            </Flex>
            )
        })
        }

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
                <Box  borderBottom={"1px solid #ccc"} pl={"10px"}>Blog Title</Box>
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
