import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import PopupMap from './PopupMap';

import pin from './icons/pin.png';
import activepin from"./icons/activepin.png";

const Markers = ({ cityMarkers, selected, toggleSelected }) => {

  const [popState, setPopState] = useState({
    lat: 1,
    lng: 1,
    posleft:0,
    postop:0
  })

  return (
    <>
        <div>
          {cityMarkers.map(cityMarker=> {
            return (
              <Marker key={cityMarker.lat} latitude={cityMarker.lat} longitude={cityMarker.lng}>
                    {/* <Link className='map-marker' to={`/map/${cityMarker.city}${cityMarker.state_id}`}> */}
                  <div
                    onClick={() => toggleSelected(cityMarker)} 
                    onMouseEnter={(e) => (Number.isNaN(parseFloat(e.target.getAttribute("latitude"))) || setPopState({...popState, lat:parseFloat(e.target.getAttribute("latitude")), lng:parseFloat(e.target.getAttribute("longitude")),
                    posleft:e.pageX, postop:e.pageY}), console.log(popState))}
                  >
                      {selected.find(item => item === cityMarker) 
                      ? <img src={activepin} alt={`A map pin indicating ${cityMarker.city}`} latitude={cityMarker.lat} longitude={cityMarker.lng}  />
                      : <img src={pin} alt={`A map pin indicating ${cityMarker.city}`} latitude={cityMarker.lat} longitude={cityMarker.lng}  />}
                  </div>
                  {/* </Link> */}
              </Marker>
              );
        })}
          
      </div>
      <PopupMap lat={popState.lat} lng={popState.lng} posleft={popState.posleft} postop={popState.postop}/> 
      </>
      
  );
};
export default Markers;