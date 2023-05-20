import { InputField } from '@/components/input_form'
import { CloseIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'
import React from 'react'

interface ColumnFieldProps {
  index: number
  name: string
  remove: (index: number) => void
}

export const ColumnField = ({ name, index, remove }: ColumnFieldProps) => {
  return (
    <Box display={'flex'}>
      <InputField name={name} type="text" placeholder="" label="" />
      <CloseIcon onClick={() => remove(index)} mt="5" ml="5" />
    </Box>
  )
}
