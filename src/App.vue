<template>
<div class="app">
  <cabecera :sesion_iniciada="is_sesion_iniciada()" :usuario="usuario" />
  <!--<navegacion v-if="is_sesion_iniciada()" :usuario="usuario" />-->
  <seccion :sesion_iniciada="is_sesion_iniciada()" :usuario="usuario" />
  <pie />
  </div>
</template>

<script>
import Cabecera from "@/components/Cabecera.vue";
//import Navegacion from "@/components/Navegacion.vue";
import Seccion from "@/components/Seccion.vue";
import Pie from "@/components/Pie.vue";
import { Usuario } from "@/model/Usuario.js";
import {RolUsuario} from "@/model/RolUsuario.js";

export default {
  name: "App",
  components: {
    Cabecera,
    //Navegacion,
    Seccion,
    Pie,
  },
  data() {
    return {
      usuario: new Usuario("Karla Maceo Leon", 1, new RolUsuario("Gestor", 2)),
      t: RolUsuario,
      u: null
    };
  },
  methods: {
    is_sesion_iniciada() {
      return Boolean(this.usuario != null)
    },
  },
};
</script>

<style scope>
html, body {
height: 100%;
width: 100%;
margin: 0;
}
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
height: 100%;
width: 100%;
display: grid;
grid-template-columns: 100vh;
grid-auto-rows: 1fr;
grid-gap: 1rem;
padding: 1rem;
box-sizing: border-box;
}
</style>
