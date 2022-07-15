<template>
  <div id="nodo">
    <div id="root" @dblclick="this.ejecutar()">
      <div id="nombre-prop">{{ this.nodo_arbol.getNombreProp() }}:&nbsp;</div>
      <div id="valor-prop">{{ this.nodo_arbol.getValorProp() }}</div>
      <div
        id="aniadir-metodo"
        v-if="this.puede_aniadirse"
        @click="this.aniadir()"
      >
        <!-- Icono de Adicionar-->
      </div>
      <div
        id="eliminar-metodo"
        v-if="this.puede_eliminarse"
        @click="this.eliminar()"
      >
        <!-- Icono de Eliminar-->
      </div>
      <div
        id="modificar-metodo"
        v-if="this.puede_modificarse"
        @click="this.modificar()"
      >
        <!-- Icono de Modificar-->
      </div>
    </div>
    <div id="hijos" v-if="this.nodo_arbol.hasSons()">
        |<br/>
        |<br/>
        |<br/>
        ----------------<div id="hijo_der" v-if="this.nodo_arbol.hasRightSon()">
&nbsp;&nbsp;
<nodo 
:nodo_arbol="this.nodo_arbol.getRightSon()"
:puede_aniadirse="this.puede_aniadirse"
:puede_ejecutarse="this.puede_ejecutarse"
:puede_eliminarse="this.puede_eliminarse"
:puede_modificarse="this.puede_modificarse"><nodo>
      </div>
      |<br/>
      |<br/>
      |<br/>
<div id="hijo_izq" v-if="this.nodo_arbol.hasLeftSon()">
<nodo 
:nodo_arbol="this.nodo_arbol.getLeftSon()"
:puede_aniadirse="this.puede_aniadirse"
:puede_ejecutarse="this.puede_ejecutarse"
:puede_eliminarse="this.puede_eliminarse"
:puede_modificarse="this.puede_modificarse"><nodo>
      </div>
    </div>
  </div>
</template>

<script>
import { Nodo } from "@/constants/Nodo.js";

export default {
  name: "Nodo",
  props: {
    nodo_arbol: Nodo,
    puede_aniadirse: Boolean,
    puede_ejecutarse: Boolean,
    puede_eliminarse: Boolean,
    puede_modificarse: Boolean,
  },
  data() {
    return {
      aniadir_metodo: this.aniadir(),
      ejecutar_metodo: this.ejecutar(),
      eliminar_metodo: this.eliminar(),
      modificar_metodo: this.modificar(),
    };
  },
  methods: {
    aniadir() {
      //ventana de abrir
      //cartel de confirmacion
      return this.puede_aniadir
    },
    ejecutar() {
      return this.puede_ejecutarse;
    },
    eliminar() {
      //cartel de verificacion
      //devolver verdadero o falso
    },
    modificar() {
      //cartel de verificacion
      //devolver verdadero o falso
    },
  },
};
</script>
