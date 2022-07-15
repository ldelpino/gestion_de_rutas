<template>
  <div id="explorador">
    <arbol
      :arbol="this.obtenerArbol()"
      :puede_aniadirse="this.puede_aniadirse"
      :puede_ejecutarse="this.puede_ejecutarse"
      :puede_eliminarse="this.puede_eliminarse"
      :puede_modificarse="this.puede_modificarse"
    ></arbol>
  </div>
</template>

<script>
import Arbol from "./subcomponents/Arbol.vue";
import { Usuario } from "@/model/Usuario.js";
import { Model } from "@/model/Model.js";
import { ArbolED } from "@/constants/ArbolED.js";

export default {
  name: "Explorador",
  props: {
    usuario_conectado: Usuario,
    model: Model,
  },
  components: {
    Arbol,
  },
  data() {
    return {
      aTemp: ArbolED,
      puede_aniadirse: this.isUsuarioConectadoGestor(),
      puede_eliminarse: this.isUsuarioConectadoGestor(),
      puede_modificarse: this.isUsuarioConectadoGestor(),
      puede_ejecutarse: true,
    };
  },
  methods: {
    obtenerArbol() {
      return this.model.getArbol(this.usuario_conectado);
    },
    isUsuarioConectadoGestor() {
      return this.model.isUsuarioConectadoGestor(this.usuario_conectado);
    },
  },
};
</script>
