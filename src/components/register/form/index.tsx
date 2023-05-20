import React, { useState } from 'react'
import { Formik, Form, FormikHelpers } from 'formik'
import { Button, Center } from '@chakra-ui/react'
import _ from 'lodash'
import { useRouter } from 'next/router'
import { registerSchema } from './schema'

import { InputField } from '../../input_form'
import { CustomLink } from '../../custom_link'
import AuthFormLayout from '../../layout/auth'
import { registerNewUser } from '../../../services/auth'
import ErrorFormMessage from '../../error_form_message'
import { setLocalStorage } from '../../../utils/local_storage'

export interface FormValues {
  username: string
  email: string
  password: string
  repeatPassword: string
}

export type RegistrationNewUser = Omit<FormValues, 'repeatPassword'>

export const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const router = useRouter()

  const initialValues: FormValues = {
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  }

  const handleSubmit = async (
    value: FormValues,
    { setFieldError }: FormikHelpers<FormValues>
  ) => {
    try {
      setErrorMessage('')

      setIsLoading(true)
      const { username, email, password } = value
      await registerNewUser({ username, email, password })
      setLocalStorage('user_email', { email })
      router.push('/verify_code')
    } catch (error) {
      setIsLoading(false)
      const errorMessage = _.get(error, 'response.data.message', '')
      if (errorMessage.includes('email')) {
        setFieldError('email', errorMessage)
      } else {
        setErrorMessage(errorMessage)
      }
      console.error(error)
    }
  }

  return (
    <AuthFormLayout title="Register">
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <InputField name="username" label="Username" type="text" />
          <InputField name="email" label="Email" type="email" />
          <InputField name="password" label="Password" type="password" />
          <InputField
            name="repeatPassword"
            label="Repeat Password"
            type="password"
          />
          <CustomLink
            text="Already have a account?"
            linkContent="Login Here"
            href="/login"
          />
          <Center>
            <Button
              colorScheme="blue"
              m="0 auto"
              type="submit"
              isDisabled={isLoading}
              isLoading={isLoading}
            >
              Create User
            </Button>
          </Center>
          <ErrorFormMessage errorMessage={errorMessage} />
        </Form>
      </Formik>
    </AuthFormLayout>
  )
}
