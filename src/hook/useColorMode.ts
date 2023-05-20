import { colors } from '@/theme'
import { useColorModeValue, useColorMode, ColorMode } from '@chakra-ui/react'

interface UseColorModeResult {
  [key: string]: string | ColorMode
}

export const useColorTheme = (): UseColorModeResult => {
  const { colorMode } = useColorMode()

  const colorByTheme: UseColorModeResult = {}

  for (const key in colors.light) {
    colorByTheme[key] = useColorModeValue(`light.${key}`, `dark.${key}`)
  }

  return {
    colorMode,
    ...colorByTheme,
  }
}
