const express = require("express")
const calculadoraBackend = express()
const port = 3000

calculadoraBackend.use(express.static('static/front'))

calculadoraBackend.get("/hola", (req, res) => {
    res.send("Hola Calculadora")
})

const suma = ("/suma", (req, res) => {
    var sumando1 = Number(req.query.parametro1)
    var sumando2 = Number(req.query.parametro2)
    var sumacion = sumando1 + sumando2

    res.send(`${sumando1} + ${sumando2} = ${sumacion}`)
})

const resta = ("/resta", (req, res) => {
    var restando1 = Number(req.query.parametro1)
    var restando2 = Number(req.query.parametro2)
    var restacion = restando1 - restando2

    res.send(`${restando1} - ${restando2} = ${restacion}`)
})

const multi = ("/multi", (req, res) => {
    var multi1 = Number(req.query.parametro1)
    var multi2 = Number(req.query.parametro2)
    var multacion = multi1 * multi2

    res.send(`${multi1} x ${multi2} = ${multacion}`)
})

const divide = ("/divide", (req, res) => {
    var divide1 = Number(req.query.parametro1)
    var divide2 = Number(req.query.parametro2)
    var division = divide1 / divide2
    res.send(`${divide1} / ${divide2} = ${division}`)
})

const potencia = ("/potencia", (req, res) => {
    var base = Number(req.query.parametro1)
    var potenciador = Number(req.query.parametro2)
    var resultado = Math.pow(base, potenciador)

    res.send(`${base} ^ ${potenciador} = ${resultado}`)
})

calculadoraBackend.get("/suma", suma)
calculadoraBackend.get("/resta", resta)
calculadoraBackend.get("/multi", multi)
calculadoraBackend.get("/divide", divide)
calculadoraBackend.get("/potencia", potencia)


calculadoraBackend.listen(port, () => {
    console.log(`Calculadora escuchando en http://localhost:${port}`)
})
