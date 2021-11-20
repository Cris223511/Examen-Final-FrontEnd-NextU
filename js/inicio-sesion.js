function limpiarErrores(){
    var errores = document.getElementsByClassName("error");
    for(var i = 0; i < errores.length; i++){
      errores[i].innerHTML = "";
    }
}

function validarInicioSesion(formulario){

  limpiarErrores();

  if (formulario.email.value == ""){
    document.getElementById("errorEmail").innerHTML = "Este campo es obligatorio";
  }

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)) {
      document.getElementById("errorEmail").innerText = "Porfavor, ingrese un correo electrónico válido.";
      formulario.email.focus();
      return false;
    }

  if (formulario.contrasena.value.trim().length == 0) {
    document.getElementById("errorContrasena").innerText = "Este campo es obligatorio.";
    formulario.contrasena.focus();
    return false;
  }

  if (formulario.contrasena.value.trim().length < 6) {
    document.getElementById("errorContrasena").innerText = "La contraseña no puede contener menos de 6 carecteres.";
    formulario.contrasena.focus();
    return false;
  }

  alert("Sesión iniciada correctamente.");
  
    return true;
}