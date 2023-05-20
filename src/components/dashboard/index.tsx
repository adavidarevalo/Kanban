import React, { useState } from 'react'
import { Box, Grid, Text } from '@chakra-ui/react'
import { ColumnDashboard } from './column'
import { AddNewColumn } from './add_new_Column'
import { TaskCard } from './task_card'
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd'
import { useColorTheme } from '@/hook/useColorMode'

export const Dashboard = () => {
  const [test, setTest] = useState([
    {
      title: 'Hola1',
      content: 'Hola1',
      _id: 'Hola1',
      task: [
        {
          title: 'Hola',
          _id: '123456',
        },
        {
          title: 'Hola',
          _id: '123456',
        },
        {
          title: 'Hola',
          _id: '123456',
        },
        {
          title: 'Hola',
          _id: '123456',
        },
        {
          title: 'Hola',
          _id: '123456',
        },
        {
          title: 'Hola',
          _id: '123456',
        },
        {
          title: 'Hola',
          _id: '123456',
        },
        {
          title: 'Hola',
          _id: '123456',
        },
        {
          title: 'Hola',
          _id: '123456',
        },
      ],
    },
    {
      title: 'Hola2',
      content: 'Hola2',
      _id: 'Hola2',
      task: [
        {
          title: 'Hola',
          _id: '12345s',
        },
      ],
    },
    {
      title: 'Hola3',
      content: 'Hola3',
      _id: 'Hola3',
    },
    {
      title: 'Hola4',
      content: 'Hola4',
      _id: 'Hola4',
    },
    {
      title: 'Hola5',
      content: 'Hola5',
      _id: 'Hola5',
    },
    {
      title: 'Hola6',
      content: 'Hola6',
      _id: 'Hola6',
    },
    {
      title: 'Hola7',
      content: 'Hola7',
      _id: 'Hola7',
    },
    {
      title: 'Hola8',
      content: 'Hola8',
      _id: 'Hola8',
    },
    {
      title: 'Hola9',
      content: 'Hola9',
      _id: 'Hola9',
    },
    {
      title: 'Hola10',
      content: 'Hola10',
      _id: 'Hola10',
    },
  ])
  const { taskCard, bgSimple } = useColorTheme()

  function onDragEnd(result: DropResult) {
    const { source, destination } = result

    // dropped outside the list
    if (!destination) {
      return
    }
    const sInd = +source.droppableId
    const dInd = +destination.droppableId

    //   if (sInd === dInd) {
    //     const items = reorder(state[sInd], source.index, destination.index)
    //     const newState = [...state]
    //     newState[sInd] = items
    //     setState(newState)
    //   } else {
    //     const result = move(state[sInd], state[dInd], source, destination)
    //     const newState = [...state]
    //     newState[sInd] = result[sInd]
    //     newState[dInd] = result[dInd]

    //     setState(newState.filter((group) => group.length))
    //   }
  }

  return (
    <Box pl="5" overflow="auto" h="calc(100vh - 70px)" w="calc(100vw - 250px)">
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid
          h="100%"
          templateColumns={`repeat(${test.length + 1}, 1fr)`}
          gap={6}
          gridTemplateRows="30px 1fr"
        >
          {test.map((colum, index) => (
            <ColumnDashboard
              key={index}
              title={colum.title}
              index={index}
              _id={colum._id}
              content={
                <>
                  {colum?.task?.map((task, index) => (
                    <TaskCard key={task._id} _id={task._id} index={index} />
                  ))}
                </>
              }
            />
          ))}
          <ColumnDashboard
            title={''}
            index={test.length + 1}
            content={<AddNewColumn />}
          />
        </Grid>
      </DragDropContext>
    </Box>
  )
}
