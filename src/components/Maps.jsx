"use client"
import React, {useEffect} from 'react';

import { Loader } from '@googlemaps/js-api-loader';

const Maps = () => {

    const mapRef = React.useRef(null)

    useEffect (()=>{

        const initMap = async () =>{

            const loader = new Loader({
                apiKey: "AIzaSyDQh-bCL1MU6N_fCa0ubzsHV9NYrQwrUq8",
                version: "weekly",
                libraries: ["places"]
              });

              const { Map } = await loader.importLibrary('maps') 
              
              const mapOptions = {
                center: {
                  lat: 5.518179,
                  lng: -0.449286
                },
                zoom: 11
              };

              const map = new Map (mapRef.current, mapOptions)

        }

        initMap()
      


    },[])

  return (
    <div style={{height:'600px'}} ref={mapRef}>

    </div>
  )
}

export default Maps