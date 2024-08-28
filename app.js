// Función para encriptar utilizando el cifrado César
function encryptCaesar(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        result += char;
    }
    return result;
}

// Función para descifrar 
function decryptCaesar(result) {
    return result; //Devuleve valor original encriptado
}

// Captura de entrada del teclado y encriptación/descifrado
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('inputField');
    const outputEncrypted = document.getElementById('outputEncrypted');
    const outputDecrypted = document.getElementById('outputDecrypted');
    const encryptButton = document.getElementById('encryptButton');
    const decryptButton = document.getElementById('decryptButton');

    encryptButton.addEventListener('click', () => {
        const userInput = inputField.value;
        const encryptedText = encryptCaesar(userInput, 3); // Desplazamiento de 3 posiciones para encriptar
        outputEncrypted.value = encryptedText;
        outputDecrypted.value = ""; // Limpiar el campo de salida del texto descifrado
    });

    decryptButton.addEventListener('click', () => {
        const userInput = inputField.value;
        const decryptedText = decryptCaesar(userInput); // Desplazamiento de 3 posiciones para desencriptar
        outputDecrypted.value = decryptedText;
        outputEncrypted.value = ""; // Limpiar el campo de salida del texto encriptado
    });
});
