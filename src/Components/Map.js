import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: 'max',
  height: '500px'
}

const center = {
  lat: -32.88626145587847,
  lng: -68.83828831798627
}
 

const Map = () => {
  return(
     <LoadScript
          googleMapsApiKey="AIzaSyBNOC3IBJR_GEfF4mNbJ_ll4R74FFH0RqI">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
          >
          <Marker
              position= {center}
          />
          </GoogleMap>
        </LoadScript>
  );
};

export default Map;