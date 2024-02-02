<template>
  <div>
    <b-container>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-container>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      items: [
      {
          text: "Inicio",
          active: true,
        },
        {
          text: "Formulario",
          to: { name: "form" },
        },
        {
          text: "Paginación",
          to: { name: "paginacion" },
        },
      ],
    };
  },
};

</script>

<style>

</style>