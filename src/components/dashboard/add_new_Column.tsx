import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { IconAddTaskMobile } from '@/assets/icons/icon-add-task-mobile'
import { useColorTheme } from '@/hook/useColorMode'

export const AddNewColumn = () => {
  const { bgNewColumn } = useColorTheme()
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      h="100%"
      borderRadius="5"
      bg={bgNewColumn}
    >
      <Box display={'flex'} alignItems={'center'} h="30px">
        <IconAddTaskMobile />
        <Text ml="3">New Column</Text>
      </Box>
    </Box>
  )
}
