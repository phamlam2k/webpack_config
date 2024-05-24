import SideBar from '@libs/@core/layout/SideBar'
import { Outlet } from 'react-router-dom'
import withAuth from '@libs/@core/security/withAuth'

const DashboardTemplate = () => {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  )
}

export default withAuth(DashboardTemplate)
