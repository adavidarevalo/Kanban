import { removeScrollBar } from '@/styles/remove_scroll_bar'
import { Box, GridItem } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import {
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from 'react-beautiful-dnd'

interface ColumnDashboardProps {
  title: string
  index: number
  content: ReactNode
  provided?: DroppableProvided
  snapshot?: DroppableStateSnapshot
  _id?: string
}

export const ColumnDashboard = ({
  title,
  content,
  index,
  _id = '',
}: ColumnDashboardProps) => {
  return (
    <>
      <GridItem
        w="300px"
        rowStart={1}
        rowEnd={2}
        colStart={index}
        colEnd={index + 1}
      >
        <Box
          display="flex"
          alignItems={'center'}
          minH="55px"
          color="gray.normal"
          fontSize={'sm'}
        >
          {title}
        </Box>
      </GridItem>
      <Droppable key={_id} droppableId={`${_id}`}>
        {(provided, snapshot) => (
          <GridItem
            w="300px"
            h="100%"
            colStart={index}
            colEnd={index + 1}
            rowStart={2}
            rowEnd={3}
            bg={snapshot.isDraggingOver ? 'red' : 'transparent'}
            ref={provided.innerRef}
            {...provided.droppableProps}
            borderRadius="10"
            overflowX="auto"
            sx={removeScrollBar}
          >
            {content}
          </GridItem>
        )}
      </Droppable>
    </>
  )
}
