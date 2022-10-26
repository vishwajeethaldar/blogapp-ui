import React, { useEffect } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { BrandDisplay } from './BrandDisplay'
import { UserTag } from './UserTag'
import { useAppdispatch, useAppSelector } from '../../store/hooks/store.hook'
import { getRefreshToken } from '../../store/Auth.store/Auth.Slice'
import { getUserInfo } from '../../store/users/user.slice'
import {FaBars} from "react-icons/fa"
 
const Navbar = ({setIsVisible, isVisible}:{setIsVisible:Function, isVisible:boolean}) => {
  const auth = useAppSelector(store=>store.AuthSlice)
  const user = useAppSelector(store=>store.userSlice)
  const dispatch = useAppdispatch()

  useEffect(()=>{
   
    if(auth.isAuth){
      dispatch(getUserInfo(auth.userId))
    }

  },[])

  if(auth.isAuth && (auth.sessExp<Date.now()/1000)){
    dispatch(getRefreshToken())
  }

  const handleVisible = ()=>{
    setIsVisible(!isVisible)
  }
  
  return (
    <Box borderBottom={"1px solid #dee"} w={"100%"} boxShadow={"sm"} py="5px" px="15px" bg={"#FFF"} backdropBlur="sm" backgroundBlendMode={"multiply"} > 
        
        <Flex w="100%" justifyContent={"space-between"} align={"center"}> 
            <Flex gap="15px" align="center" _hover={{cursor:"pointer"}}>
                {user.role==="admin"?<FaBars fontSize={"1.4em"} onClick={()=>{
                 handleVisible()
                }}/>:null} <BrandDisplay />
            </Flex>

            <Box>
                
            </Box>

            <Box >
              <UserTag auth={auth?.isAuth} role={user?.role}/>
            </Box>
        </Flex>
    </Box>
  )
}


export default Navbar