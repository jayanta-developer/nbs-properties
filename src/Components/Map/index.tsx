import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px", // You can adjust the height as needed
};

const GoogleMapComponent = ({ lat, lng }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBO33Y4L5OTxCoaaH1Fph22nyblMqWEZn4", // Replace with your API key
  });

  const center = {
    lat: lat * 1,
    lng: lng * 1,
  };

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15} // Zoom level, you can adjust it
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default GoogleMapComponent;
