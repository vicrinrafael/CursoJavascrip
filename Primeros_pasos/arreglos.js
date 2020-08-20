
Nombre= "Antonio"
var permitido= "usuario Perimitido"
var funsion= acceso=> acceso 
var objeto = {
Estudiante : true,
TipoSanguineo : "A+" 
}


var miArreglo = [
    "Rafael","Masculino",1996,true,["otroArreglo",Nombre,"Mexicano"],funsion(permitido),objeto //Un arreglo adentro de otro arreglo
]


console.log(miArreglo[4][1])// Seleccionar un elemento de un arreglo que esta dentro de otro elemento
console.log(miArreglo[5])// Imprimir una funsion adentro de un arreglo
console.log(miArreglo[6].Estudiante)// Imprimir un elemento de un ojeto adentro de un areglo
