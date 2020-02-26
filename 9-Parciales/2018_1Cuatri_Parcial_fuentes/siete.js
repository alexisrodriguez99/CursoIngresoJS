function mostrar()
{
var nota;
var sexo;
var contador=0;
var mayor;
var sexoMayor;
var menor;
var sexoMenor;
var contadorNota=0;
for(id=0;id<5;id++)
{
    
    nota=parseInt(prompt("Ingrese la nota"));
    
    while(nota<0 || nota>10)
    {
        nota=parseInt(prompt("NOTA invalida. Ingrese la nota"));
    }
    sexo=prompt("Ingrese el sexo, escribiendo solo 'f' o 'm'").toLowerCase();

    while(sexo!="f" && sexo!="m")
    {
        sexo=prompt("Sexo Incorrecto. Ingrese el sexo, escribiendo 'f' o 'm'").toLowerCase();
    }
    if(id==0 || nota>mayor)
    {
        mayor=nota;
        sexoMayor=sexo;
    }
    if(id==0 || nota<menor)
    {
        menor=nota;
        sexoMenor=sexo;
    }
    if(sexo=="m" && nota>=6)
    {
        contador++;
    }
    contadorNota=contador+nota;
}
alert("El promedio de las notas es "+contadorNota/5);
alert("La nota mas baja es "+menor+" y su sexo es "+sexoMenor);
alert("La cantidad de varones que su nota es mayor o igual a 6 es: "+contador);

}
