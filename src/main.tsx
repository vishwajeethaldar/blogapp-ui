import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './store/store'
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <BrowserRouter>
   <ChakraProvider>
   <Provider store={store}>
      <App/>
   </Provider>
   </ChakraProvider>
   </BrowserRouter>
)
