export default class NodoArbol {
    _nombre_prop = "";
    getNombreProp() {
        return this._nombre_prop;
    }
    _valor_prop = "";
    getValorProp() {
        return this._valor_prop;
    }
    _left_son = NodoArbol;
    getLeftSon() {
        return this._left_son;
    }
    has_leftSon() {
        return Boolean(this._left_son != null);
    }
    _right_son = NodoArbol;
    getRightSon() {
        return this._right_son;
    }
    hasRightSon() {
        return Boolean(this._right_son != null);
    }
    hasSons() {
        return this.has_leftSon() || this.hasRightSon();
    }
    getSons() {
        return NodoArbol[this._left_son,this._right_son];
    }
    constructor(nombre_prop, valor_prop, left_son, right_son) {
        this._nombre_prop = nombre_prop
        this._valor_prop = valor_prop
        this._left_son = left_son
        this._right_son = right_son
    }
}

export { NodoArbol };