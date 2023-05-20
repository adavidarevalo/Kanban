import React, { FC, ReactNode } from 'react'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'

interface ModalCustomProps {
  title?: ReactNode
  content: ReactNode
  footerContent?: ReactNode
  isOpen: boolean
  onClose: () => void
}

export const ModalCustom: FC<ModalCustomProps> = ({
  title,
  content,
  footerContent,
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        {title && <ModalHeader>{title}</ModalHeader>}
        <ModalCloseButton />
        <ModalBody>{content}</ModalBody>
        {footerContent && <ModalFooter>{footerContent}</ModalFooter>}
      </ModalContent>
    </Modal>
  )
}
