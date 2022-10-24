import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../store/Auth.store/Auth.Slice'
import { useAppdispatch, useAppSelector } from '../../store/hooks/store.hook'

export const UserMenu = () => {
    const dispatch = useAppdispatch()
    const auth= useAppSelector(store=>store.AuthSlice)
    const user = useAppSelector(store=>store.userSlice)

    const handleLogout =  ()=>{
         dispatch(logout())
    }

  return (
    user?.role==="admin"?
        <Box>
        <Flex direction={"column"}>
            <Link to="/user-profile"> 
                <Text>
                    Profile    
                </Text>
            </Link>

            <Link to="/dashboard"> 
            <Text>
                Dashboard    
            </Text>
            </Link>
                <Text onClick={handleLogout}>
                    Logout 
                </Text>
        </Flex>
    </Box>
    :<Box>
   <Flex direction={"column"}>
            <Link to="/user-profile"> 
                <Text>
                    Profile    
                </Text>
            </Link>

                <Text onClick={handleLogout}>
                    Logout 
                </Text>
        </Flex>
    </Box>
  
  )
}
