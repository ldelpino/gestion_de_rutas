import Parada from "@/model/Parada.js";

export default class Ruta {
    _kilometros_totales = 0;
    get kilometros_totales_1() {
        return this._kilometros_totales;
    }
    _tiempo_estimado = 0;//en minutos
    get tiempo_estimado() {
        return this._tiempo_estimado;
    }
    _nombre_ruta = "";
    get nombre_ruta() {
        return this._nombre_ruta;
    }
    _paradas = Parada[{}];
    get paradas() {
        return this._paradas;
    }
    constructor(kilometros_totales, tiempo_estimado, nombre_ruta, paradas) {
        this._kilometros_totales = kilometros_totales
        this._tiempo_estimado = tiempo_estimado
        this._nombre_ruta = nombre_ruta
        this._paradas = paradas
    }
}

export { Ruta };