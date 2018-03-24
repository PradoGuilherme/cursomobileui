function tirarFoto() {
    cameraOptions = {
        quality: 100,
        destinationType: 0,
        sourceType: 1,
        allowEdit: true,
        targetWidth: 400,
        targetHeight: 400
    }
    navigator.camera.getPicture(function (imageData) {
        var image = document.getElementById('foto');
        image.src = "data:image/jpeg;base64," + imageData;
    }, function (error) {
        alert('Error:', error)
    }, cameraOptions);
}