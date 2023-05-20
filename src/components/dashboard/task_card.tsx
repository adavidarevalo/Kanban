import { useColorTheme } from '@/hook/useColorMode'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

interface TaskCardProps {
  index: number
  _id: string
}

export const TaskCard = ({ index, _id }: TaskCardProps) => {
  const { taskCard, bgSimple } = useColorTheme()

  return (
    <Draggable key={_id} draggableId={_id} index={index}>
      {(provided) => (
        <Box
          bg={taskCard}
          borderRadius="10"
          p="4"
          mb="5"
          boxShadow="0 4px 6px rgba(54,78,126,.102)"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Text color={bgSimple} fontSize="md" lineHeight="1">
            Title
          </Text>
          <Text color="gray.normal" fontSize="xs">
            1 of 3 subtask
          </Text>
        </Box>
      )}
    </Draggable>
  )
}
