import React from 'react'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import { LogoDark } from '../../../../assets/logo-dark'
import { LogoLight } from '../../../../assets/logo-light'
import { useColorTheme } from '../../../../hook/useColorMode'
import ActionsHeader from './actions'

export const HeaderDashboard = () => {
  const { colorMode } = useColorTheme()

  return (
    <Box>
      <Flex p={4} color="white" mx={['none', '20px']}>
        <Box display={'flex'} alignItems={'center'}>
          {colorMode === 'light' ? <LogoDark /> : <LogoLight />}
          <Box>
            <ChevronDownIcon
              color="darkPurple"
              display={['block', 'none']}
              w={5}
              h={5}
              ml="10px"
            />
          </Box>
        </Box>
        <Spacer />
        <ActionsHeader />
      </Flex>
    </Box>
  )
}
