function mostrar()
{
var numero;
var letra;
var respuesta;
var contadorPar=0;
var contadorImpar=0;
var contadorCeros=0;
var contador=0;
var sumaNeg=0;
var sumaPos=0;
var contadorPositivos=0;
var maximo;
var minimo;
var letraMax;
var letraMin;
var flag=0;
var promedio;

do{
numero=parseInt(prompt("Ingrese un numero"));
while(isNaN(numero) || numero<=-100 || numero>=100)
{
    numero=parseInt(prompt("Numero invalido. Ingrese un numero"));
}
letra=prompt("Ingrese una letra");
if(contador==0 || numero>maximo)
{
    maximo=numero;
    letraMax=letra;
}
if(contador==0 || numero<minimo)
{
    minimo=numero;
    letraMin=letra;
}
if(numero%2==0)
{
    contadorPar++;
}
else if(numero%2==1)
{
    contadorImpar++;
}
else if(numero==0)
{
    contadorCeros;
}
if(numero>=0)
{
    sumaPos=sumaPos+numero;
    contadorPositivos++;
    flag=1;
}
else 
{
    sumaNeg=sumaNeg+numero;
}

contador=contador+1;
respuesta=prompt("Si quiere seguir escriba 'si'");
if(flag=0)
{
    promedio=0;
}
else
{
    promedio=sumaPos/contadorPositivos
}
}while(respuesta=="si");
alert("el promedio de los numeros positivos es "+promedio);
alert("la suma de todos los numeros negativos es "+sumaNeg);
alert("la cantidad de numero pares es "+contadorPar);
alert("la cantidad de numeros impares "+contadorImpar);
alert("la cantidad de ceros es "+contadorCeros);
alert("el numero maximo es "+maximo+" y su letra es "+letraMax);
alert("el numero minimo es "+minimo+" y su letra es "+letraMin);
}
