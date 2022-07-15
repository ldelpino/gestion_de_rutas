import { Usuario } from "@/model/Usuario.js";
import { Trabajador } from "@/model/Trabajador.js";
import { Direccion } from "@/model/Direccion.js";
import { Chofer } from "@/model/Chofer.js";
import { Gestor } from "@/model/Gestor.js";
import { Vehiculo } from "@/model/Vehiculo.js";
import { Ruta } from "@/model/Ruta.js";
import { Parada } from "@/model/Parada.js";

export default class Model {
    _usuarios = new Usuario[{}];
    getUsuarios() {
        return this._usuarios;
    }
    _vehiculos = new Vehiculo[{}];
    getVehiculos() {
        return this._vehiculos;
    }
    _rutas = new Ruta[{}];
    getRutas() {
        return this._rutas;
    }
    _paradas = new Parada[{}];
    getParadas() {
        return this._paradas;
    }
    constructor(usuarios, vehiculos, rutas, paradas) {
        this._usuarios = usuarios
        this._vehiculos = vehiculos
        this._rutas = rutas
        this._paradas = paradas
    }
    obtenerArbol(usuario_conectado) {
        let rol = usuario_conectado.getRolUsuario()
        if (rol.getNombreRol() === "Trabajador") {
            return obtenerArbolTrabajador(usuario_conectado);
        } else if (rol.getNombreRol() === "Chofer") {
            return obtenerArbolChofer(usuario_conectado);
        } else {
            return obtenerArbolGestor(usuario_conectado);
        }
    }
    obtenerArbolTrabajador(usuario_conectado) {
        trabajador = convertirUsuarioPorRolUsuario(usuario_conectado, usuario_conectado.getRolUsuario())
        direcciones = trabajador.getDirecciones()
        root = NodoArbol;
    }
    obtenerArbolChofer(usuario_conectado) {

    }
    obtenerArbolGestor(usuario_conectado) {

    }
}

export { Model };