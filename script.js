let qrCode = null;

function generarQR() {
    var texto = document.getElementById('texto').value;
    var contenedorQR = document.getElementById('qrcode');


    contenedorQR.innerHTML = '';

    if (texto) {
        qrCode = new QRCodeStyling({
            width: 300,
            height: 300,
            data: texto,
            dotsOptions: {
                color: "#000000",
                type: "rounded"
            },
            cornersSquareOptions: {
                type: "extra-rounded"
            },
            backgroundOptions: {
                color: "#ffffff",
            }
        });

        qrCode.append(contenedorQR);

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
