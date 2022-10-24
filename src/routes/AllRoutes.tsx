import {Routes, Route} from 'react-router-dom'
import { AuthRoutes } from '../hoc/AuthRoutes'
import { HomeP, LoginP, SignupP, ResetPwdP, AdminP, UserProfileP } from '../pages'


export const ALlRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={< HomeP/>}/>
        <Route path='/login' element={<LoginP/>}/>
        <Route path='/reset_password' element={<ResetPwdP/>}/>
        <Route path='/signup' element={<SignupP/>}/>
        <Route path='/dashboard' element={<AuthRoutes><AdminP/></AuthRoutes>}/>
        <Route path='/user-profile' element={<AuthRoutes><UserProfileP/></AuthRoutes>}/>
    </Routes>
  )
}
