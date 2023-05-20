import React from 'react'
import { ModalCustom } from '@/components/modal'
import { Box, Button, Text, useDisclosure } from '@chakra-ui/react'

export const DeleteBoardModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Text color="gray.normal" as={'b'} onClick={onOpen}>
        Edit Board
      </Text>
      <ModalCustom
        isOpen={isOpen}
        onClose={onClose}
        title={<Text>Delete this board?</Text>}
        content={
          <Text>
            Are you sure you want to delete the &quot;Platform Launch&quot;
            board? This action will remove all columns and tasks and cannot be
            reversed.
          </Text>
        }
        footerContent={
          <Box>
            <Button>Delete</Button>
            <Button>Cancel</Button>
          </Box>
        }
      />
    </>
  )
}
