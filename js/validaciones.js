window.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("formulario");
    var nombreInput = document.getElementById("nombre");
    var emailInput = document.getElementById("email");
    var telefonoInput = document.getElementById("telefono");
  
    form.addEventListener("submit", function (event) {
      var nombreValue = nombreInput.value.trim();
      var emailValue = emailInput.value.trim();
      var telefonoValue = telefonoInput.value.trim();
  
      // Validación del nombre
      if (nombreValue.length < 3) {
        alert("El nombre es demasiado corto. Debe tener al menos 3 caracteres.");
        event.preventDefault();
        return;
      }
      if (nombreValue.length > 20) {
        alert("El nombre es demasiado largo. Debe tener como máximo 20 caracteres.");
        event.preventDefault();
        return;
      }
  
      // Validación del correo electrónico
      if (!emailValue.includes("@") || !emailValue.includes(".")) {
        alert("El correo electrónico no es válido. Asegúrate de incluir '@' y '.'.");
        event.preventDefault();
        return;
      }
  
      // Validación del teléfono
      if (telefonoValue.length !== 9 || telefonoValue.charAt(0) !== "9") {
        alert("El número de teléfono no es válido. Debe empezar con '9' y tener 9 dígitos.");
        event.preventDefault();
        return;
      }
      alert("Mensaje enviado");
    });
  });