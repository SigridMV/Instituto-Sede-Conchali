document.addEventListener("DOMContentLoaded", function () {
  // Obtener fecha y hora actual
  var fechaHoraActual = new Date();
  var fecha = fechaHoraActual.toLocaleDateString();
  var hora = fechaHoraActual.toLocaleTimeString();

  // Mostrar en el documento
  document.getElementById("fecha").innerText = fecha;
  document.getElementById("hora").innerText = hora;
});
