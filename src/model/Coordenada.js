export default class Coordenada {
    _latitud = Number;
    get latitud() {
        return this._latitud;
    }
    _longitud = Number;
    get longitud_1() {
        return this._longitud;
    }
    constructor(latitud, longitud) {
        this._latitud = latitud
        this._longitud = longitud
    }
}

export {Coordenada}