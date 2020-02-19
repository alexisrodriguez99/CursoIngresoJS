function mostrar()
{
var id;
var respuesta;
var numero;
var acumulador=0;
for(id=1;id<99;id++)
{
    numero=prompt("Ingrese un numero");
    numero=parseInt(numero);
    
    acumulador=acumulador+numero;
    respuesta=prompt("Si desea continuar escriba 'si', caso contrario escriba otra cosa");
    if(respuesta!="si")
    {
        alert("La suma de los numeros es: "+acumulador);
        alert("El promedio de los numeros es: "+(acumulador/id));
        break;
    }

}



}//FIN DE LA FUNCIÓN