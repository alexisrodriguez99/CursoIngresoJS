function mostrar()
{

	var contador=0;
	var numeroMayor=0;
	var numeroMenor=0;
	var numero=0;
	// declarar variables
	
	var respuesta='si';
	

	while(respuesta!='no')
	{
		numero=prompt("elija un numero, sin miedo, usted puede GANBARUUUUU");
		numero=parseInt(numero);
		if (contador==0)
		{
			numeroMayor=numero;
			numeroMenor=numero;
		}
		else if(numeroMayor<numero)
		{
			numeroMayor=numero;
		}
		else if(numeroMenor>numero)
		{
			numeroMenor=numero;
		}
		respuesta=prompt("si ya no quiere seguir siendo una GANBARU, por favor escriba 'no' ");
		contador=contador+1;
	
	}
	document.getElementById("maximo").value=numeroMayor;
	document.getElementById("minimo").value=numeroMenor;




}//FIN DE LA FUNCIÓN