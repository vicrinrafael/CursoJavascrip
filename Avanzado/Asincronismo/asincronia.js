setTimeout(()=> console.log("Hola Mundo"),1000)

for (let index =1; index< 999; index++){
    console.log("Ya termino el bucle")
}
/*Se ejucutura el timeout despues de que el for termine por que llava primero realiza
 peticiones HTTP, posterior eventos de tiempoy por ultimo DOM*/