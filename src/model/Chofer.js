import {Usuario} from "@/model/Usuario.js";
import {RolUsuario} from "@/model/RolUsuario.js";
import {Vehiculo} from "@/model/Vehiculo.js";

export default class Chofer extends Usuario {
    _vehiculo_asociado = Vehiculo;
    get vehiculo_asociado() {
        return this._vehiculo_asociado;
    }
    constructor(carne_identidad, nombre, apellidos, nombre_usuario, vehiculo_asociado) {
        super(carne_identidad, nombre, apellidos, nombre_usuario, new RolUsuario("Chofer"));
        this._vehiculo_asociado = vehiculo_asociado
    }
}

export {Chofer};