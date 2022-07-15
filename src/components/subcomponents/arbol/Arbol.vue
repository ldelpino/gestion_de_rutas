<template>
  <div id="arbol">
    Arbol:&nbsp;<br />
    <div id="mostrar-arbol" v-if="Boolean(this.arbol.getRoot() != null)">
      <nodo
        :nodo_arbol="this.arbol.getRoot()"
        :puede_aniadirse="this.puede_aniadirse"
        :puede_ejecutarse="this.puede_ejecutarse"
        :puede_eliminarse="this.puede_eliminarse"
        :puede_modificarse="this.puede_modificarse"
      ></nodo>
    </div>
  </div>
</template>

<script>
import { ArbolED } from "@/constants/ArbolED.js";
import Nodo from "./Nodo.vue";

export default {
  name: "Arbol",
  components: {
    Nodo,
  },
  props: {
    arbol: ArbolED,
    puede_aniadirse: Boolean,
    puede_ejecutarse: Boolean,
    puede_eliminarse: Boolean,
    puede_modificarse: Boolean,
  },
};
</script>
