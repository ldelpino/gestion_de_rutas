<template>
  <div id="marcadores" class="marcadores">
    <mapa></mapa>
  <div id="arbol_de_coordenadas">
    
  </div>
  </div>
</template>

<script>
import Mapa from "./Mapa.vue";
import { Usuario } from "@/model/Usuario.js";

export default {
  name: "Marcadores",
  components: {
    Mapa,
  },
  props: {
    usuario: Usuario
  },
};
</script>

<style>
html, body {
height: 100%;
width: 100%;
margin: 0;
}
#marcadores {
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
