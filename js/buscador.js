const listas = [    
    {
        "nombre": "vive",
        "ruta": "uno.mp3",
        "reproducciones": 10,
        "icono": 4
    },
    {
        "nombre": "invierno",
        "ruta": "dos.mp3",
        "reproducciones": 30,
        "icono": 1
    },
    {
        "nombre": "planeta",
        "ruta": "tres.mp3",
        "reproducciones": 20,
        "icono": 3
    },
    {
        "nombre": "suave",
        "ruta": "cuatro.mp3",
        "reproducciones": 80,
        "icono": 2
    },
    {
        "nombre": "contigo",
        "ruta": "cinco.mp3",
        "reproducciones": 50,
        "icono": 4
    },
    {
        "nombre": "alas",
        "ruta": "seis.mp3",
        "reproducciones": 70,
        "icono": 1
    },
    {
        "nombre": "verde",
        "ruta": "siete.mp3",
        "reproducciones": 60,
        "icono": 3
    },
    {
        "nombre": "nuevamente",
        "ruta": "ocho.mp3",
        "reproducciones": 90,
        "icono": 1
    },
    {
        "nombre": "hoy",
        "ruta": "nueve.mp3",
        "reproducciones": 40,
        "icono": 2
    }
]

const busqueda = document.querySelector('#busqueda');
const boton = document.querySelector('#boton');
const canciones = document.querySelector('#canciones');

const filtrar = ()=>{
    //console.log(busqueda.value);
    canciones.innerHTML = '';

    const texto = busqueda.value.toLowerCase();

    for(let lista of listas){
        let nombre = lista.nombre.toLowerCase();

        if(nombre.indexOf(texto) !== -1){
            $("#canciones").append(
                '<div id="' + `${lista.nombre}` + '" class="col-12 col-md-4 mt-4">' +
                  '<div class="card">' +
                    '<img class="card-img-top" src="imagenes/icon_' + `${lista.icono}` + '.svg" />' +
                      '<div class="card-body">' +
                        '<h5 class="card-title text-center">' + `${lista.nombre}` + '</h5>' +
                        '<audio class="p-1" src="canciones/' + `${lista.ruta}` + '" controls></audio>' +
                      '</div>' +
                  '</div>' +
                '</div>'
          );
        }
    }

    if(canciones.innerHTML === ''){
        canciones.innerHTML += `
            <li>La canción no fue encontrada.</li>
        `
    }

}

boton.addEventListener('click', filtrar);