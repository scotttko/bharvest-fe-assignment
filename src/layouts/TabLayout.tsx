import { Outlet, useLocation } from 'react-router-dom'
import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'motion/react'
import { NavTab } from '@/components/shared'

function TabLayout() {
  const location = useLocation()

  return (
    <TabLayoutContainer>
      <TabWrapper>
        <NavTab
          tabs={[
            { label: 'Swap', path: '/swap' },
            { label: 'Limit', path: '/limit' },
            { label: 'Send', path: '/send' },
            { label: 'Buy', path: '/buy' },
          ]}
        />

        <TabContentWrapper>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </TabContentWrapper>
      </TabWrapper>
    </TabLayoutContainer>
  )
}

export default TabLayout

const TabLayoutContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 60px 0 40px;
`

const TabWrapper = styled.div`
  max-width: 480px;
  width: 100%;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
`

const TabContentWrapper = styled.div`
  position: relative;
`
