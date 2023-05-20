import Link from 'next/link';
import { Box, Text } from '@chakra-ui/react';

interface CustomLinkProps {
    text: string;
    linkContent: string;
    href: string
}

export const CustomLink = ({ text, linkContent, href }: CustomLinkProps) => {
    return (
        <Box 
        display={'flex'} 
        justifyContent={'space-between'} 
        mb={"5"}>
            <Text>{text}</Text>
            <Box
                color='teal.500'
                fontWeight={"bold"}
            >
                <Link href={href}>{linkContent}</Link>
            </Box>
        </Box>
    );
}
