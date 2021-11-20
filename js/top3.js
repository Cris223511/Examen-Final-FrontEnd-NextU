$(document).ready(function(){

    $.getJSON("json/datos.json", function(data){
        $.each(data.canciones, function(){
            if(this['reproducciones'] > 60){
            $("#tabla").append(
                '<tr>' + 
                  '<td><span class="nombre-cancion">'+ this['nombre'] +'</span></td>' +
                  '<td><audio class="p-2" src="canciones/'+ this['ruta'] + '" controls></audio></td>' +
                '</tr>'
            );
        }
        });
    });
});