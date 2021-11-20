function limpiarErrores(){
    var errores = document.getElementsByClassName("error");
    for(var i = 0; i < errores.length; i++){
      errores[i].innerHTML = "";
    }
}

function validarRegistro(formulario) {

    limpiarErrores();
  
    if (formulario.email.value == "") {
      document.getElementById("errorEmail").innerText = "Este campo es obligatorio.";
      return false;
    }

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)) {
      document.getElementById("errorEmail").innerText = "Este campo es inválido, debe ser un correo electrónico.";
      formulario.email.focus();
      return false;
    }
  
    if (formulario.contrasena.value.trim().length == 0) {
      document.getElementById("errorContrasena").innerText = "Este campo es obligatorio.";
      formulario.contrasena.focus();
      return false;
    }
  
    if (formulario.contrasena.value.trim().length < 6) {
      document.getElementById("errorContrasena").innerText = "Este campo debe tener un mínimo de 6 caracteres.";
      formulario.contrasena.focus();
      return false;
    }
  
    if (formulario.contrasena.value != formulario.confirmacion.value) {
      document.getElementById("errorConfirmacion").innerText = "La contraseña ingresada no coincide.";
      formulario.confirmacion.focus();
      return false;
    }
  
    if (formulario.cancion.value == "") {
      document.getElementById("errorCancion").innerText = "Este campo es obligatorio.";
      return false;
    }
  
    if (formulario.edad.value == "") {
      document.getElementById("errorEdad").innerText = "Este campo es obligatorio.";
      return false;
    }
  
    if (!formulario.terminos.checked) {
      document.getElementById("errorTerminos").innerText = "Debe aceptar los términos y condiciones.";
      formulario.terminos.focus();
      return false;
    }
  
    alert("Datos enviados");
  
    return true;
}