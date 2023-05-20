import React from 'react'
import { useField } from 'formik'
import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'

interface InputFieldProps {
  name: string
  label: string
  type: string
  placeholder?: string
}

export const InputField = (props: InputFieldProps) => {
  const [field, meta] = useField(props)

  const hasError = meta.touched && !!meta.error

  return (
    <FormControl mb={'5'} isInvalid={hasError}>
      <FormLabel>{props.label}</FormLabel>
      <Input
        {...field}
        type={props.type}
        placeholder={props?.placeholder || ''}
      />
      {hasError && (
        <FormHelperText color="red.normal" w={'300px'}>
          {meta.error}
        </FormHelperText>
      )}
    </FormControl>
  )
}
