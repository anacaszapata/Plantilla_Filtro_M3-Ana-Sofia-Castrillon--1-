function cargarTrabajos() {
  fetch("http://localhost:3000/companies")
    .then((response) => response.json())
    .then((response) => {
      let trabajos = response
        .map(function (empresa) {
          return empresa.trabajos;
        })
        .flat();

      let contenedor = document.getElementById("contenedorTrabajos");
      contenedor.innerHTML = "";
      trabajos.forEach((trabajo) => {
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

      console.log(trabajos);
    });
}
cargarTrabajos();
