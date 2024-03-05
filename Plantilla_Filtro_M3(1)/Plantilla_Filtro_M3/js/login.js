const formulario = document.getElementById("formularioLogin");

formulario.addEventListener("submit", function (event) {
  let usuario = document.getElementById("usuario").value;
  let clave = document.getElementById("clave").value;
  event.preventDefault();

  fetch(
    "http://localhost:3000/companies?" +
      new URLSearchParams({
        usuario: usuario,
        clave: clave,
      })
  )
    .then((response) => {
      console.log(response.json());
    });
    /* .then((response) => {
      if (response.length == 0) {
        alert("credenciales incorrectas");
        return;
      }
      console.log(response[0]);
      localStorage.setItem("usuarioLogueado", "hola")
    }); */
      alert("usuario logueado con exito");
      location.href = "./admin.html";
    });