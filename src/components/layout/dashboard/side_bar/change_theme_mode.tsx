import { IconDarkTheme } from '@/assets/icons/icon-dark-theme'
import { IconLightTheme } from '@/assets/icons/icon-light-theme'
import { useColorTheme } from '@/hook/useColorMode'
import { MoonIcon, SettingsIcon } from '@chakra-ui/icons'
import { Box, Center, Switch, useColorMode } from '@chakra-ui/react'
import React from 'react'

export const ChangeThemeMode = () => {
  const { toggleColorMode } = useColorMode()
  const { bgDashboard } = useColorTheme()

  return (
    <Center>
      <Box
        w={'80%'}
        bg={bgDashboard}
        p="3"
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius="10"
        mb="2"
      >
        <Box mr="3">
          <IconDarkTheme />
        </Box>
        <Switch
          onChange={toggleColorMode}
          colorScheme="purple"
          position="inherit"
        />
        <Box ml="3">
          <IconLightTheme />
        </Box>
      </Box>
    </Center>
  )
}
