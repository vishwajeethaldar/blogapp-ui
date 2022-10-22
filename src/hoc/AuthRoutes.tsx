import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks/store.hook'

export const AuthRoutes = (children:{children:React.ReactElement}) => {
    const auth = useAppSelector(store=>store.AuthSlice)
    const navigate=  useNavigate()

    if(auth.isAuth){
        return children
    }else{
        return navigate("/login")
    }
    
}
