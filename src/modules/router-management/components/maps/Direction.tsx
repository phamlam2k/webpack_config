import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps'
import { useEffect, useState } from 'react'

const Direction = () => {
  const map = useMap()
  const routesLibrary = useMapsLibrary('routes')
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>()
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([])

  useEffect(() => {
    if (!map || !routesLibrary) return

    setDirectionsService(new routesLibrary.DirectionsService())
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }))
  }, [routesLibrary, map])

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return

    directionsService.route(
      {
        origin: {
          lat: 21.067738394076986,
          lng: 105.81143408551394
        },
        destination: 'Số 102 Phố Yên Bình, Hà Đông, Hà Nội, Vietnam',
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        console.log({ result, status })
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result)
          setRoutes(result?.routes || [])
        }
      }
    )
  }, [directionsService, directionsRenderer])

  return <></>
}

export default Direction
