import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input,Select,Text, Textarea } from '@chakra-ui/react'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import parse from "html-react-parser"
import style from './AddBlock.module.css'

export const AddBlog = () => {
  const [content, setContent] = useState("")

  const handleInput = (e:ChangeEvent<HTMLTextAreaElement>)=>{
    setContent(e.target.value)
  }

  const addnewBlog = (e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
  }

  return (
    <Box px="10%">
        <Text textAlign="center" fontSize={"20px"} fontWeight={"600"} pb="15px">Add New Blog</Text>
        <form onSubmit={addnewBlog}>
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Select placeholder='Select option'>
                <option value='react'>React</option>
                <option value=''>Axios</option>
                <option value=''>JavaScript</option>
                <option value=''>TypeScript</option>
                <option value=''>Express</option>
                <option value=''>Node</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input type="text" placeholder='blog Title' required={true}/>
            </FormControl>
            <FormControl pt="15px">
              <FormLabel>Content</FormLabel>
              <Textarea placeholder='blog content' required={true} onChange={handleInput} />
              
              {!content&&
                <FormHelperText fontWeight={"700"}>
                    Use HTML and inline css  to write the blog as you want 
                </FormHelperText>
              }

            </FormControl>
            
           

            <FormControl pt="15px">
              <Button type="submit"> Add Blog</Button>
            </FormControl>
        </form>

        {content&&
        <Box>
          <Box  textAlign="center" fontWeight="800" fontSize={"1.6em"} pb="15px">Blog Output</Box>
          {parse(content)}
        </Box>}
    </Box>
  )
}
