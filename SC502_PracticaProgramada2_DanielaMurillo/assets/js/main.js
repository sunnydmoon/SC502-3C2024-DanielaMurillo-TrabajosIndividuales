document.addEventListener("DOMContentLoaded", () => {

  // Ejercicio 1: Calculo de cargas sociales
  const btnCalcular = document.querySelector("#btnCalcular");
  const resultado = document.querySelector("#resultado");

  btnCalcular.addEventListener("click", () => {
    const salarioInput = document.querySelector("#salario").value;
    const salario = parseFloat(salarioInput);

    if (salarioInput === "" || salario <= 0) {
      resultado.style.display = "block";
      resultado.classList.replace("alert-info", "alert-danger");
      resultado.textContent = "Ingrese un salario válido.";
      return;
    }

    const cargasSociales = salario * 0.0934;

    let impuestoRenta = 0;
    if (salario > 941000 && salario <= 1381000) {
      impuestoRenta = (salario - 941000) * 0.10;
    } else if (salario > 1381000 && salario <= 2423000) {
      impuestoRenta = (salario - 1381000) * 0.15 + (1381000 - 941000) * 0.10;
    } else if (salario > 2423000) {
      impuestoRenta = (salario - 2423000) * 0.20 + (2423000 - 1381000) * 0.15 + (1381000 - 941000) * 0.10;
    }

    const salarioNeto = salario - cargasSociales - impuestoRenta;

    resultado.style.display = "block";
    resultado.classList.replace("alert-danger", "alert-info");
    resultado.innerHTML =
      "<b>Salario Bruto:</b> ₡" + salario.toFixed(2) + "<br>" +
      "<b>Cargas Sociales:</b> ₡" + cargasSociales.toFixed(2) + "<br>" +
      "<b>Impuesto Renta:</b> ₡" + impuestoRenta.toFixed(2) + "<br>" +
      "<b>Salario Neto:</b> ₡" + salarioNeto.toFixed(2);
  });


  // ===== EJERCICIO 2: CAMBIO DE CONTENIDO =====
  const btnCambiarTexto = document.querySelector("#btnCambiarTexto");
  const parrafo = document.querySelector("#parrafo");

  btnCambiarTexto.addEventListener("click", () => {
    parrafo.textContent = "¡El texto ha sido cambiado correctamente!";
    parrafo.classList.add("text-success");
  });


  // ===== EJERCICIO 3: CONDICIONAL DE EDAD =====
  const btnVerificarEdad = document.querySelector("#btnVerificarEdad");
  const mensajeEdad = document.querySelector("#mensajeEdad");

  btnVerificarEdad.addEventListener("click", () => {
    const edadInput = document.querySelector("#edad").value;
    const edad = parseInt(edadInput);

    if (edadInput === "" || edad < 0) {
      mensajeEdad.innerHTML = "<div class='alert alert-danger'>Ingrese una edad válida.</div>";
      return;
    }

    if (edad > 18) {
      mensajeEdad.innerHTML = "<div class='alert alert-success'>Eres mayor de edad. </div>";
    } else {
      mensajeEdad.innerHTML = "<div class='alert alert-warning'>Eres menor de edad. </div>";
    }
  });

  // Ejercicio 4: Manipulación de Arreglos (Arrays)
  const estudiantes = [
    { nombre: "Daniela", apellido: "Murillo", nota: 95 },
    { nombre: "Joseph", apellido: "Sancho", nota: 88 },
    { nombre: "Elsiel", apellido: "Serrano", nota: 91 },
    { nombre: "Sofia", apellido: "Delgado", nota: 77 }
  ];

  const btnMostrarEstudiantes = document.querySelector("#btnMostrarEstudiantes");
  const listaEstudiantes = document.querySelector("#listaEstudiantes");

  btnMostrarEstudiantes.addEventListener("click", () => {
    let contenido = "<ul class='list-group mb-3'>";
    let suma = 0;

    for (let i = 0; i < estudiantes.length; i++) {
      const est = estudiantes[i];
      contenido += `<li class='list-group-item'>${est.nombre} ${est.apellido} — Nota: ${est.nota}</li>`;
      suma += est.nota;
    }

    const promedio = suma / estudiantes.length;
    contenido += `</ul><div class='alert alert-secondary'>Promedio general: ${promedio.toFixed(2)}</div>`;

    listaEstudiantes.innerHTML = contenido;
  });

});

