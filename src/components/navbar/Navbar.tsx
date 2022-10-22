import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { BrandDisplay } from './BrandDisplay'
import { UserTag } from './UserTag'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <Box w={"100%"} boxShadow={"sm"} py="10px" px="15px" > 
        <Flex w="100%" justifyContent={"space-between"} align={"center"}> 
            <Box>
                <BrandDisplay />
            </Box>

            <Box>
                
            </Box>

            <Box>
              <UserTag/>
            </Box>
        </Flex>
    </Box>
  )
}


export default Navbar