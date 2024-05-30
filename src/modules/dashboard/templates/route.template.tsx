import RoutesMapContent from '@modules/dashboard/components/router-management/RoutesMap'
import Helmet from 'react-helmet'

const RouteTemplate = () => {
  return (
    <>
      <Helmet>
        <title>Route Management</title>
      </Helmet>
      <RoutesMapContent />
    </>
  )
}

export default RouteTemplate
