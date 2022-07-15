export default class TipoVehiculo {
    _nombre_tipo_vehiculo = "";
    get nombre_tipo_vehiculo_1() {
        return this._nombre_tipo_vehiculo;
    }
    constructor(nombre_tipo_vehiculo) {
        this._nombre_tipo_vehiculo = nombre_tipo_vehiculo
    }
}

export {TipoVehiculo};