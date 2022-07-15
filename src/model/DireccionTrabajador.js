import { Direccion } from "@/model/Direccion.js";

export default class DireccionTrabajador extends Direccion {
    _numero = "";
    get numero_1() {
        return this._numero;
    }
    constructor(municipio, localidad, calle, entrecalle1, entrecalle2, numero, coordenadas) {
        super(municipio, localidad, calle, entrecalle1, entrecalle2, coordenadas);
        this._numero = numero
    }
}

export {DireccionTrabajador};