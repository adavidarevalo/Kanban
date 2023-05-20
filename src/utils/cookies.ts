import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getCookie = (cookieName: string) => cookies.get(cookieName)