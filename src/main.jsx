import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import createdRoute from './Router/Router'
import AuthProviders from './Providers/AuthProviders'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={createdRoute}></RouterProvider>
      </QueryClientProvider>
    </AuthProviders>
  </React.StrictMode>,
)
