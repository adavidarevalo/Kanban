import React from 'react'
import { Box } from '@chakra-ui/react'
import { FC } from 'react'

interface ErrorMessageProps {
  errorMessage: string
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ errorMessage }) => {
  return (
    <Box
      position="absolute"
      zIndex={1000}
      top="0px"
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      bg={'white'}
    >
      <Box textAlign={'center'}>{errorMessage}</Box>
    </Box>
  )
}
