import React from 'react'
import { useDisclosure, Text } from '@chakra-ui/react'
import { NewTaskButton } from './button'
import { ModalCustom } from '@/components/modal'
import { NewTaskForm } from '../../../../../task/form'
import { TaskFormValues } from '@/types/task'

export const NewTaskAction = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSubmit = (values: TaskFormValues) => {
    console.log('🚀 ~ file: index.tsx:12 ~ handleSubmit ~ values:', values)
  }

  return (
    <>
      <NewTaskButton onOpen={onOpen} />
      <ModalCustom
        title={<Text>Add New Task</Text>}
        isOpen={isOpen}
        onClose={onClose}
        content={<NewTaskForm handleSubmit={handleSubmit} />}
      />
    </>
  )
}
