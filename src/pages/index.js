import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Web from 'src/components/layout/Web'

import Landing from 'src/components/home/Landing'
import Sectors from 'src/components/home/Sectors'
import Applications from 'src/components/Applications'
import Users from 'src/components/home/Users'
import Contact from 'src/components/Contact'

const queryClient = new QueryClient()

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <Web title={'Datagir'}>
        <Landing />
        <Sectors />
        <Applications />
        <Users />
        <Contact />
      </Web>
    </QueryClientProvider>
  )
}
