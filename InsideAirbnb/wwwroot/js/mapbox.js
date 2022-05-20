/** @typedef {{ id: number, latitude: number, longitude: number, name: string }} Location */


/**
 * A function which loads the Mapbox library
 * @param token {string} The token which is used for authentication of the Mapbox library
 */

window.loadMapBox = (token) => {
    mapboxgl.accessToken = token;

    window.map = new mapboxgl.Map({
        /**
         * The ID of the HTML container in which Mapbox should be displayed
         */
        container: 'map',
        /**
         * The URL of the Map style to load (Note: this also contains the data layer). Add your *style URL* here for [WORKSHOP STEP 4: CONFIGURATION].
         */
        style: 'mapbox://styles/mapbox/streets-v11',
        /**
         * The starting position of the map [longitude, latitude]
         */
        center: [4.90841, 52.3636],
        /**
         * The starting zoom level (how far the map should be zoomed)
         */
        zoom: 11
    })

    /**
     * Adds a searchbar to the map for [WORKSHOP STEP 7: SEARCHBAR]
     */

    /*
    window.map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    );
    */
}

/**
 * A function that adds a location to the map for [WORKSHOP STEP 6: MARKERS]
 * @param location {Location} The location to add to the map
 */

window.addLocationToMap = (listing) => {
    const marker = new mapboxgl.Marker().setLngLat([listing.longitude, listing.latitude]).addTo(window.map);
    marker.getElement().addEventListener('click', () => alert(`Visit location #${listing.id}, also known as '${listing.name}', all the way over here!`));
}
