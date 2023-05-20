import React from 'react'
import { Box, Image } from '@chakra-ui/react';
import LoginForm from '@/components/login/form';

export default function Login() {
    return (
        <Box 
        bg="bg"
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        h={"100vh"}
        >
            <LoginForm/>
            <Box 
            display={{ base: "none", md: "none", lg: "block" }}
            maxW={"500px"}
            >
                  <Image src='https://mundomac.com.ec/wp-content/uploads/2023/03/Apple-Watch-SE-2022-2.jpg' alt='Dan Abramov' />
            </Box>
        </Box>
    )
}
