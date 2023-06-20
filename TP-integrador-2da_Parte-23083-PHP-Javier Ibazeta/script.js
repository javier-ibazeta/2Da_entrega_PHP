function formCompras() {
    
    // dimensiones de la nueva ventana
    var tamaño = "width=1300,height=600";
    
    // Abre la nueva ventana y la ubica encima de la ventana actual
    window.open("compra.html", "_blank", tamaño);
  }

  function funcResumen(){
    let totpagar;
    let descuento;
    const val_ticket = 200;
 
    const cant = parseInt(document.getElementById("cantidad").value.trim());
    
    if (Number.isInteger(cant) && cant != 0) {
                
      // si el valor ingresado como cantidad de pasajes es nro entero y distinto de cero avanza        
      
      const op = parseInt(document.getElementById("opciones").value);
      
      if (op == 1){ 
        
        descuento = parseFloat(val_ticket * cant * 0.8 )
        totpagar = (val_ticket * cant) - descuento
        document.getElementById("precio").value = "Total a pagar en $: "+totpagar; 
        
        
      }else if (op == 2){
        
        descuento = parseFloat(val_ticket * cant * 0.5 )
        totpagar = (val_ticket * cant) - descuento
        document.getElementById("precio").value = "Total a pagar en $: "+totpagar; 
        
        
      }else { 
        
        descuento = parseFloat(val_ticket * cant * 0.15 )
        totpagar = (val_ticket * cant) - descuento
        document.getElementById("precio").value = "Total a pagar en $: "+totpagar; 
        
        
      }    
    }else{
      alert("La cantidad tiene que ser un valor numérico distinto de cero !!!.");
      return;

    }
      
  } 
  




  function cargaDatos(){
    document.getElementById('#nombre').focus();
  }