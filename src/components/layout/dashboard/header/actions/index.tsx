import React from 'react'
import { Box } from '@chakra-ui/react'
import { NewTaskAction } from './new_task'
import { MenuAction } from './menu'
const ActionsHeader = () => {
  return (
    <Box display={'flex'} alignItems={'center'}>
      <NewTaskAction />
      <MenuAction />
    </Box>
  )
}

export default ActionsHeader
