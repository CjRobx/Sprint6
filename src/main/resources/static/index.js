// URL de la APIcapacitacion.js
const baseUrl = "http://localhost:8000/usuario";
document.addEventListener('submit', enviarModificacion);


// Instancia de Vue
const app = new Vue({
  el: "#app",
  data: {
    usuarios: [],
    detalleUsuario:null
  },
  mounted() {
    // Llamada a la API para obtener la lista de empleados
    axios.get(baseUrl + '/listar')
    .then(response => {
      this.usuarios = response.data;
      console.log(this.usuario);
    })
    .catch(error => {
      console.error(error);
    });
  },
  methods: {
    mostrarDetalle(id) {
      // Llamada a la API para obtener el detalle del empleado
      axios.get(`${baseUrl}/${id}`)
      .then(response => {
      
        this.detalleUsuario = response.data;
        Swal.fire({
          icon: "info",
          title: "Detalle",
          html: 
          `<section id="detalle">
            <p>ID: ${this.detalleUsuario.id}</p>
            <p>Rut: ${this.detalleUsuario.rut}</p>
            <p>Nombre: ${this.detalleUsuario.nombre}</p>
            <p>Apellido: ${this.detalleUsuario.apellido}</p>
            <p>Cargo: ${this.detalleUsuario.cargo}</p>
          </section>`
        }); 
        console.log(this.detalleUsuario);
      })
      .catch(error => {
        console.error(error);
      });
    },
    eliminar(id) {
      // Llamada a la API para obtener el detalle del empleado
      fetch(baseUrl + "/" + id, {method: "DELETE"})
      .then(response => {
    
        Swal.fire({
          icon: "success",
          title: "Usuario Eliminado",
          text: "El usuario se eliminó correctamente."
        }).then(() => {
          window.location.reload();
        });    
    
      })
      .catch(error => {         
        
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ocurrió un error al eliminar el usuario."
        });        
      });
    },
    actualizar(id){
    
      Swal.fire({
        target: '#app',
        title: "Editar usuario:",
        showConfirmButton: false,
        html:
        `
        <form id="form">
          <input type="text" name="id" v-model="${id}" value="${id}" hidden>
          <div class="form-group">
            <label for="rut">Rut:</label>
            <input type="text" class="form-control" id="rut" name="rut" v-model="detalleUsuario.rut" required>
          </div>
          <div class="form-group">
            <label for="nombres">Nombres:</label>
            <input type="text" class="form-control" id="nombres" name="nombre" v-model="detalleUsuario.nombres" required>
          </div>
          <div class="form-group">
            <label for="apellidos">Apellidos:</label>
            <input type="text" class="form-control" id="apellidos" name="apellido" v-model="detalleUsuario.apellidos" required>
          </div>
          <div class="form-group">
            <label for="cargo">Cargo:</label>
            <input type="text" class="form-control" id="cargo" name="cargo" v-model="detalleUsuario.cargo" required>
          </div>
          <button type="submit" class="btn btn-primary">Enviar modificación</button>
        </form>
        `
      }) // end Swal.fire
           
    }, 	// end actualizar
  }	
});


function enviarModificacion(e){
	e.preventDefault();
	const dataUsuario = {};
	Array.from(e.target).forEach(input => dataUsuario[input.name] = input.value);
	
  axios.put(baseUrl + '/' + dataUsuario.id, dataUsuario)
  .then(response => {
    console.log("Usuario modificado:", response.data);
    Swal.fire({
      icon: "success",
      title: "Se modifico el usuario oe",
      text: ""
    })
    .then(() => {
      // Recargar la página después de aceptar
      window.location.reload();
    });
  })
  .catch(error => {
    console.error(error);
    Swal.fire({
      icon: "Error",
      title: "Error",
      text: "Ocurrió un error al modificar la capacitación."
    });
  });
}
