import React from 'react'
import { IconAddTaskMobile } from '@/assets/icons/icon-add-task-mobile'
import { CustomButton } from './custom_button'
import { IconBoard } from '@/assets/icons/icon-board'
import { Box, Text } from '@chakra-ui/react'

export const CreateNewBoard = () => {
  return (
    <CustomButton
      title={
        <Box display={'flex'} alignItems={'center'}>
          <IconAddTaskMobile size="8" fill="#635FC7" />
          <Text as={'b'} size="sm" ml="1">
            Create New Board
          </Text>
        </Box>
      }
      isSelected={false}
      icon={<IconBoard fill="#635FC7" />}
      textColor="darkPurple"
      onClick={() => ''}
    />
  )
}
