import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { getRefreshToken } from '../store/Auth.store/Auth.Slice'
import { useAppdispatch, useAppSelector } from '../store/hooks/store.hook'
import { getUserInfo } from '../store/users/user.slice'

 const GitCallback = () => {
    const dispatch =useAppdispatch()
    const auth = useAppSelector(store=>store.AuthSlice)
    useEffect(()=>{
        dispatch(getRefreshToken());
        if(auth.userId){
            dispatch(getUserInfo(auth.userId))
        }
      
    },[])
    
    
   
  
return (
    <>
    {auth.isAuth && <Navigate to="/" />}
    <Box>

    </Box>
    </>
  )
}



export default GitCallback