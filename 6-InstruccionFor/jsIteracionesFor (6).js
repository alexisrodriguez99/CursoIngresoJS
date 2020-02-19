function mostrar()
{
var id;
var numero;
numero=prompt("Ingrese un numero");
numero=parseInt(numero);
for(id=1;id<=numero;id++)
{
    var par;
    par=id%2;
    if(par==0)
    {   
        var cantidadPar=0;
        cantidadPar=1+cantidadPar;
        alert("Los numero pares son: "+id);
        if(id=numero)
        {
            alert("La canatidad de numeros pares son: "+cantidadPar);
        }
    }

}




}//FIN DE LA FUNCIÓN