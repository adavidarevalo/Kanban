import React from 'react'
import { FC } from 'react'
import { Text } from '@chakra-ui/react'

interface ErrorFormMessageProps {
  errorMessage: string
}

const ErrorFormMessage: FC<ErrorFormMessageProps> = ({ errorMessage }) => {
  if (errorMessage)
    return (
      <Text w={'300px'} color="red" mt="5" textAlign={'center'}>
        {errorMessage}
      </Text>
    )
  return <></>
}

export default ErrorFormMessage
