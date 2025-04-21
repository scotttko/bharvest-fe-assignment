import { createBrowserRouter, Navigate } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import TabLayout from '@/layouts/TabLayout'
import { BuyPage, LimitPage, SendPage, SwapPage } from '@/pages'

export const webPath = {
  swap: () => '/swap',
  limit: () => '/limit',
  buy: () => '/buy',
  send: () => '/send',
}

const routes = [
  { path: '*', element: <div>404 Not Found</div> },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Navigate to={webPath.swap()} replace /> },
      {
        element: <TabLayout />,
        children: [
          { path: webPath.swap(), element: <SwapPage /> },
          { path: webPath.limit(), element: <LimitPage /> },
          { path: webPath.buy(), element: <BuyPage /> },
          { path: webPath.send(), element: <SendPage /> },
        ],
      },
      { path: webPath.swap(), element: <SwapPage /> },
    ],
  },
]

export const router = createBrowserRouter(routes)
