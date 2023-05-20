import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useColorTheme } from '../../../../../../hook/useColorMode'
import { DeleteBoardModal } from './delete_board_modal'

export const MenuAction = () => {
  const { bg } = useColorTheme()

  return (
    <Menu>
      <MenuButton as={Box} ml="4">
        <HamburgerIcon color={'gray.normal'} />
      </MenuButton>
      <MenuList border="none" bg={bg}>
        <MenuItem color="gray.normal" as={'b'} bg={bg}>
          <DeleteBoardModal />
        </MenuItem>
        <MenuItem color="red.normal" bg={bg}>
          Delete Board
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
