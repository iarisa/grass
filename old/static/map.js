

// var map = L.map('map').fitWorld();
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// function showPosition(position) {
//     lat = position.coords.latitude;
//     long = position.coords.longitude;
//     console.log(lat, long)
// }




if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => { ({latitude, longitude} = position.coords); });
}

console.log(latitude, longitude)

var map = L.map('map').setView([33.6424, 117.8417], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

