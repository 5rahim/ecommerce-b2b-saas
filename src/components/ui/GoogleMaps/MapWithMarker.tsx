import { Box } from '@chakra-ui/react'
import { Status, Wrapper } from '@googlemaps/react-wrapper'
import { Marker } from '@react-google-maps/api'
import React from 'react'
import Map from './Map'

interface MapWithMarkerProps {
   latLng?: { lat: number, lng: number },
   zoom?: number
}

const render = (status: Status) => {
   return <h1>{status}</h1>
}

const MapWithMarker: React.FC<MapWithMarkerProps> = (props) => {
   
   const {
      latLng,
      zoom = 14,
      children,
      ...options
   } = props
   
   const style = {
      flexGrow: "1",
      height: "180px",
      borderRadius: '10px',
   }
   
   return (
      <>
         <Wrapper apiKey={"AIzaSyB5pR1LHgaOvjJU2mHjeJA9BsqPOOUEm_8"} render={() => <Box style={style} />}>
            <Map
               center={latLng}
               zoom={zoom}
               style={style}
            >
               <Marker position={latLng} />
            </Map>
         </Wrapper>
      </>
   )
   
}

export default MapWithMarker
