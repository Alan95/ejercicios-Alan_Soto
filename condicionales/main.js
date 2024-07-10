/* Ejercicio 1 */

let primer_numero = prompt("Ingresa el primer número")
let segundo_numero = prompt("Ingresa el segundo número")
let tercer_numero = null

if (primer_numero > segundo_numero) {
    console.log("El primer número (" + primer_numero + ") es mayor que el segundo (" + segundo_numero + ")")
} else {
    console.log("El primer número (" + primer_numero + ") NO es mayor que el segundo (" + segundo_numero + ")")
}

/* Ejercicio 2 */

primer_numero = prompt("Ingresa un número")
primer_numero = prompt("Ingresa otro número")

if (numeroA === numeroB) {
    console.log("Los números ingresados son iguales.")
} else {
    console.log("Los números ingresados son diferentes.")
}

/* Ejercicio 3 */

primer_numero = prompt("Ingresa el primer número")
segundo_numero = prompt("Ingresa el segundo número")

if (primer_numero !== segundo_numero) {
    if (primer_numero > segundo_numero) {
        console.log("El primer número (" + primer_numero + ") es el más grande")
    } else {
        console.log("El segundo número (" + segundo_numero + ") es el más grande")
    }
} else {
    console.log("Los números son iguales (" + primer_numero + ")")
}

/* Ejercicio 4 */

primer_numero = prompt("Ingresa el primer número")
segundo_numero = prompt("Ingresa el segundo número")
tercer_numero = prompt("Ingresa el tercer número")

if (primer_numero > segundo_numero) {
    if (segundo_numero > tercer_numero) {
        console.log("El tercer número es el más chico (" + tercer_numero + ")")
    } else {
        console.log("El segundo número es el más chico (" + segundo_numero + ")")
    }
} else if (primer_numero < tercer_numero) {
    console.log("El primer número es el más chico (" + primer_numero + ")")
} else {
    console.log("El tercer número es el más chico (" + tercer_numero + ")")
}

/* Ejercicio 5 */

/**
 * Constructor creates a new Person object and prompts the user to enter their name, age, and height.
 * @return {Object} The newly created Person object with properties 'nombre', 'edad', and 'altura'.
 */
function Persona(text) {
    alert(text)
    this.nombre = prompt("Ingresa tu nombre")
    this.edad = parseInt(prompt("Ingresa tu edad"))
    this.altura = parseInt(prompt("Ingresa tu altura en cm"))
    Persona.prototype._count++

    return this
}

Persona.prototype._count = 1

let persona1 = new Persona(`Ingresa los datos de la persona N°${Persona.prototype._count}`)
let persona2 = new Persona(`Ingresa los datos de la persona N°${Persona.prototype._count}`)

if (persona1.edad !== persona2.edad) {
    if (persona1.edad > persona2.edad) {
        console.log(persona1.nombre + " tiene la mayor edad")
    } else {
        console.log(persona2.nombre + " tiene la mayor edad")
    }
} else {
    console.log("Las personas tienen la misma edad");
}
if (persona1.altura !== persona2.altura) {
    if (persona1.altura > persona2.altura) {
        console.log(persona1.nombre + " tiene la mayor altura")
    } else {
        console.log(persona2.nombre + " tiene la mayor altura")
    }
} else {
    console.log("Las personas tienen la misma altura");
}

/* Ejercicio 6 */
// Use el constructor creado en el ejercicio anterior

let conductor = new Persona("ingrese los datos del conductor")
conductor.vision = parseInt(prompt("Ingresa su número de visión"))
conductor.puede_conducir = null

if ((conductor.vision >= 8) && (conductor.edad >= 18) && (conductor.altura >= 150)) {
    conductor.puede_conducir = true
    console.log("Puede conducir")
} else {
    conductor.puede_conducir = false
    console.log("No puede conducir")
}

/* Ejercicio 7 */

function comprar_entrada() {
    venta_entrada = confirm("Desea comprar una entrada? 1000 USD")

    if (venta_entrada) {
        saldo = parseInt(prompt("Ingresa tu saldo"))

        if (saldo >= precio_entrada) {
            alert("Compra exitosa, saldo restante: " + (saldo - precio_entrada))
            alert("BIENVENIDO")
        } else {
            alert("Saldo insuficiente, Hasta pronto")
        }
    } else {
        alert("Hasta pronto")
    }
}

alert("FIESTA")

let nombre_clave = "alan" // Todo nombre igual otorga acceso VIP
let precio_entrada = 1000
let nombre_cliente = prompt("Ingresa tu nombre")
let pase = prompt("Ingresa tu pase").toLowerCase()
let entrada = prompt("Posee entrada? (si/no)").toLowerCase()

if ((nombre_clave === nombre_cliente) || (pase === "vip")) {
    alert("BIENVENIDO")

} else if (entrada === "si" || entrada === "s" || entrada === "true") {
    utilizar_entrada = confirm("¿Desea utilizar su entrada?")

    if (utilizar_entrada) {
        alert("BIENVENIDO")
    
    } else {
        comprar_entrada()
    }
} else {
    comprar_entrada()
}

/* Ejercicio 8 */

let numeroIncognita = Math.floor(Math.random() * 10) + 1
let gano = null

for (let i = 0; i < 3; i++) {
    numeroIngresado = parseInt(prompt("Ingresa un número"))

    if (numeroIngresado === numeroIncognita) {
        gano = true
        alert("Ganaste, haz adivinado el número")
        break

    } else if (numeroIngresado > numeroIncognita) {
        alert("El número es menor")

    } else {
        alert("El número es mayor")
    }
}
if (!gano) {
    alert("Perdiste, vuelve a intentarlo. El número era " + numeroIncognita)
}

/* Ejercicio 9 */

let edad = parseInt(prompt("Ingresa tu edad"))

if (edad <= 12) {
    alert("eres un infante")
} else if (edad <= 18) {
    alert("eres un adolescente")
} else if (edad <= 45) {
    alert("eres un mayor joven")
} else if (edad <= 100) {
    alert("eres un anciano")
} else {
    alert("Tiene usted esa edad???")
}

/* Ejercicio 10 */

let jugador1 = prompt("JUGADOR 1: Elige: piedra, papel o tijera").toLowerCase()
let jugador2 = prompt("JUGADOR 2: Elige: piedra, papel o tijera").toLowerCase()

if (jugador1 === jugador2) {
    alert("Empate")
} else if ((jugador1 === "piedra" && jugador2 === "tijera") || (jugador1 === "papel" && jugador2 === "piedra") || (jugador1 === "tijera" && jugador2 === "papel")) {
    alert("Gana jugador 1")
} else {
    alert("Gana jugador 2")
}

/* Ejercicio 11 */

let color_elegido = prompt("Ingresa un color").toLowerCase()

switch (color_elegido) {
    case "blanco":
    case "negro":
        alert("Falta de color")
        break
    case "verde":
        alert("El color de la naturaleza")
        break
    case "azul":
        alert("El color del agua")
        break
    case "amarillo":
        alert("El color del sol")
        break
    case "rojo":
        alert("El color del fuego")
        break
    case "marrón":
        alert("El color de la tierra")
    default:
        alert("Excelente elección, no lo teníamos pensado")
        break
}

/* Ejercicio 12 */

let numeroA = parseInt(prompt("Ingresa un número"))
let numeroB = parseInt(prompt("Ingresa otro número"))
let operacion = prompt("Ingresa la operación (suma, resta, multiplicación, división)").toLowerCase()

if (numeroB === 0 && operacion === "división") {
    alert("No se puede dividir por 0")
} else {
    switch (numeroA, numeroB,operacion) {
        case "suma":
            alert("Resultado: " + (numeroA + numeroB))
            break
        case "resta":
            alert("Resultado: " + (numeroA - numeroB))
            break
        case "multiplicación":
            alert("Resultado: " + (numeroA * numeroB))
            break
        case "división":
            alert("Resultado: " + (numeroA / numeroB))
            break
        default:
            alert("Operación invalida")
            break
    }
}

/* ejercicio 13 */

alert("Ingresa tus datos!!")

let nombre = prompt("Ingresa tu nombre completo")
let apellido = prompt("Ingresa tu apellido")
let f_nacimiento = prompt("Ingresa tu fecha de nacimiento. (dd/mm/aaaa)")
let n_dni = parseInt(prompt("Ingresa tu dni"))
let registro = {}
let f_registro = new Date()

let confirmacion = confirm("Los datos ingresados son correctos?\n" + "Nombre: " + nombre + "\nApellido: " + apellido + "\nFecha de nacimiento: " + f_nacimiento + "\nDNI: " + n_dni)

if (confirmacion) {

    registro = {
        nombre: nombre,
        apellido: apellido,
        f_nacimiento: f_nacimiento,
        n_dni: n_dni
    }
    console.table(registro)
    alert("Registro exitoso!!")

} else {
    alert("Datos incorrectos, vuelve a intentarlo EN 1 MES")
}