
var user= "Espinoza"
var a = 15
var b = 5




var miObjeto = {
    //debe llevar una clave y un valor
    nombre : "Rafael",
    edad :20,
    Nacionalidad : "Mexicana",
    Activo: true,
    texto :`usuario"${user}`,
    miFuncion : (a,b) => a+b, 
    otroObjeto : {
        nombre: "Antonio",
        Sexo: "Masculino",
        fecha: new Date()
    }

}

var {nombre}= miObjeto //Destructuraciòn de objetos


console.log(miObjeto.miFuncion(a,b))
console.log(miObjeto.otroObjeto.Sexo)
console.log(miObjeto.otroObjeto.fecha.getHours())