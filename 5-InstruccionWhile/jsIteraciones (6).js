function mostrar()
{

	var contador=0;
	var acumulador=0;
	var suma=0;
	
	
	while(contador<5)
	{
		
		acumulador=prompt("elija un numero");
		acumulador=parseInt(acumulador);
		suma=suma+acumulador;
		contador=contador+1
	}



document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/5;

}//FIN DE LA FUNCIÓN