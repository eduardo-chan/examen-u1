<template>
  <div>
    <b-container>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-container>

      <h4>Formulario Registro de vehíhulo</h4>
        <form @submit.prevent="submitForm">
          
          <label for="nombre">Marca:</label>
          <input type="text" id="marca" v-model="marca" placeholder="Marca" required>
          <span v-if="errors.marca" class="error">{{ errors.marca }}</span>
          <br>
          <label for="nombre">Modelo:</label>
          <input type="text" id="modelo" v-model="modelo" placeholder="Modelo" required>
          <span v-if="errors.modelo" class="error">{{ errors.modelo }}</span>          
          <br>
          
          <label for="añofabricacion">Año de Fabricación:</label>
          <input type="date" id="añofabricacion" v-model="añofabricacion" :max="maxDate" required>
          <span v-if="errors.añofabricacion" class="error">{{ errors.añofabricacion }}</span>
          <br>
          <label for="numeserie">Número de Serie</label>
          <input type="text" id="numserie" v-model="numserie" placeholder="XXXX000-00XX" required> 
          <span v-if="errors.numeserie" class="error">{{ errors.numeserie }}</span>
          <br>
          <button type="submit">Enviar</button>
        </form>
  </div>

</template>

<script>
export default {
  data() {
    return {
      items: [
      {
          text: "Inicio",
          to: {name: "main"},
        },
        {
          text: "Formulario",
          active: true,
        },
        {
          text: "Paginación",
          to: { name: "paginacion" },
        },
      ],
      
      marca: '',
      modelo: '',
      añofabricacion: '',
      numserie: '',
      maxDate: new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0],
      errors: {}
    };

    
  },
    methods: {  
  
        submitForm() {
            this.errors = {}; 
            let hasErrors = false;
        
            const añofabricacion= new Date(this.añofabricacion);
            const añofabricacionn = new Date();
        
            añofabricacionn.setFullYear(añofabricacionn.getFullYear() - 18);

            if (!this.añofabricacion || añofabricacion >= new Date() || añofabricacion > añofabricacionn) {
                this.errors.fechaNacimiento = "año de fabricacion no válida";
                hasErrors = true;
            }
            //hasErrors es para, si hay errores no se envie el formulario
            if (hasErrors) {
                alert('Por favor, corrige los errores en el formulario.');
                return;
            }

            // Si no hay errores, se envia
            alert('Formulario enviado correctamente.');
        },
       
    }
  }

</script>

<style>
</style>