import {Routes, Route} from 'react-router-dom'
import { HomeP, LoginP, SignupP, ResetPwdP } from '../pages'

export const ALlRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={< HomeP/>}/>
        <Route path='/login' element={<LoginP/>}/>
        <Route path='/reset_password' element={<ResetPwdP/>}/>
        <Route path='/signup' element={<SignupP/>}/>
    </Routes>
  )
}
