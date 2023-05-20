import { CSSObject } from '@emotion/react'

export const removeScrollBar: CSSObject = {
  '&::-webkit-scrollbar': {
    width: '0.4em',
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'transparent',
  },
}
