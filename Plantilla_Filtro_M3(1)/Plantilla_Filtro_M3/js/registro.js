const formulario = document.getElementById("formRegistrarse");

formulario.addEventListener("submit", function (event) {
  console.log("registrando");

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let company = document.getElementById("company").value;

  fetch("http://localhost:3000/companies", {
    method: "POST",
    body: JSON.stringify({
      usuario: email,
      clave: password,
      nombre: company,
      trabajos: [],
    }),
  });

  event.preventDefault();
});