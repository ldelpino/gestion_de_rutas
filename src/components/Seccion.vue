<template>
  <div id="seccion" class="seccion">
    <section v-if="Boolean(!this.sesion_iniciada)">
      <article>
        <p>{{ parrafo }}</p>
      </article>
    </section>
    <section v-if="Boolean(this.sesion_iniciada)">
      <marcadores :usuario="this.usuario"></marcadores>
    </section>
  </div>
</template>

<script>
import Marcadores from "./Marcadores.vue";
import { textos_es } from "@/constants/textos_es.js";
import { Usuario } from "@/model/Usuario.js";

export default {
  name: "Seccion",
  components: {
    Marcadores,
  },
  data() {
    return {
      parrafo: textos_es.parrafo1,
    };
  },
  props: {
    sesion_iniciada: Boolean,
    usuario: Usuario,
  },
};
</script>

<style>
html, body {
height: 100%;
width: 100%;
margin: 0;
}
#seccion {
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
