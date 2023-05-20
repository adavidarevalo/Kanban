import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CustomButton } from './custom_button'
import { IconShowSidebar } from '@/assets/icons/icon-show-sidebar'
import { useColorTheme } from '@/hook/useColorMode'

interface OpenSidebarButtonProps {
  sideBarToggle: () => void
  isSideOpen: boolean
}

export const OpenSidebarButton = ({
  sideBarToggle,
  isSideOpen,
}: OpenSidebarButtonProps) => {
  console.log('🚀 ~ file: open_sidebar_button.tsx:17 ~ isSideOpen:', isSideOpen)
  const { bgThird } = useColorTheme()

  console.log('XXX ', isSideOpen ? '-60px' : '-10px')

  return (
    <Box
      position={'absolute'}
      bottom={'20px'}
      w="70px"
      transition="all 0.3s ease-in-out"
      left={isSideOpen ? '-70px' : '-10px'}
    >
      <CustomButton
        isSelected={false}
        onClick={sideBarToggle}
        icon={<IconShowSidebar />}
        background={bgThird}
      />
    </Box>
  )
}
