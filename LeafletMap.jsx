import React from 'react';
import { Map, Marker, InfoWindow } from '@vis.gl/react-google-maps';

function GoogleMapComponent() {
  // Coordinates for Saraswati Complex, Majalpur, Vadodara
  const lat = 22.3039;
  const lng = 73.2011;
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ height: '400px', width: '100%', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <Map
        style={{ height: '100%', width: '100%' }}
        defaultCenter={{ lat, lng }}
        defaultZoom={16}
        gestureHandling={'greedy'}
        disableDefaultUI={false}
        mapId="DEMO_MAP_ID"
      >
        <Marker 
          position={{ lat, lng }} 
          onClick={() => setOpen(true)}
          title="Ideal Computer Class"
        />
        {open && (
          <InfoWindow 
            position={{ lat, lng }} 
            onCloseClick={() => setOpen(false)}
            options={{
              pixelOffset: new window.google.maps.Size(0, -40)
            }}
          >
            <div style={{ padding: '10px', maxWidth: '250px' }}>
              <h3 style={{ margin: '0 0 8px 0', color: '#333', fontSize: '16px' }}>
                <strong>Ideal Computer Class</strong>
              </h3>
              <p style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#666' }}>
                204, 205 & 206 Saraswati Complex
              </p>
              <p style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#666' }}>
                Opposite To Manjalpur Atithi Gruh
              </p>
              <p style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#666' }}>
                Majalpur, Vadodara, Gujarat
              </p>
              <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
                📞 +91 9376218196
              </p>
            </div>
          </InfoWindow>
        )}
      </Map>
    </div>
  );
}

export default GoogleMapComponent;


