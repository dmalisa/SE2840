window.onload = () => {
    mapSetup();
}

const mapSetup = () => {
    const map = L.map('myMap').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //sets little marker at the location specified
    let marker = L.marker([51.5, -0.09]).addTo(map);

    //adding the red circle and specifying the radius
    let circle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    //adding a polygon
    let polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(map);

    //adding popups
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    circle.bindPopup("I am a circle.");
    polygon.bindPopup("I am a polygon.");

    let popup = L.popup()
        .setLatLng([51.513, -0.09])
        .setContent("I am a standalone popup.")
        .openOn(map);

    //adding user interaction with the map
    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }

    map.on('click', onMapClick);

    let popup2 = L.popup();

    // better way of interacting with user i.e. no alerts
    function onMapClick2(e) {
        popup2
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick2);

    //creating icons
    let  BusIcon = L.icon({
        iconUrl: 'https://icon-library.com/icon/google-maps-bus-icon-26.html.html>Google Maps Bus Icon # 30292 ',

        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor

    });

    //putting the marker with the icon on the map
    L.marker([51.5, -0.09], {icon: BusIcon}).addTo(map);

    /*let LeafIcon = L.Icon.extend({
        options: {
            shadowUrl: 'leaf-shadow.png',
            iconSize:     [38, 95],
            shadowSize:   [50, 64],
            iconAnchor:   [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor:  [-3, -76]
        }
    });

    let greenIcon = new LeafIcon({iconUrl: 'leaf-green.png'}),
        redIcon = new LeafIcon({iconUrl: 'leaf-red.png'}),
        orangeIcon = new LeafIcon({iconUrl: 'leaf-orange.png'});

    L.icon = function (options) {
        return new L.Icon(options);
    };

    L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map).bindPopup("I am a green leaf.");
    L.marker([51.495, -0.083], {icon: redIcon}).addTo(map).bindPopup("I am a red leaf.");
    L.marker([51.49, -0.1], {icon: orangeIcon}).addTo(map).bindPopup("I am an orange leaf.");*/
}