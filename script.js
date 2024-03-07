function descargarImagenQR() {
    var canvas = document.querySelector('#qrcode canvas');
    var canvasImageUrl = canvas.toDataURL('image/png');

    // Creamos un nuevo canvas donde se incluirá el borde.
    var canvasConBorde = document.createElement('canvas');
    var context = canvasConBorde.getContext('2d');

    // Tamaño personalizado para la imagen PNG
    var anchoImagen = 900; // Tamaño en píxeles
    var altoImagen = 900;
    var borde = 5 * 16; // 2rem, asumiendo que el tamaño base del navegador es 16px

    canvasConBorde.width = anchoImagen + borde;
    canvasConBorde.height = altoImagen + borde;

    // Rellenamos el canvas con el color del borde y luego dibujamos el QR encima.
    context.fillStyle = '#ffffff'; // el color del borde
    context.fillRect(0, 0, canvasConBorde.width, canvasConBorde.height);
    context.drawImage(canvas, borde / 2, borde / 2, anchoImagen, altoImagen);

    // Creamos un elemento <a> para descargar la imagen
    var link = document.createElement('a');
    link.download = 'codigoQR.png';
    link.href = canvasConBorde.toDataURL('image/png', 96); // Establecer la resolución a 96 DPI
    link.click();
}

function generarQR() {
    var texto = document.getElementById('texto').value;
    var contenedorQR = document.getElementById('qrcode');

    // Limpiar el contenedor QR antes de generar uno nuevo
    contenedorQR.innerHTML = '';

    if (texto) {
        new QRCode(contenedorQR, {
            text: texto,
            width: 350,
            height: 350,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        // Mostrar el botón de descarga después de que se haya generado el QR
        document.getElementById('descargarQR').style.display = 'inline-block';
    } else {
        alert('Por favor, ingresa el texto para generar el código QR.');
    }
}
