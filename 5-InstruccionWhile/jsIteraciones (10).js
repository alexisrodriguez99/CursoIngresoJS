function mostrar()
{

	var contadorPositivo=0;
	var contadorCero=0;
	var contadoNegativo=0;
	var numero=0;
	var negativo=0;
	var positivo=0;
	var diferencia;
	var promedioPositivos=0;
	var promedioNegativos=0;
	var resto=0;
	var parPositivo=0;
	var parNegativo=0;
	var pares=0;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		if(numero>0)
		{
			positivo=numero+positivo;
			contadorPositivo=contadorPositivo+1;
			resto=numero%2
			if(resto==0)
			{
				parPositivo=parPositivo+1;
				
			}
			
		
		}
		else if(numero<0)
		{
			negativo=numero+negativo;
			contadoNegativo=contadoNegativo+1;
			resto=numero%2;
			if(resto==0);
			{
				parNegativo=parNegativo+1;
			}
		}
		else
		{
			contadorCero=contadorCero+1;
		}
		respuesta=prompt("Si ya no desea poner mas numeros escriba 'no', caso contrario escriba cualquier cosa");
		
	}
	diferencia=positivo-negativo;
	promedioPositivos=positivo/contadorPositivo;
	promedioNegativos=negativo/contadoNegativo;
	pares=parPositivo+parNegativo;
	
	document.write("La diferencia entre positivos y negativos es: "+diferencia+"<br/>");
	document.write("La suma de los negativos es: "+negativo+"<br/>");
	document.write("La suma de los positivos es: "+positivo+"<br/>");
	document.write("La cantidad de positivos es: "+contadorPositivo+"<br/>");
	document.write("La cantidad de negativos es: "+contadoNegativo+"<br/>");
	document.write("La cantidad de ceros es: "+contadorCero+"<br/>");
	document.write("La cantidad del promedio de los numeros positivos es: "+promedioPositivos+"<br/>");
	document.write("La cantidad del promedio de los numeros negativos es: "+promedioNegativos+"<br/>");
	document.write("La cantidad de numeros pares es: "+pares);



}//FIN DE LA FUNCIÓN