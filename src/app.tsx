import React, { useMemo } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { createRouter } from './router'
import { ThemeCustomizerWrapper } from 'src/components/theme-customizer'
import { DevTools } from 'src/components/dev-tools'
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  const queryClient = useMemo(() => new QueryClient({}), [])
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeCustomizerWrapper>
        <RouterProvider router={createRouter()} />
        <ReactQueryDevtools />
        <DevTools />
        <Analytics />
      </ThemeCustomizerWrapper>
    </QueryClientProvider>
  )
}
