import React, { useState } from 'react'
import { CSSObject } from '@emotion/react'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import { ChangeThemeMode } from './change_theme_mode'
import { CustomButton } from './custom_button'
import { IconBoard } from '@/assets/icons/icon-board'
import { IconHideSidebar } from '@/assets/icons/icon-hide-sidebar'
import { CreateNewBoard } from './create_new_board'
import { OpenSidebarButton } from './open_sidebar_button'
import { removeScrollBar } from '@/styles/remove_scroll_bar'

interface SideBarProps {
  sideBarToggle: () => void
  isSideOpen: boolean
}

export const SideBar = ({ sideBarToggle, isSideOpen }: SideBarProps) => {
  const [boardSelected, setBoardSelected] = useState('0')
  const boards = [
    {
      name: 'test',
      _id: '0',
    },
    {
      name: 'board 1',
      _id: '1',
    },
    {
      name: 'board 2',
      _id: '2',
    },
    {
      name: 'board 3',
      _id: '3',
    },
    {
      name: 'board 4',
      _id: '4',
    },
    {
      name: 'board 5',
      _id: '5',
    },
    {
      name: 'board 6',
      _id: '6',
    },
    {
      name: 'board 7',
      _id: '7',
    },
    {
      name: 'board 8',
      _id: '8',
    },
    {
      name: 'board 9',
      _id: '9',
    },
  ]

  return (
    <>
      <OpenSidebarButton
        sideBarToggle={sideBarToggle}
        isSideOpen={isSideOpen}
      />
      <Grid
        templateAreas={`"header"
                  "nav"
                  "footer"`}
        gridTemplateRows={'30px 1fr 120px'}
        h="100%"
      >
        <GridItem area={'header'} display={'flex'} alignItems={'center'}>
          <Text as={'b'} color="gray.textBold" ml="5" fontSize="sm">
            All Boards (3)
          </Text>
        </GridItem>
        <GridItem area={'nav'} sx={removeScrollBar} overflow={'auto'}>
          {boards.map((board) => (
            <CustomButton
              key={board._id}
              title={board.name}
              isSelected={board._id === boardSelected}
              icon={<IconBoard />}
              onClick={() => {
                setBoardSelected(board._id)
              }}
            />
          ))}
          <CreateNewBoard />
        </GridItem>
        <GridItem area={'footer'}>
          <ChangeThemeMode />
          <CustomButton
            title="Hide Sidebar"
            isSelected={false}
            icon={<IconHideSidebar />}
            isContentCenter={true}
            onClick={sideBarToggle}
          />
        </GridItem>
      </Grid>
    </>
  )
}
