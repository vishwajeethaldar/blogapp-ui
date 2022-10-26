import {
  Box, 
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Text,
} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import React from 'react'
import { useAppdispatch, useAppSelector } from "../../store/hooks/store.hook"
import { useDispatch } from "react-redux"
import { logout } from "../../store/Auth.store/Auth.Slice"
import { UserMenu } from "./UserMenu"

export const UserTag = ({auth, role}:{auth:boolean, role:string}) => {
 
  return (
    <Box  _hover={{cursor:"pointer"}}>
    {auth?
    <Popover >
      <PopoverTrigger>
      <Image src="https://www.w3schools.com/howto/img_avatar.png" borderRadius={"50%"} w="50px"/>
      </PopoverTrigger>
      <PopoverContent w={"170px"}>      
        <PopoverCloseButton />
        <PopoverBody>
            <UserMenu role={role}/>
        </PopoverBody>
      </PopoverContent>
    </Popover>
    :
    <Link to="/login">
      <Text fontSize={["1.5em","1.5em","1.5em","1.5em"]} color={"#0288D1"} fontWeight={"600"}> Sign in</Text>
    </Link>
     }
 
    </Box>
  )
}
