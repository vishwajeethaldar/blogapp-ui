import {
  Box, 
  Text,
} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import React from 'react'
import { useAppdispatch, useAppSelector } from "../../store/hooks/store.hook"
import { useDispatch } from "react-redux"
import { logout } from "../../store/Auth.store/Auth.Slice"





export const UserTag = () => {
  const dispatch = useAppdispatch()
  const userId= useAppSelector(store=>store.AuthSlice.userId)
  const handleLogout =  ()=>{
   
    dispatch(logout({userId}))
  }


  const auth = useAppSelector(store=>store.AuthSlice)
  return (
    <Box>
      {!auth.isAuth?
        <Link to="/login">
              <Text fontSize={["1.5em","1.5em","1.6em","1.6em"]} color={"#fff"} fontWeight={"600"}>Sign in </Text>
        </Link> 
        :<Text onClick={handleLogout} _hover={{cursor:"pointer"}} fontSize={["1.5em","1.5em","1.6em","1.6em"]} color={"#fff"} fontWeight={"600"}>Sign out </Text>
      }   
    </Box>
  )
}
