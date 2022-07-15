export default class Cargo {
    _nombre_cargo = "";
    get nombre_cargo_1() {
        return this._nombre_cargo;
    }
    constructor(nombre_cargo) {
        this._nombre_cargo = nombre_cargo
    }
}

export {Cargo};