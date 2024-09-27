let qrCode = null;

function generarQR() {
    var texto = document.getElementById('texto').value;
    var contenedorQR = document.getElementById('qrcode');

    // Limpiar el contenedor QR antes de generar uno nuevo
    contenedorQR.innerHTML = '';

    if (texto) {
        qrCode = new QRCodeStyling({
            width: 300,
            height: 300,
            data: texto,
            dotsOptions: {
                color: "#000000",
                type: "rounded" // Aquí aplicamos el estilo curvado
            },
            cornersSquareOptions: {
                type: "extra-rounded" // Bordes con esquinas redondeadas
            },
            backgroundOptions: {
                color: "#ffffff", // Fondo blanco
            }
        });

        qrCode.append(contenedorQR);

        // Mostrar los botones de descarga después de que se haya generado el QR
        document.getElementById('descargarQR').style.display = 'inline-block';
        document.getElementById('descargarSVG').style.display = 'inline-block';
    } else {
        alert('Por favor, ingresa el texto para generar el código QR.');
    }
}

function descargarImagenQR() {
    if (qrCode) {
        qrCode.download({
            name: "codigoQR",
            extension: "png"
        });
    }
}

function descargarSVG() {
    if (qrCode) {
        qrCode.download({
            name: "codigoQR",
            extension: "svg"
        });
    }
}
