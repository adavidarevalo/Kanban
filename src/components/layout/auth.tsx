import React, { ReactNode } from 'react'
import { Box, Text } from '@chakra-ui/react'

interface AuthFormLayoutProps {
  children: ReactNode
  title: string
}

const AuthFormLayout = ({ children, title }: AuthFormLayoutProps) => {
  return (
    <Box minW={'300px'}>
      <Text fontSize="2xl" textAlign={'center'} mb={'5'} fontWeight={'bold'}>
        {title}
      </Text>
      {children}
    </Box>
  )
}

export default AuthFormLayout
