import { Coordenada } from "@/model/Coordenada.js";

export default class Direccion {
    _municipio = "";
    get municipio() {
        return this._municipio;
    }
    _localidad = "";
    get localidad() {
        return this._localidad;
    }
    _calle = "";
    get calle() {
        return this._calle;
    }
    _entrecalle1 = "";
    get entrecalle1() {
        return this._entrecalle1;
    }
    _entrecalle2 = "";
    get entrecalle2() {
        return this._entrecalle2;
    }
    _coordenadas = Coordenada;
    get coordenadas() {
        return this._coordenadas;
    }
    constructor(municipio, localidad, calle, entrecalle1, entrecalle2, coordenadas) {
        this._municipio = municipio
        this._localidad = localidad
        this._calle = calle
        this._entrecalle1 = entrecalle1
        this._entrecalle2 = entrecalle2
        this._coordenadas = coordenadas
    }
}

export { Direccion }