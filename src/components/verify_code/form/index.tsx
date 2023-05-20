import React, { useEffect, useState } from 'react'
import { Formik, Form, FormikHelpers } from 'formik'
import { Box, Text, Button, Center, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { validationCodeSchema } from './schema'
import { InputField } from '../../input_form'
import AuthFormLayout from '../../layout/auth'
import { CustomLink } from '../../custom_link'
import {
  validateUserCode,
  resentVerificationCode,
} from '../../../services/auth'
import _ from 'lodash'
import ErrorFormMessage from '../../error_form_message'
import { getLocalStorage } from '@/utils/local_storage'
import { removeLocalStorage } from '../../../utils/local_storage'

interface VerifyCodeFormValues {
  validationCode: string
}

export const VerifyCodeForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()
  const toast = useToast()

  const { email } = getLocalStorage('user_email')

  useEffect(() => {
    if (!email) {
      router.push('/')
    }
  }, [])

  const initialValues: VerifyCodeFormValues = {
    validationCode: '',
  }

  const handleSubmit = async (
    { validationCode }: VerifyCodeFormValues,
    { setFieldError }: FormikHelpers<VerifyCodeFormValues>
  ) => {
    try {
      setErrorMessage('')
      setIsLoading(true)
      await validateUserCode({ code: validationCode, email })
      removeLocalStorage('user_email')
      router.push('/login')
    } catch (error) {
      setIsLoading(false)
      const errorCode = _.get(error, 'response.status', 0)
      if (+errorCode === 400) {
        setFieldError('validationCode', 'El código invalido.')
      } else {
        const errorMessage = _.get(error, 'response.data.message', '')
        setErrorMessage(errorMessage)
      }
      console.error(error)
    }
  }

  const resetCodeHandle = async () => {
    try {
      setErrorMessage('')
      setIsLoading(true)
      await resentVerificationCode({ email })
      toast({
        title: 'Codigo enviado nuevamente',
        description: 'Revise su email por favor',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      const errorMessage = _.get(error, 'response.data.message', '')
      setErrorMessage(errorMessage)

      console.error(error)
    }
  }

  return (
    <AuthFormLayout title="Validation Code">
      <Formik
        initialValues={initialValues}
        validationSchema={validationCodeSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <InputField
            name="validationCode"
            label="Validation Code"
            type="text"
          />
          <CustomLink
            text="Already have a account?"
            linkContent="Login Here"
            href="/login"
          />
          <Box display={'flex'} justifyContent={'space-between'}>
            <Button
              colorScheme="blue"
              isDisabled={isLoading}
              onClick={resetCodeHandle}
            >
              Resent Code
            </Button>
            <Button colorScheme="blue" type="submit" isDisabled={isLoading}>
              Code Validate
            </Button>
          </Box>
          <ErrorFormMessage errorMessage={errorMessage} />
        </Form>
      </Formik>
    </AuthFormLayout>
  )
}
