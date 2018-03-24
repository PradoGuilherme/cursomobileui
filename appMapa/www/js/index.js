var map

document.addEventListener('deviceready', onDeviceReady)

function onDeviceReady() {
    var div = document.getElementById('mapa')
    map = plugin.google.maps.Map.getMap(div);
}

function obter() {
    var config = {
        enableHighAccuracy: true
    }
    navigator.geolocation.getCurrentPosition(onSuccess, function (error) {
        alert(error.message)
    }, config);
}
function onSuccess(position) {
    var localizacao = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }

    map.animateCamera({
        target: localizacao,
        zoom: 17,
        //tilt: 60,
        //bearing: 140,
        duration: 5000
    }, function () {

        // Add a maker
        map.addMarker({
            position: localizacao,
            title: "ESTOU AQUI",
            animation: plugin.google.maps.Animation.BOUNCE
        }, function (marker) {
            marker.showInfoWindow()
        })
    })

}