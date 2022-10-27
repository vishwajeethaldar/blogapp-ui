import {configureStore} from '@reduxjs/toolkit'
import {AuthSlice, userSlice,CategorySlice, blogSlice,commentSlice} from './'
const store = configureStore({
    reducer:{
        AuthSlice,userSlice,CategorySlice,blogSlice,commentSlice
    }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 
export default  store