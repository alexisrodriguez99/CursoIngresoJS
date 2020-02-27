function mostrar()
{
var marca;
var peso;
var temperatura;
var respuesta;
var contPar=0;
var pesoMayor;
var contador=0;
var marcaMayor;
var temperaturaNeg=0;
var sumaPeso=0;
var pesoMenor;

do
{
marca=prompt("ingrese una marca");
peso=parseInt(prompt("ingrese el peso"));
while(isNaN(peso) || peso<1 || peso>100)
{
    peso=parseInt(prompt("Peso incorrecto. Ingrese el peso"));
}

if(contador==0 || peso>pesoMayor)
{
    pesoMayor=peso;
    marcaMayor=marca;
}
if(contador==0 || peso<pesoMenor)
{
    pesoMenor=peso;
}

temperatura=parseInt(prompt("Ingrese la temperatura"));
while(isNaN(temperatura) || temperatura<-30 || temperatura>30)
{
    temperatura=parseInt(prompt("Esa temperatura no es valida. Ingrese la temperatura"));
}
if(temperatura%2==0)
{
    contPar++
}
if(temperatura>0)
{
    temperaturaNeg++
}

contador=contador+1
sumaPeso=sumaPeso+peso;
respuesta=prompt("Si desea continuar escriba 'si'");
}while(respuesta=="si");


document.write("a) la cantidad de temperatura pares es de "+contPar)
document.write("b) la marca del producto mas pesado es "+marcaMayor+" y su peso es "+pesoMayor);
document.write("c) la cantidad de productos que se conservan a menos de 0 grados son "+temperaturaNeg);
document.write("d) el promedio del peso de todos los productos es "+sumaPeso/contador);
document.write("f) el peso maximo y minimo son "+pesoMayor+" "+pesoMenor+" respectivamente")
}

