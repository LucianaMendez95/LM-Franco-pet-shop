$(document).ready(
    $.ajax({
        url:`https://apipetshop.herokuapp.com/api/articulos`,
        success: function(data) {
          var datos = data.response
          miprograma(datos)
         }
     })
)


    function miprograma(datos){
        if (document.querySelector("#app")){
           var app = new Vue({
             el:`#app`,
             data: {
             listaDeJuguetes:[], 
             listaDeMedicamentos:[],
             }
         })
    

          datos.map(objeto =>{
             if (objeto.tipo == "Juguete"){
                 app.listaDeJuguetes.push(objeto)
                } else{
                  app.listaDeMedicamentos.push(objeto)
                 }
             })
         }
    }



 if (document.querySelector("#botonEnviar")){

      const boton = document.querySelector("#botonEnviar")
      const telefono = document.querySelector("#telefono")
      const nombre = document.querySelector("#nombre")
      const apellido = document.querySelector("#apellido")
      const mail = document.querySelector("#mail")
      const perro = document.querySelector("#perro")
      const gato = document.querySelector("#gato")
      const asunto = document.querySelector("#asunto")
      const consulta = document.querySelector("#consulta")


    boton.addEventListener("click", e =>{
       e.preventDefault()
       if(telefono.value.length > 1 && nombre.value.length > 1 && apellido.value.length > 1 && mail.value.length > 1 && asunto.value.length > 1 && consulta.value.length > 1 && (perro.checked == 1 || gato.checked == 1)) {
          swal(`Muchas gracias ${nombre.value}!`, `Su consulta fue enviada correctamente, a la brevedad recibiras una respuesta al siguiente mail: ${mail.value}`, "success");
         } else{
            swal("Disculpa!", "Debes completar todos los campos correctamente para poder enviar el formulario!");
        }
     })
     
 }