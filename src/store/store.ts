import {configureStore} from '@reduxjs/toolkit'
import {AuthSlice, userSlice} from './'
const store = configureStore({
    reducer:{
        AuthSlice,userSlice
    }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 
export default  store