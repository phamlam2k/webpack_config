import withAuth from '@libs/@core/hocs/withAuth'
import SideBar from '@libs/@core/layout/SideBar'
import { Outlet } from 'react-router-dom'
import { LayoutStyled } from '@modules/dashboard/components/_styled/dashboard.styled'

const DashboardTemplate = () => {
  return (
    <LayoutStyled>
      <SideBar />
      <Outlet />
    </LayoutStyled>
  )
}

export default withAuth(DashboardTemplate)
