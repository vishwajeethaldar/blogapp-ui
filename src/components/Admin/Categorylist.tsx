import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { categoryint } from '../../interface'
import { deleteCategory } from '../../store/category.slice/category.slice'
import { useAppdispatch } from '../../store/hooks/store.hook'

export const Categorylist = ({categories}:{categories:Array<categoryint.category>}) => {
const dispatch = useAppdispatch()


 const handleDelete = (id:string)=>{
    dispatch(deleteCategory({id}))
 }

  return (
    <Box>
         <Flex bg={"#559"} mb={"10px"} gap="20px" border={"1px solid #ccc"} align={"center"} py={"10px"} px={"10px"}>
                        <Text w="60%" color={"#fff"} fontSize={"20px"}>Name</Text>
                        <Box w="100px">  </Box>
                        <Box  w="100px"> </Box>
        </Flex>
        {
            categories.map((item)=>{
                return (
                    <Flex key={item._id} mb={"10px"} gap="20px" border={"1px solid #ccc"} align={"center"} px={"10px"}>
                        <Text w="60%"> {item.name} </Text>
                        <Button w="100px" disabled> Edit </Button>
                        <Button  w="100px" onClick={()=>handleDelete(item._id)}> Delete </Button>
                    </Flex>
                )
            })
        }
    </Box>
  )
}
