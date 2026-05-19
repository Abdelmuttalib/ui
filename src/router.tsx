import React from 'react'
import { createHashRouter, RouteObject, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/error-page'
import V3Page from './components/v3'
import V4Page from './components/v4'
import V5Page from './components/v5'
import V6Page from './components/v6'

export const routerObjects: RouteObject[] = [
  {
    element: null,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <V3Page />,
        handle: {},
      },
      {
        path: '/v1',
        element: <V3Page />,
      },
      {
        path: '/v2',
        element: <V4Page />,
      },
      {
        path: '/v3',
        element: <V5Page />,
      },
      {
        path: '/v4',
        element: <V6Page />,
      },
      // {
      //   path: '/v6',
      //   element: <V6Page />,
      // },
    ],
  },
]

export function createRouter(): ReturnType<typeof createHashRouter> {
  return createBrowserRouter(routerObjects)
}
