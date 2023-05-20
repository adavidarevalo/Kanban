import { useColorTheme } from '@/hook/useColorMode'
import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface BoardButtonProps {
  title?: ReactNode
  isSelected: boolean
  icon: ReactNode
  isContentCenter?: boolean
  textColor?: string
  background?: string
  onClick: () => void
}

export const CustomButton = ({
  title,
  isSelected,
  icon,
  isContentCenter = false,
  textColor,
  background,
  onClick,
}: BoardButtonProps) => {
  const { bgSimple } = useColorTheme()

  const color = textColor || (isSelected ? 'realWhite' : 'gray.text')
  const backgroundColor =
    background || (isSelected ? 'darkPurple' : 'transparent')

  return (
    <Box
      color={color}
      background={backgroundColor}
      _hover={{ backgroundColor: bgSimple, color: 'darkPurple' }}
      transition="all 0.3s ease-in-out"
      p="3"
      w="90%"
      borderTopRightRadius="25"
      borderBottomRightRadius="25"
      display={'flex'}
      alignItems={'center'}
      cursor="pointer"
      pl={isContentCenter ? '0' : '25px'}
      justifyContent={isContentCenter ? 'center' : 'flex-start'}
      onClick={onClick}
    >
      {icon}
      {title && <Box ml="2">{title}</Box>}
    </Box>
  )
}
