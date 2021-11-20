$(document).ready(function(){

    $.getJSON("json/datos.json", function(data){
        $.each(data.canciones, function(){

            $("#canciones").append(
                  '<div id="' + this['nombre'] + '" class="col-12 col-md-4 mt-4">' +
                    '<div class="card">' +
                      '<img class="card-img-top" src="imagenes/icon_' + this['icono'] + '.svg" />' +
                        '<div class="card-body">' +
                          '<h5 class="card-title text-center">'+ this['nombre'] + '</h5>' +
                          '<audio class="p-1" src="canciones/'+ this['ruta'] + '" controls></audio>' +
                        '</div>' +
                    '</div>' +
                  '</div>'
            );
        });
    });
});