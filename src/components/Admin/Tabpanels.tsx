import { TabPanels, TabPanel } from '@chakra-ui/react'
import React from 'react'
import { AddBlog } from './AddBlog'
import { AddnewCategory } from './AddnewCategory'
import { Approvedblog } from './Approvedblog'
import { Pendingblog } from './Pendingblog'
import { ViewallUsers } from './ViewallUsers'

export const Tabpanels = () => {
  return (
    <TabPanels>
            <TabPanel>
                <AddBlog />
            </TabPanel>
            <TabPanel>
                <AddnewCategory />
            </TabPanel>
            <TabPanel>
                <Pendingblog/>
            </TabPanel>
            <TabPanel>
                <Approvedblog/>
            </TabPanel>
            <TabPanel>
                <ViewallUsers/>
            </TabPanel>
    </TabPanels>
  )
}
