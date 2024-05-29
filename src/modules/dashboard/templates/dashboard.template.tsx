import SideBar from '@libs/@core/layout/SideBar'
import withAuth from '@libs/@core/security/withAuth'
import { Outlet } from 'react-router-dom'

const DashboardTemplate = () => {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  )
}

export default withAuth(DashboardTemplate)
