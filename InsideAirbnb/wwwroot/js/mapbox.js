/** @typedef {{ listingId: number, latitude: number, longitude: number }} Location */


/**
 * A function which loads the Mapbox library
 * @param token {string} The token which is used for authentication of the Mapbox library
 * @param geoJson {string} The geoJson data containing locations
 */

window.loadMapBox = (token, geoJson) => {
    mapboxgl.accessToken = token;

    window.map = new mapboxgl.Map({
        /**
         * The ID of the HTML container in which Mapbox should be displayed
         */
        container: 'map', /**
         * The URL of the Map style to load (Note: this also contains the data layer). Add your *style URL* here for [WORKSHOP STEP 4: CONFIGURATION].
         */
        style: 'mapbox://styles/mapbox/streets-v11', /**
         * The starting position of the map [longitude, latitude]
         */
        center: [4.90841, 52.3636], /**
         * The starting zoom level (how far the map should be zoomed)
         */
        zoom: 11,
        
        
    })
    
    window.map.on('load', () => {
        map.addSource('earthquakes', {
            type: 'geojson',
// Use a URL for the value for the `data` property.
            data: JSON.parse(geoJson)
        });

        map.addLayer({
            'id': 'earthquakes-layer',
            'type': 'circle',
            'source': 'earthquakes',
            'paint': {
                'circle-radius': 8,
                'circle-stroke-width': 2,
                'circle-color': 'red',
                'circle-stroke-color': 'white'
            }
        });
    });
}
