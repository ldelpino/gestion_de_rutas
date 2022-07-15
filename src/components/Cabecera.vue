<template>
  <div id="cabecera">
    <header>
      <div id="bloque_cabecera">
      <h1>{{ titulo }}</h1>
      <h2 v-if="Boolean(!sesion_iniciada)">{{ subtitulo }}</h2>
      </div>
      <div v-if="Boolean(sesion_iniciada)">
      Login
      <!--<login :sesion_iniciada="this.sesion_iniciada" :usuario="this.usuario"/>-->
      </div>
    </header>
    <aside v-if="Boolean(!sesion_iniciada)">
    Login
      <!--<login :sesion_iniciada="this.sesion_iniciada" :usuario="this.usuario"/>-->
    </aside>
  </div>
</template>

<script>
import { textos_es } from "@/constants/textos_es.js";
//import Login from "./Login.vue";
import {Usuario} from "@/model/Usuario.js"

export default {
  name: "Cabecera",
  components: {
    //Login
  },
  props: {
    sesion_iniciada: Boolean,
    usuario: Usuario
  },
  data() {
    return {
      titulo: textos_es.titulo,
      subtitulo: textos_es.subtitulo,
    };
  },
};
</script>
<style scoped>
</style>
