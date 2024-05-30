import withAuth from '@libs/@core/hocs/withAuth'
import SideBar from '@libs/@core/layout/SideBar'
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
