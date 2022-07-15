import {DireccionTrabajador} from "@/model/DireccionTrabajador.js";
import {Usuario} from "@/model/Usuario.js";
import {RolUsuario} from "@/model/RolUsuario.js";
import {Area} from "@/model/Area.js";
import {Cargo} from "@/model/Cargo.js";

export default class Trabajador extends Usuario {

    _area = Area;
    get area() {
        return this._area;
    }
    _cargo = Cargo;
    get cargo() {
        return this._cargo;
    }
    _direcciones = DireccionTrabajador[{}];
    get direcciones() {
        return this._direcciones;
    }
    constructor(carne_identidad, nombre, apellidos, nombre_usuario, area, cargo, direcciones) {
        super(carne_identidad, nombre, apellidos, nombre_usuario, new RolUsuario("Trabajador"));
        this._area = area
        this._cargo = cargo
        this._direcciones = direcciones
    }
}

export {Trabajador};