export default class Area {
    _nombre_area = "";
    get nombre_area_1() {
        return this._nombre_area;
    }
    constructor(nombre_area) {
        this._nombre_area = nombre_area
    }
}

export {Area};