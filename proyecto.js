var grupoTarjetas = ["🐻", "🦄", "🐃", "🍤", "🐘", "🦊", "🦐", "🐵"];

var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

function barajaTarjetas(){

    var mesa = document.querySelector("#mesa");

    mesa.innerHTML = "";
    
    grupoTarjetas.forEach(function(elemento){
        
        var tarjeta = document.createElement("div");
        
        tarjeta.innerHTML = 
        "<div class='cartas_all'>" +
        "<div class='one_carta'>" +
        elemento + 
        "</div>" +
        "</div>";
        
        mesa.appendChild(tarjeta);
    });
}

barajaTarjetas();