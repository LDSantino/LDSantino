// The location of Uluru
const position = { lat: -25.344, lng: 131.031 };

// Request needed libraries.
//@ts-ignore
const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

export default function Maps(){
  return(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 4,
      center: position,
      mapId: 'DEMO_MAP_ID',
    }
  );
}