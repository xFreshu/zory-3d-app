'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.MAPBOX_API_KEY;

export default function MapView() {
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng] = useState(18.6941);
  const [lat] = useState(50.0486);
  const [zoom] = useState(14);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
      pitch: 60,
      bearing: -20,
      antialias: true,
      maxBounds: [
        [18.65, 50.02],
        [18.74, 50.08],
      ],
    });

    map.current.on('load', () => {
      map.current!.addLayer({
        id: '3d-buildings',
        source: 'composite',
        'source-layer': 'building',
        filter: ['==', 'extrude', 'true'],
        type: 'fill-extrusion',
        minzoom: 15,
        paint: {
          'fill-extrusion-color': '#aaa',
          'fill-extrusion-height': ['get', 'height'],
          'fill-extrusion-base': ['get', 'min_height'],
          'fill-extrusion-opacity': 0.6,
        },
      });
    });
  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
}
