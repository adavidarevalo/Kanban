import React from 'react'
import { Formik, Form } from 'formik'
import { Button, Center } from '@chakra-ui/react'
import { loginSchema } from './schema'
import { InputField } from '../../input_form'
import { CustomLink } from '../../custom_link'
import AuthFormLayout from '../../layout/auth'
import { useState } from 'react'
import { login } from '../../../services/auth'
import { useRouter } from 'next/router'
import _ from 'lodash'
import ErrorFormMessage from '../../error_form_message'
import { getCookie } from '@/utils/cookies'
import { cookies } from 'next/headers'

export interface LoginFormValues {
  email: string
  password: string
}

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const router = useRouter()

  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  }

  const handleSubmit = async (value: LoginFormValues) => {
    try {
      setErrorMessage('')
      setIsLoading(true)
      await login(value)
      const cookie = getCookie('refreshToken')
      // console.log("🚀 ~ file: index.tsx:36 ~ handleSubmit ~ cookie:", cookies().getAll())
      setIsLoading(false)
      // router.push("/")
    } catch (error) {
      setIsLoading(false)
      const errorMessage = _.get(error, 'response.data.message', '')
      setErrorMessage(errorMessage)

      console.error(error)
    }
  }

  return (
    <AuthFormLayout title="Sing in">
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <InputField name="email" label="Email" type="email" />
          <InputField name="password" label="Password" type="password" />
          <CustomLink
            text="Don't have an account?"
            linkContent="Register Here"
            href="/register"
          />
          <Center>
            <Button
              colorScheme="blue"
              m="0 auto"
              type="submit"
              isDisabled={isLoading}
              isLoading={isLoading}
            >
              Sing In
            </Button>
          </Center>
          <ErrorFormMessage errorMessage={errorMessage} />
        </Form>
      </Formik>
    </AuthFormLayout>
  )
}

export default LoginForm
