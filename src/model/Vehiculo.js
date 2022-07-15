import { TipoVehiculo } from "@/model/TipoVehiculo.js";
import { Ruta } from "@/model/Ruta.js";

export default class Vehiculo {
    _chapa = "";
    _tipo_vehiculo = TipoVehiculo;
    _kilometraje = 0//kilometros por litro
    _cantidad_pasajeros = 0;
    _rutas = Ruta[{}];
    constructor(chapa, tipo_vehiculo, kilometraje, cantidad_pasajeros, rutas) {
        this._chapa = chapa
        this._tipo_vehiculo = tipo_vehiculo
        this._kilometraje = kilometraje
        this._cantidad_pasajeros = cantidad_pasajeros
        this._rutas = rutas
    }
}

export {Vehiculo};