import React, { useEffect } from 'react'
import { Button, ButtonGroup, useColorMode } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { DashboardLayout } from '../components/layout/dashboard/index'
import { Dashboard } from '@/components/dashboard'

export default function HomePage() {
  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  )
}
