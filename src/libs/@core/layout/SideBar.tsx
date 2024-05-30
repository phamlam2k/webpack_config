import { ROUTE_LINK } from '@libs/@core/constants/const'
import { SideBarStyled } from '@modules/dashboard/components/_styled/dashboard.styled'
import { NavLink } from 'react-router-dom'

const listMenu = [
  {
    id: 2,
    name: 'Route Management',
    icon: 'route',
    path: ROUTE_LINK.GOOGLE_MAP
  },
  {
    id: 3,
    name: 'Leaflet Map',
    icon: 'map',
    path: ROUTE_LINK.LEAFMAP
  }
]

const SideBar = () => {
  return (
    <SideBarStyled>
      {listMenu.map((item) => (
        <NavLink key={item.id} to={item.path}>
          {item.name}
        </NavLink>
      ))}
    </SideBarStyled>
  )
}

export default SideBar
