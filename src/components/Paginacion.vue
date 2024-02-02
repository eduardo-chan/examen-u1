<template>
  <div>
    <b-container>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-container>

    <b-container class="mt-5">
      <b-input placeholder="filtrar..." v-model="filtro"></b-input>
      <b-table
        id="my-table"
        :items="vehicles"
        :per-page="perPage"
        :current-page="currentPage"
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        label-sort-asc=""
        label-sort-desc=""
        small
        :filter="filtro"
        @filtered="onFiltered"
      >
      </b-table>
      <div class="overflow-auto">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>

        <p class="mt-3">Current Page: {{ currentPage }}</p>
      </div>
    </b-container>
  </div>
</template>

<script>
import getPage from "../services/Vehiculo";
export default {
  data() {
    return {
      items: [
        {
          text: "Inicio",
          to: { name: "main" },
        },
        {
          text: "Formulario",
          to: { name: "form" },
        },
        {
          text: "Paginación",
          active: true,
        },
      ],
      filtro: null,
      sortBy: "name",
      sortDesc: false,
      perPage: 5,
      rows: 0,
      currentPage: 1,
      vehicles: [],
      fields: [
        { key: "brand", label: "Marca", sortable: true },
        { key: "model", label: "Modelo", sortable: true },
        { key: "añofabricacion", label: "Año de fabricación", sortable: true },
        { key: "serie", label: "Número de serie", sortable: true },
      ],
    };
  },
  mounted() {
    this.getPage();
  },
  methods: {
    async getPage() {
      try {
        const data = await getPage.getPage(
          parseInt(this.currentPage),
          parseInt(this.perPage),
          this.sortBy
        );
        this.vehicles = data.content;
        this.rows = this.vehicles.length;
      } catch (error) {
        console.error(error);
      }
    },
    onFiltered(filteredItems) {
      this.currentPage = 1;
      this.rows = filteredItems.length;
    },
  },
};
</script>

<style>
</style>