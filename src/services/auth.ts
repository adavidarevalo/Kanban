import { RegistrationNewUser } from '@/components/register/form';
import axiosInstance from '../utils/axios';
import { LoginFormValues } from '@/components/login/form';

export const registerNewUser = async (payload: RegistrationNewUser):Promise<void> => {
        const response = await axiosInstance.post('/register-user', payload);
        return response.data
}

export const validateUserCode = async (payload: {code: string, email: string}):Promise<void> => {
    const response = await axiosInstance.post('/verify-code', payload);
    return response.data
}

export const resentVerificationCode = async (payload: { email: string}):Promise<void> => {
    const response = await axiosInstance.post('/resent-code', payload);
    return response.data
}

export const login = async (payload: LoginFormValues):Promise<void> => {
    const response = await axiosInstance.post('/login', payload);
    console.log('XXX ', JSON.stringify(response))
    return response.data
}