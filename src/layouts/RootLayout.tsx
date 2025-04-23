import { Header } from '@/components/shared'
import { Outlet } from 'react-router-dom'
import styled from '@emotion/styled'

function RootLayout() {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  )
}

export default RootLayout

const MainContainer = styled.main`
  padding-top: 72px;
`
