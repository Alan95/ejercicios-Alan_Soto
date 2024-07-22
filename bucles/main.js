"use strict"
//Para ejecutar los ejercicios, solo llama a la funcion correspondiente
function ejercicio1() {
    let numero = parseInt(prompt("Ingresa un numero"))

    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}

/* ---------------------------------------------------------------------------------- */

function ejercicio2() {
    let acumulador = 0
    let numero = 0

    do {
        numero = parseInt(prompt("Ingresa un numero"))
        acumulador += numero
        console.log(acumulador)
    } while (numero !== 0)
}

/* ---------------------------------------------------------------------------------- */

function ejercicio3() {
    let n_secreto = Math.floor(Math.random() * 100) + 1
    let intentos = 0
    let n_ingresado = 0

    do {
        n_ingresado = parseInt(prompt("Ingresa un numero del 1 al 100:"))
        intentos++
        if (n_ingresado < 1 || n_ingresado > 100 || isNaN(n_ingresado)) {
            alert("El numero debe estar entre 1 y 100")

        } else if (n_ingresado < n_secreto) {
            alert("El numero es mayor")

        } else if (n_ingresado > n_secreto) {
            alert("El numero es menor")

        } else {
            alert(`FELICITACIONES.\nIntentos: ${intentos}`)
        }
    } while (n_ingresado !== n_secreto)
}

/* ---------------------------------------------------------------------------------- */

function ejercicio4() {
    let n_ingresado = parseInt(prompt("Ingresa un numero"))
    let cant_divisores = 1 /* Todo numero es divisible por si mismo y el bucle solo 
recorre la mitad del mismo, por eso le sumo 1 a la cantidad de divisores */

    for (let i = 1; i <= Math.floor(n_ingresado / 2); i++) {

        if (n_ingresado % i === 0) {
            cant_divisores++

            if (cant_divisores > 2) {
                break
            }
        }
    }

    if (cant_divisores === 2) {
        alert("Es primo")
    } else {
        alert("No es primo")
    }
}

/* ---------------------------------------------------------------------------------- */

function ejercicio5() {

    let n_ingresado = parseInt(prompt("Ingresa un numero"))

    for (let i = 1; i <= n_ingresado; i++) {
        if (n_ingresado % i === 0) {
            console.log(i)
        }
    }
}

/* ---------------------------------------------------------------------------------- */

function ejercicio6() {

    let arr = ["pepe", "juan", "maria", "pedro", "luis", "jose", "ana", "javier", "carlos", "marcos"]

    for (let value of arr) {
        console.log(value)
    }
}

/* ---------------------------------------------------------------------------------- */

function ejercicio7() {

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for (const value of arr) {
        console.log(value + "\t" + value * 2)
    }
}

/* ---------------------------------------------------------------------------------- */

function ejercicio8() {

    let familia = []

    function Persona() {
        this.nombre = "Pepe"
        this.apellido = "Picapiedra"
        this.integrante = "abuelo"
        this.edad = 120

        return this
    }

    for (let i = 0; i < 5; i++) {
        familia.push(new Persona())
    }

    for (const value of familia) {
        console.log(`Mi nombre es ${value.nombre} ${value.apellido}, soy el ${value.integrante} y tengo ${value.edad} años`)
    }
}

/* ---------------------------------------------------------------------------------- */

function ejercicio9() {

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for (const value of arr) {
        if (value % 2 !== 0) {
            console.log(value)
        }
    }
}

/* ---------------------------------------------------------------------------------- */

function ejercicio10() {

    let n_ingresado = 0
    let suma_pares = 0
    let suma_impares = 0

    do {
        n_ingresado = parseInt(prompt("Ingresa un numero"))

        if (n_ingresado % 2 === 0) {
            suma_pares += n_ingresado

        } else if (n_ingresado % 2 !== 0) {
            suma_impares += n_ingresado
        }
    } while (n_ingresado !== 0)

    console.log(`La suma de los pares es ${suma_pares} y la suma de los impares es ${suma_impares}`)
}

/* ---------------------------------------------------------------------------------- */

function ejercicio11() {

    let arr = []

    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1)
    }

    console.log(Math.max(...arr))
}

/* ---------------------------------------------------------------------------------- */

function ejercicio12() {

    let arr = []

    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1)
    }

    console.log(Math.min(...arr))
}

/* ---------------------------------------------------------------------------------- */

function ejercicio13() {

    let nom_jugador1 = prompt("Ingresa tu nombre jugador 1")
    let nom_jugador2 = prompt("Ingresa tu nombre jugador 2")
    let mano_jugador1 = ""
    let mano_jugador2 = ""

    do {
        mano_jugador1 = prompt(`${nom_jugador1} ingresa tu mano`)
        mano_jugador2 = prompt(`${nom_jugador2} ingresa tu mano`)

        if (mano_jugador1 === mano_jugador2) {
            alert("Empate, jueguen otra mano")

        } else if ((mano_jugador1 === "piedra" && mano_jugador2 === "tijera") ||
                (mano_jugador1 === "papel" && mano_jugador2 === "piedra") || 
                (mano_jugador1 === "tijera" && mano_jugador2 === "papel")) {
            alert("Gana jugador 1")
            
        } else {
            alert("Gana jugador 2")
        }

    } while (mano_jugador1 === mano_jugador2)
}

/* ---------------------------------------------------------------------------------- */

function ejercicio14() {
    let numPisos = 5;
    for (let i = 0; i < numPisos; i++) {
        let piso = '';
        for (let j = 1; j < numPisos - i; j++) {
            piso = piso + ' ';
        }

        for (let j = 0; j < i + 1; j++) {
            piso = piso + ' * ';
        }
        console.log(piso);
    }
}

/* ---------------------------------------------------------------------------------- */

function ejercicio15() {
    let numPisos = 5
    for (let i = 0; i < numPisos; i++) {
        let piso = ''
        for (let j = 0; j < i; j++) {
            piso = piso + ' '
        }

        for (let j = i; j < numPisos; j++) {
            piso = piso + ' * '
        }
        console.log(piso)
    }
}

/* ---------------------------------------------------------------------------------- */

function ejercicio16() {

    let arr = []
    let cant_elementos = 10
    let ordenado = false

    for (let i = 0; i < cant_elementos; i++) {
        let n_random = Math.floor(Math.random() * 100) + 1
        arr.find(element => element === n_random) ? i-- : arr.push(n_random)
    }

    function met_burbuja(arr_ordenado) {
        let cont = 0
        while (!(ordenado)) {

            let cambios = 0
            cont =+ 1
            for (let i = 0; i < (cant_elementos - cont); i++) {
                if (arr_ordenado[i] > arr_ordenado[i + 1]) {
                    [arr_ordenado[i], arr_ordenado[i + 1]] = [arr_ordenado[i + 1], arr_ordenado[i]]
                    cambios++
                }
            }
            if (cambios === 0) {
                ordenado = true
            }
        }
        return arr_ordenado
    }

    console.log(...met_burbuja(arr))
}