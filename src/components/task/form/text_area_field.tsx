import React from 'react'
import { Box, FormHelperText, FormLabel, Textarea } from '@chakra-ui/react'
import { useField } from 'formik'

interface DescriptionTextAreaProps {
  label?: string
  name: string
  type: string
  placeholder?: string
}

export const TextAreaField = (props: DescriptionTextAreaProps) => {
  const [field, meta] = useField(props)
  const hasError = meta.touched && !!meta.error

  return (
    <Box mb={'5'}>
      {props.label && <FormLabel>{props.label}</FormLabel>}
      <Textarea {...props} />
      {hasError && (
        <FormHelperText color="red.normal" w={'300px'}>
          {meta.error}
        </FormHelperText>
      )}
    </Box>
  )
}
