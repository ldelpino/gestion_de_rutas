<template>
  <div id="login">
    <!--<div v-if="Boolean(!this.sesion_iniciada)">
      Iniciar Sesion
      <form name="inicio_sesion" id="formulario_inicio_sesion" method="get">
        Nombre de Usuario:&nbsp;<input
          type="text"
          name="nombre_usuario"
          autofocus
          v-model="userName"
        />
        Contraseña:&nbsp;<input
          type="password"
          name="password"
          v-model="psss"
        />
        <input
          type="button"
          @click="enviarDatos"
          value="Iniciar Sesion"
          name="boton_iniciar_sesion"
        />
      </form>
    </div>-->
    <div v-if="Boolean(this.sesion_iniciada)">
      Sesion Iniciada:{{userName}}
    </div>
  </div>
</template>

<script>
import { Usuario } from "@/model/Usuario.js";

export default {
  name: "Login",
  props: {
    sesion_iniciada: Boolean,
    usuario: Usuario
  },
  data() {
    return {
      userName: "ggg",
      pass: "",
    };
  },
  methods: {
    enviarDatos() {},
  },
};
</script>
<style scoped>
</style>
