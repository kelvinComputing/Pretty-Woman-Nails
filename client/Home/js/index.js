var map = L.map('map').setView([10.47787828854089, -66.8582164762956], 18);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([10.47787828854089, -66.8582164762956]).addTo(map);

marker.bindPopup("<b>Centro Comercial</b><br>Paseo de las Mercedes").openPopup();



