function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero=0;
	
	var respuesta="si";
	while(respuesta=="si")
	{
		numero=prompt("elija un numero");
		numero=parseInt(numero);
		if(numero>0)
		{
			positivo=positivo+numero;
		}
		else if (numero<0) 
		{
			negativo=negativo*numero;
		}
		respuesta=prompt("si quiere seguir con las operacion escriba 'si', en caso contrario escriba cualqueir cosa");
		contador=contador+1
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN