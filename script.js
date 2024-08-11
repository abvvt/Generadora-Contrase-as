document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate').addEventListener('click', generatePassword);
    document.getElementById('copy').addEventListener('click', copyPassword);
});

function generatePassword() {
    const length = 12; // Longitud de la contraseña
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:',.<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById('password').value = password;
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    navigator.clipboard.writeText(passwordField.value)
        .then(() => {
            alert('Contraseña copiada al portapapeles!');
        })
        .catch(err => {
            console.error('Error al copiar la contraseña: ', err);
        });
}



