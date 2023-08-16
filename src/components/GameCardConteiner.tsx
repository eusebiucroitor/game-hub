import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
interface Props{
    children: ReactNode
}

const GameCardConteiner = ({children}:Props) => {
  return (
    <Box width="300px"  borderRadius={10} overflow={'hidden'}>{children}</Box>
  )
}

export default GameCardConteiner