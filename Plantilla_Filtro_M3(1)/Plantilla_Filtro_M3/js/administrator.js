function cargarInformacion() {
  let empresa = localStorage.getItem("usuarioLogueado");

  empresa = JSON.parse(empresa);

  document.getElementById(
    "tituloEmpresa"
  ).innerText = `Vacantes de ${empresa.nombre}`;

  cargarTrabajos(empresa.id);
}

function cargarTrabajos(idEmpresa) {
  fetch("http://localhost:3000/companies/" + idEmpresa)
    .then((response) => response.json())
    .then((response) => {
      let contenedor = document.getElementById("contenedorTrabajos");
      response.trabajos.forEach((trabajo) => {
        contenedor.innerHTML += `<div class="col-md-12">
                                        <div class="card mb-3">
                                            <div class="row g-0">
                                                <div class="col-md-4">
                                                    <img src="./assets/logo_riwi.webp" class="img-fluid rounded-start" alt="...">
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="card-body">
                                                        <h5 class="card-title">${trabajo.titulo}</h5>
                                                        <p class="card-text">${trabajo.descripcion}</p>
                                                        <p class="card-text">Salario: <small class="text-muted">${trabajo.salario}</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;
      });
    });
}

cargarInformacion();
