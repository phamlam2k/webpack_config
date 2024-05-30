import { AdvancedMarker, Map } from '@vis.gl/react-google-maps'
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Direction from '@modules/dashboard/components/router-management/Direction'
// import DeviceIcon from "~/svgs/device.svg";

const latDefault = 21.04669875764942
const lngDefault = 105.8023423766385

const VIET_NAM_BOUNDS = {
  north: 26.625282609530778,
  south: 7.403234941112085,
  west: 91.39500174206523,
  east: 119.49802908581523
}

const defaultProps = {
  center: { lat: 21.0278, lng: 105.8342 },
  restriction: {
    latLngBounds: VIET_NAM_BOUNDS,
    strictBounds: false
  },
  zoom: 13
}

const RoutesMapContent = () => {
  const [positionDevice, setPositionDevice] = useState<{
    latitude: number
    longitude: number
  }>({
    latitude: latDefault,
    longitude: lngDefault
  })

  useEffect(() => {
    if (navigator.geolocation) {
      const successCallback = (position: {
        coords: { latitude: number; longitude: number }
      }) => {
        console.log({
          position
        })
        const { latitude, longitude } = position.coords
        setPositionDevice({
          latitude: latitude,
          longitude: longitude
        })
      }

      const errorCallback = (error: unknown) => {
        console.log(error)
      }

      navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      })
    } else {
      alert('Geolocation is not supported by this browser.')
    }
  }, [])

  return (
    <Box
      sx={{
        flex: 1,
        height: '100%'
      }}
    >
      <Map
        defaultZoom={defaultProps.zoom}
        defaultCenter={defaultProps.center}
        zoomControl={true}
        clickableIcons={false}
        mapId='69d7a5cd01d2aaa4'
      >
        <Direction />
        <AdvancedMarker
          position={{
            lat: positionDevice.latitude,
            lng: positionDevice.longitude
          }}
        >
          {/* <DeviceIcon width={40} height={40} /> */}
        </AdvancedMarker>
      </Map>
    </Box>
  )
}

export default RoutesMapContent
