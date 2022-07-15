<template>
  <div id="navegacion">
    <ul>
      <li>
      ijoppkiji
        <!--<menu
          :activo="this.botones_activos"
          :texto="this.gestionar_usuarios"
          @click="this.gestionar_usuarios_metodo()"
        >
        </menu>-->
      </li>
      <li>
      uj9gij0digj0ig
        <!--<menu
          :activo="this.botones_activos"
          :texto="this.gestionar_trabajadores"
          @click="this.gestionar_trabajadores_metodo()"
        >
        </menu>-->
      </li>
      <li>
      kfkofp[e;f
        <!--<menu
          :activo="this.botones_activos"
          :texto="this.gestionar_choferes"
          @click="this.gestionar_choferes_metodo()"
        >
        </menu>-->
      </li>
      <li>
      kemfmwfl,wFJFI
        <!--<menu
          :activo="this.botones_activos"
          :texto="this.gestionar_vehiculos"
          @click="this.gestionar_vehiculos_metodo()"
        >
        </menu>-->
      </li>
      <li>
      KIFOKFEO,G
        <!--<menu
          :activo="this.botones_activos"
          :texto="this.gestionar_rutas"
          @click="this.gestionar_rutas_metodo()"
        >
        </menu>-->
      </li>
      <li>
      KJMMRGORL
        <!--<menu
          :activo="this.botones_activos"
          :texto="this.gestionar_paradas"
          @click="this.gestionar_paradas_metodo()"
        >
        </menu>-->
      </li>
    </ul>
  </div>
</template>

<script>
//import { Gestor } from "@/model/Gestor.js";
//import { Model } from "@/model/Model.js";
import { textos_es } from "@/constants/textos_es.js";

export default {
  name: "Navegacion",
  props: {
    //gestor: Gestor,
    //model: Model,
  },
  data() {
    return {
      botones_activos: true,
      gestionar_usuarios: textos_es.menu_gestor.gestionar_usuarios,
      gestionar_trabajadores: textos_es.menu_gestor.gestionar_trabajadores,
      gestionar_choferes: textos_es.menu_gestor.gestionar_choferes,
      gestionar_vehiculos: textos_es.menu_gestor.gestionar_vehiculos,
      gestionar_rutas: textos_es.menu_gestor.gestionar_rutas,
      gestionar_paradas: textos_es.menu_gestor.gestionar_paradas,
      usuarios_metodo: this.gestionar_usuarios_metodo(),
      trabajadores_metodo: this.gestionar_trabajadores_metodo(),
      choferes_metodo: this.gestionar_choferes_metodo(),
      vehiculos_metodo: this.gestionar_vehiculos_metodo(),
      rutas_metodo: this.gestionar_rutas_metodo(),
      paradas_metodo: this.gestionar_paradas_metodo(),
    };
  },
  methods: {
    gestionar_usuarios_metodo() {
      return true;
    },
    gestionar_trabajadores_metodo() {
      return true;
    },
    gestionar_choferes_metodo() {
      return true;
    },
    gestionar_vehiculos_metodo() {
      return true;
    },
    gestionar_rutas_metodo() {
      return true;
    },
    gestionar_paradas_metodo() {
      return true;
    },
  },
};
</script>
<style scoped>
li {
  display: inline;
  margin: 5px;
}
</style>
