export default class RolUsuario {
    _nombre_rol_suario = "";
    get nombre_rol_suario() {
        return this._nombre_rol_suario;
    }
    constructor(nombre_rol_usuario) {
        this._nombre_rol_usuario = nombre_rol_usuario
    }
}

export {RolUsuario};