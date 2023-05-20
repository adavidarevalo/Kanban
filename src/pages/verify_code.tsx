import { useEffect } from "react"
import { Box, Image } from '@chakra-ui/react';
import { VerifyCodeForm } from '../components/verify_code/form/index';
import store from "store"
import { useRouter } from 'next/router';

const VerifyCode = () => {
    const router = useRouter()
    
    if (!store.get("user_email") && typeof window !== 'undefined') {
        router.push('/')
    }
    if (!store.get("user_email")) return <></>
    
    return (  
        <Box 
        bg="bg"
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        h={"100vh"}
        >
            <VerifyCodeForm/>
            <Box 
            display={{ base: "none", md: "none", lg: "block" }}
            maxW={"500px"}
            >
                  <Image src='https://mundomac.com.ec/wp-content/uploads/2023/03/Apple-Watch-SE-2022-2.jpg' alt='Dan Abramov' />
            </Box>
        </Box>
    );
}
 
export default VerifyCode;