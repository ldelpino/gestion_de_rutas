import { Direccion } from "@/model/Direccion.js";

export default class Parada extends Direccion {
    _nombre_parada = "";
    get nombre_parada_1() {
        return this._nombre_parada;
    }
    constructor(municipio, localidad, calle, entrecalle1, entrecalle2, coordenadas, nombre_parada) {
        super(municipio, localidad, calle, entrecalle1, entrecalle2, coordenadas);
        this._nombre_parada = nombre_parada
    }
}

export {Parada};