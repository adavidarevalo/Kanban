import React, { ReactNode, useState } from 'react'
import { HeaderDashboard } from './header'
import { Button, Grid, GridItem } from '@chakra-ui/react'
import { sideBarAnimation } from '@/utils/side_bar_animation'
import { SideBar } from './side_bar'
import { useColorTheme } from '@/hook/useColorMode'

interface DashboardLayoutProps {
  children: ReactNode
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSideOpen, setIsSideOpen] = useState(250)
  const { bgDashboard, bg } = useColorTheme()

  return (
    <>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav main"`}
        gridTemplateRows={'70px 1fr'}
        gridTemplateColumns={isSideOpen + 'px ' + '1fr'}
        h="100vh"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem area={'header'} bg={bg}>
          <HeaderDashboard />
        </GridItem>
        <GridItem area={'nav'} bg={bg}>
          <SideBar
            sideBarToggle={() => sideBarAnimation(isSideOpen, setIsSideOpen)}
            isSideOpen={isSideOpen > 0}
          />
        </GridItem>
        <GridItem bg={bgDashboard} area={'main'}>
          {children}
        </GridItem>
      </Grid>
    </>
  )
}
