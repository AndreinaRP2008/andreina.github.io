const textContrasena = document.querySelector("#text-contrasena")
const input = document.querySelector("#range")
const cbUppercase = document.querySelector("#uppercase")
const cbLowercase = document.querySelector("#lowercase")
const cbNumbers = document.querySelector("#number")
const cbSymbols = document.querySelector("#symbol")
const btnGenerate = document.querySelector("#btn-generate")

function validarCampos() {
    let str = ''
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const symbols = '!@#$'

    if(
        cbUppercase.checked === false &&
        cbLowercase.checked === false &&
        cbNumbers.checked === false &&
        cbSymbols.checked === false
    ) {
        alert('Debes seleccionar algunas reglas para generar la contraseña')
        return
    } 

    if(cbUppercase.checked === true) {
        str += uppercase
    }

    if(cbLowercase.checked === true) {
        str += lowercase
    }

    if(cbNumbers.checked === true) {
        str += numbers
    }
    
    if(cbSymbols.checked === true) {
        str += symbols
    }

    generarContrasena(str)
    
}

function generarContrasena(str) {
    let pass = ''
    for (let i = 1; i <= input.value; i++) {
        const char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
    }

    textContrasena.value = pass
}