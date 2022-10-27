import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input,Select,Text, Textarea } from '@chakra-ui/react'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import parse from "html-react-parser"
import style from './AddBlock.module.css'
import { useAppdispatch, useAppSelector } from '../../store/hooks/store.hook'
import { getAllCategory } from '../../store/category.slice/category.slice'
import { addBlog, getAllBlog } from '../../store/blog.slice/blog.slice'

export const AddBlog = () => {
  const [content, setContent] = useState("")
  const [catInput, setCatInput] = useState("") 
  const [titleInput, setTitleInput] = useState("") 

  const dispatch = useAppdispatch()

 const categories = useAppSelector(store=>store.CategorySlice)
 const userInfo= useAppSelector(store=>store.userSlice)
  const handleInput = (e:ChangeEvent<HTMLTextAreaElement>)=>{
    setContent(e.target.value)
  }

  const addnewBlog = (e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      console.log(catInput,titleInput,content)
      dispatch(addBlog({categoryId:catInput, title:titleInput, content:content, userId:userInfo.userId}))
      setContent("")
      setTitleInput("")
      setCatInput("")
    }

  useEffect(()=>{
    dispatch(getAllCategory())
  },[])

  return (
    <Box px="10%">
        <Text textAlign="center" fontSize={"20px"} fontWeight={"600"} pb="15px">Add New Blog</Text>
        <form onSubmit={addnewBlog}>
            <FormControl>
              <FormLabel>Category</FormLabel>
             
              <Select placeholder='Select option' value={catInput} name={"category"} onChange={(e)=>setCatInput(e.target.value)}>
                {categories?.categories.map((item)=>{
                  return  <option value={item._id} key={item._id}>{item.name}</option>
                })}
              </Select>

            </FormControl>

            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input name='title' value={titleInput} onChange={(e)=>setTitleInput(e.target.value)} type="text" placeholder='blog Title' required={true}/>
            </FormControl>

            <FormControl pt="15px">
              <FormLabel>Content</FormLabel>
              <Textarea placeholder='blog content' name="content" value={content} required={true} onChange={handleInput} />
              
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
