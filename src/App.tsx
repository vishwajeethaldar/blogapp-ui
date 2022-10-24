
import { useEffect } from 'react'
import { ALlRoutes } from './routes/AllRoutes'
import { getRefreshToken } from './store/Auth.store/Auth.Slice'
import { useAppdispatch, useAppSelector } from './store/hooks/store.hook'


function App() {
  const auth = useAppSelector(store=>store.AuthSlice)
  const dispatch = useAppdispatch()

  if(auth.isAuth && auth.sessExp<(Date.now()/1000))  {

    console.log("yes expired");
    
    dispatch(getRefreshToken())
  }

  useEffect(()=>{
    dispatch(getRefreshToken())
   },[])

  return (
    <div className="App">
        <ALlRoutes/>
    </div>
  )
}

export default App
