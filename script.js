// Referencias de elementos
const verde = document.getElementById("verde");
const rojo = document.getElementById("rojo");

const codigoVerde = document.getElementById("codigoVerde");
const codigoRojo = document.getElementById("codigoRojo");

const colVerde = document.querySelector(".verde");
const colRoja = document.querySelector(".roja");

// Actualizar color verde dinámicamente
verde.addEventListener("input", () => {
  const valor = parseInt(verde.value).toString(16).padStart(2, "0");
  const color = `#00${valor}00`;
  colVerde.style.backgroundColor = color;
  codigoVerde.textContent = color.toUpperCase();
});

// Actualizar color rojo dinámicamente
rojo.addEventListener("input", () => {
  const valor = parseInt(rojo.value).toString(16).padStart(2, "0");
  const color = `#${valor}0000`;
  colRoja.style.backgroundColor = color;
  codigoRojo.textContent = color.toUpperCase();
});

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
  verde.dispatchEvent(new Event("input"));
  rojo.dispatchEvent(new Event("input"));
});
