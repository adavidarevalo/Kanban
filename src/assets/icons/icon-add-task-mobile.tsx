import React from 'react'

interface IconAddTaskMobileProps {
  fill?: string
  size?: string
}

export const IconAddTaskMobile = ({
  fill = '#FFF',
  size = '12',
}: IconAddTaskMobileProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
      <path
        fill={fill}
        d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"
      ></path>
    </svg>
  )
}
