/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var lamparas;
     var marca;
     var precioConDescuento;
     var precioLampara;
     marca=document.getElementById("Marca").value;   
     lamparas=document.getElementById("Cantidad").value;
     lamparas=parseInt(lamparas);
     precioLampara=lamparas*35;
    switch(marca)
    {
        case "ArgentinaLuz":
            {
                if (lamparas==3)
                    {   
                    
                    precioConDescuento=precioLampara-precioLampara*0.15;
                    if(precioDescuento>120)
                    {
                        precioConDescuento=precioDescuento*0.10;
                        document.getElementById("precioDescuento").value=precioConDescuento;
                    }
                    else
                    {
                        document.getElementById("precioDescuento").value=precioConDescuento;
                    }
                
                    }
                else if(lamparas==4)
                    {
                    precioConDescuento=precioLampara-precioLampara*0.25;
                    if(precioDescuento>120)
                    {
                        precioConDescuento=precioConDescuento*0.10;
                        document.getElementById("precioDescuento").value=precioConDescuento;
                    }
                    else
                    {
                        document.getElementById("precioDescuento").value=precioConDescuento;
                    }
                    }
                else if(lamparas==5)
                    {
                        precioConDescuento=precioLampara-precioLampara*0.40;
                        if(precioConDescuento>120)
                        {
                            document.getElementById("precioDescuento").value=precioConDescuento;
                        }
                        else
                        {
                            document.getElementById("precioDescuento").value=precioConDescuento;
                        }
                    }
                else // me falta poner los casos en el que hay 1 o 2 lamparas xs
                {
                    precioConDescuento=precioLampara-precioLampara*0.5;
                    if(precioConDescuento>120)
                    {
                        alert("IIBB Usted pago "+ precioConDescuento*0.1);
                    }
                    else
                    {
                        document.getElementById("precioDescuento").value=precioConDescuento;
                    }
                }
            }
        case ("FelipeLamparas"):
            {
                if(lamparas==3)
                {
                    precioConDescuento=precioLampara-precioLampara*0.10;
                    if(precioDescuento>120)
                   {
                    document.getElementById("precioDescuento").value=precioConDescuento;
                   }
                    else
                    {
                        document.getElementById("precioDescuento").value=precioConDescuento;
                    }
                }
                else if(lamparas==4)
                    {
                    precioConDescuento=precioLampara-precioLampara*0.25;
                    if(precioDescuento>120)
                    {
                        precioConDescuento=precioConDescuento*0.10;
                        document.getElementById("precioDescuento").value=precioConDescuento;
                    }
                    else
                    {
                        document.getElementById("precioDescuento").value=precioConDescuento;
                    }
                    }
                else if(lamparas==5)
                    {
                        precioConDescuento=precioLampara-precioLampara*0.30;
                        if(precioConDescuento>120)
                        {
                            document.getElementById("precioDescuento").value=precioConDescuento;
                        }
                        else
                        {
                            document.getElementById("precioDescuento").value=precioConDescuento;
                        }
                    }
                    else
                {
                    precioConDescuento=precioLampara-precioLampara*0.5;
                    if(precioConDescuento>120)
                    {
                        alert("IIBB Usted pago "+ precioConDescuento*0.1);
                    }
                    else
                    {
                        document.getElementById("precioDescuento").value=precioConDescuento;
                    }
                }
            }
         case ("JeLuz"):
             {
                if(lamparas==3)
                {
                    precioConDescuento=precioLampara-precioLampara*0.5;
                    if(precioDescuento>120)
                    {
                        document.getElementById("precioDescuento").value=precioConDescuento;
                    }
                    else
                    {
                        document.getElementById("precioDescuento").value=precioConDescuento;
                    }
                }
                else if(lamparas==4)
                    {
                        precioConDescuento=precioLampara-precioLampara*0.20;
                        if(precioDescuento>120)
                        {
                             precioConDescuento=precioConDescuento*0.10;
                            document.getElementById("precioDescuento").value=precioConDescuento;
                        }
                        else
                        {
                            document.getElementById("precioDescuento").value=precioConDescuento;
                        }
                    }
                else if(lamparas==5)
                    {
                        precioConDescuento=precioLampara-precioLampara*0.30;
                        if(precioConDescuento>120)
                        {
                            document.getElementById("precioDescuento").value=precioConDescuento;
                        }
                        else
                        {
                            document.getElementById("precioDescuento").value=precioConDescuento;
                        }
                     }
                     else
                     {
                         precioConDescuento=precioLampara-precioLampara*0.5;
                         if(precioConDescuento>120)
                         {
                             alert("IIBB Usted pago "+ precioConDescuento*0.1);
                         }
                         else
                         {
                             document.getElementById("precioDescuento").value=precioConDescuento;
                         }
                     }
        
            }
        case ("HazIluminacion"):
            {
                if(lamparas==3)
                {
                    precioConDescuento=precioLampara-precioLampara*0.5;
                    if(precioDescuento>120)
                    {
                        document.getElementById("precioDescuento").value=precioConDescuento;
                    }
                    else
                    {
                        document.getElementById("precioDescuento").value=precioConDescuento;
                    }
                }
                else if(lamparas==4)
                    {
                        precioConDescuento=precioLampara-precioLampara*0.20;
                        if(precioDescuento>120)
                        {
                             precioConDescuento=precioConDescuento*0.10;
                            document.getElementById("precioDescuento").value=precioConDescuento;
                        }
                        else
                        {
                            document.getElementById("precioDescuento").value=precioConDescuento;
                        }
                    }
                else if(lamparas==5)
                    {
                        precioConDescuento=precioLampara-precioLampara*0.30;
                        if(precioConDescuento>120)
                        {
                            document.getElementById("precioDescuento").value=precioConDescuento;
                        }
                        else
                        {
                            document.getElementById("precioDescuento").value=precioConDescuento;
                        }
                     }
                     else
                     {
                         precioConDescuento=precioLampara-precioLampara*0.5;
                         if(precioConDescuento>120)
                         {
                             alert("IIBB Usted pago "+ precioConDescuento*0.1);
                         }
                         else
                         {
                             document.getElementById("precioDescuento").value=precioConDescuento;
                         }
                     }
            }
        case ("Osram"):
            {
                if(lamparas==3)
                {
                    precioConDescuento=precioLampara-precioLampara*0.5;
                    if(precioDescuento>120)
                    {
                        document.getElementById("precioDescuento").value=precioConDescuento;
                    }
                    else
                    {
                        document.getElementById("precioDescuento").value=precioConDescuento;
                    }
                }
                else if(lamparas==4)
                    {
                        precioConDescuento=precioLampara-precioLampara*0.20;
                        if(precioDescuento>120)
                        {
                             precioConDescuento=precioConDescuento*0.10;
                            document.getElementById("precioDescuento").value=precioConDescuento;
                        }
                        else
                        {
                            document.getElementById("precioDescuento").value=precioConDescuento;
                        }
                    }
                else if(lamparas==5)
                    {
                        precioConDescuento=precioLampara-precioLampara*0.30;
                        if(precioConDescuento>120)
                        {
                            document.getElementById("precioDescuento").value=precioConDescuento;
                        }
                        else
                        {
                            document.getElementById("precioDescuento").value=precioConDescuento;
                        }
                     }
                     else 
                     {
                         precioConDescuento=precioLampara-precioLampara*0.5;
                         if(precioConDescuento>120)
                         {
                             alert("IIBB Usted pago "+ precioConDescuento*0.1);
                         }
                         else
                         {
                             document.getElementById("precioDescuento").value=precioConDescuento;
                         }
                     }
            }
}
}