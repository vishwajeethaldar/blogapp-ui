import {Routes, Route} from 'react-router-dom'
import Login_page from '../pages/Login_page'
export const ALlRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login_page/>}/>
    </Routes>
  )
}
