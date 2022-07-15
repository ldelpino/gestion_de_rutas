import {RolUsuario} from "@/model/RolUsuario.js"

export default class Usuario {
    _carne_identidad = "";
    get carne_identidad() {
        return this._carne_identidad;
    }
    _nombre = "";
    get nombre() {
        return this._nombre;
    }
    _apellidos = "";
    get apellidos() {
        return this._apellidos;
    }
    _nombre_usuario = "";
    get nombre_usuario() {
        return this._nombre_usuario;
    }
    _rol_usuario = RolUsuario;
    get rol_usuario() {
        return this._rol_usuario;
    }
    constructor(carne_identidad, nombre, apellidos, nombre_usuario, rol_usuario) {
        this._carne_identidad = carne_identidad
        this._nombre = nombre
        this._apellidos = apellidos
        this._nombre_usuario = nombre_usuario
        this._rol_usuario = rol_usuario
    }
}

export{Usuario}