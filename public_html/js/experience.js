// Obtener el año de comienzo
var comienzo = 2018;

// Obtener el año actual
var actual = new Date().getFullYear();

// Calcular años de experiencia
var experiencia = actual - comienzo;

// Mostrar la edad en el div con id "experience-time"
document.getElementById("experience-time").innerHTML = experiencia + " AÑOS DE EXPERIENCIA";