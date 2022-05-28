/** @typedef {{ id: number, latitude: number, longitude: number }} Location */

/**
 * A function which loads the Mapbox library
 * @param token {string} The token which is used for authentication of the Mapbox library
 * @param geoJson {string} The geoJson data containing locations
 */

window.loadMapBox = (token, geoJson, dotNetHelper) => {
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
            type: 'geojson', // Use a URL for the value for the `data` property.
            data: JSON.parse(geoJson), cluster: true
        });

        map.addLayer({
            'id': 'earthquakes-layer',
            'type': 'circle',
            'source': 'earthquakes',
            'filter': ['has', 'point_count'],
            'paint': {
                'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],
                'circle-stroke-width': 2,
                'circle-color': 'blue',
                'circle-stroke-color': 'white'
            }
        });

        map.addLayer({
            id: 'cluster-count', type: 'symbol', source: 'earthquakes', filter: ['has', 'point_count'], layout: {
                'text-field': '{point_count_abbreviated}',
                'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                'text-size': 20,
            }
        });

        map.addLayer({
            id: 'unclustered-point',
            type: 'circle',
            source: 'earthquakes',
            filter: ['!', ['has', 'point_count']],
            paint: {
                'circle-color': 'blue', 'circle-radius': 10, 'circle-stroke-width': 1, 'circle-stroke-color': '#fff'
            }
        });

        map.on('click', 'unclustered-point', (e) => {
            // const coordinates = e.features[0].geometry.coordinates.slice();
            console.log(`clicked on listing ${e.features[0].properties.id}`);
            window.location.replace(`#${e.features[0].properties.id}`)
            dotNetHelper.invokeMethodAsync('SelectListing', e.features[0].properties.id);
        });
    });
}
