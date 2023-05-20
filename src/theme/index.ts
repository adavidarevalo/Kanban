import { extendTheme } from '@chakra-ui/react'

// prettier-ignore
export const colors = {
  darkPurple: '#635FC7',
  realWhite: '#ffffff',
  light: {
    "bg": '#FFFFFF',
    "bgPrimary": '#FFFFFF',
    "bgSecond": "#635FC7",
    "bgDashboard": "#F4F7FC",
    "bgSimple": "#635FC71A",
    "bgThird": "#635FC7",
    "bgNewColumn": "#E9EFFA",
    "taskCard": "#FFFFFF"
  },
  dark: {
    "bg": '#2B2C37',
    "bgPrimary": '#2B2C37',
    "bgSecond": "#FFFFF",
    "bgDashboard": "#20212C",
    "bgSimple": "#FFFFFF",
    "bgThird": "#2B2C37",
    "bgNewColumn": "#22232E",
    "taskCard": "#2B2C37"
  },
  gray: {
    "normal": "#727D8F",
    "text": "#828fa3",
    "textBold": "#8B98AB"
  },
  red: {
    "normal": "#ea5555"
  }
}

export const theme = extendTheme({ colors })
