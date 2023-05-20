import React from 'react'
import { AddIcon } from '@chakra-ui/icons'
import { Button, Text, useMediaQuery } from '@chakra-ui/react'

interface NewTaskButtonProps {
  onOpen: () => void
}

export const NewTaskButton = ({ onOpen }: NewTaskButtonProps) => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  return (
    <Button bg={'darkPurple'} onClick={onOpen}>
      <AddIcon />
      {isLargerThan800 && (
        <Text as={'b'} ml="2">
          Add New Task
        </Text>
      )}
    </Button>
  )
}
