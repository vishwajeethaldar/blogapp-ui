import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input,Select,Text, Textarea } from '@chakra-ui/react'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import parse from "html-react-parser"
import style from './AddBlock.module.css'

export const AddnewCategory = () => {
  const [cateGory, setcateGory] = useState("")

  const handleInput = (e:ChangeEvent<HTMLInputElement>)=>{
    setcateGory(e.target.value)
  }

  const addnewCat = (e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      setcateGory("")
  }

  return (
    <Box px="10%">

        <Text textAlign="center" fontSize={"20px"} fontWeight={"600"} pb="15px">Add New Category</Text>
       
        <form onSubmit={addnewCat}>

            <FormControl>
              <FormLabel>Category Name</FormLabel>
              <Input type={"text"} placeholder={"Category Name"} name="category" onChange={handleInput} required/>
            </FormControl>

            <FormControl pt="15px">
              <Button type="submit"> Add Category</Button>
            </FormControl>

        </form>

    </Box>
  )
}
