import { Box,Text, VStack, Tabs, TabList, TabPanels, Tab, TabPanel, Flex } from '@chakra-ui/react'
import React from 'react'
import { Tablist } from './Tablist'
import { Tabpanels } from './TabPanels'

export const Menus = (props:{isVisible:boolean}) => {
  return (
    <Box>
        <Tabs>
        <Flex direction={["column", "column", "row", "row"]} position={"relative"}>
              {props.isVisible?
              <Box w={"200px"} display={"block"} minH="100vh"  position={["absolute","absolute","relative","relative"]} bg="#fff" zIndex={["1", "1", "0", "0"]} borderRight="1px solid #ccc">
               <Tablist/>
              </Box>
              :null}

              {/* {props.isVisible?<Box w={"170px"} display={["block", "block", "none", "none"]} position={"absolute"} bg="#fff" minH="100vh" borderRight="1px solid #ccc">
               <Tablist/>
              </Box>:null} */}
                   
              <Box w={"100%"}  position={"relative"} zIndex="0" minH={"100vh"}>
                <Tabpanels/>
              </Box>

              <Box >
               
              </Box>

        </Flex>          
        </Tabs>
    </Box>
  )
}
