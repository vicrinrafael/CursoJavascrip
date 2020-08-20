function variables() {
    
    //var, variables globales
    var saludo ="Hola Rafa"
    if (saludo){
        var saludo = "Hola"
        console.log(saludo)
    }
    console.log(saludo)
    //let, variables limitadas al alcance  del bloque donde se definen
    let nombre = "Rafa"
    if(nombre){
        let nombre="Antonio"
        console.log(nombre)
    }
    console.log(nombre)
    //const, variables inmutables 
    const PI =3.1416
    console.log(PI)
}
variables()