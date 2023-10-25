function calcularPorcentaje() {
  // Obtener el valor ingresado en el campo de entrada
  let precio = parseFloat(document.getElementById("precio").value);
  // Verificar si se ingresó un número válido
  if (!isNaN(precio)) {
    // Calcular el 30% del precio
    var porcentaje = precio * 0.15;
    let precioTT = precio + porcentaje;
    document.getElementById("resultado").innerHTML = precioTT;
  } else {
    document.getElementById("resultado").innerHTML =
      "Ingresa un valor numérico válido.";
  }
}
