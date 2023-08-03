function validarEdad(edad) {
    return edad > 18;
  }
  
  function mostrarMensaje() {
    const edadUsuario = parseInt(prompt('Ingrese su edad:'));
  
    if (isNaN(edadUsuario)) {
      alert('Error: Ingrese un valor numérico válido.');
      return;
    }
  
    if (validarEdad(edadUsuario)) {
      alert('Bienvenido!!!');
    } else {
      alert('Usted es menor de 18 años. No puede ingresar.');
    }
  }
  
  mostrarMensaje();
  
  function reiniciarPagina() {
    window.location.reload();
  }