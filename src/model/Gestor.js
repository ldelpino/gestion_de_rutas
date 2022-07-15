import {Usuario} from "@/model/Usuario.js";
import {RolUsuario} from "@/model/RolUsuario.js";

export default class Gestor extends Usuario {
    constructor(carne_identidad, nombre, apellidos, nombre_usuario) {
        super(carne_identidad, nombre, apellidos, nombre_usuario, new RolUsuario("Gestor"));
    }
}

export {Gestor};