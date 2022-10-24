import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { getRefreshToken } from '../store/Auth.store/Auth.Slice'
import { useAppSelector,useAppdispatch } from '../store/hooks/store.hook'
import { getUserInfo } from '../store/users/user.slice'

export const AuthRoutes = ({children}:{children:React.ReactElement}) => {
    const auth = useAppSelector(store=>store.AuthSlice)
    const user = useAppSelector(store=>store.userSlice.email)
    const dispatch = useAppdispatch()
    if(auth.isAuth && !user){
        dispatch(getUserInfo(auth.userId))
        return children
    }
   if(auth.isAuth){
    return children
   }else{
    return <Navigate to="/login" replace={true} />
   }

}
