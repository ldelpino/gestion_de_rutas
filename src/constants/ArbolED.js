import { NodoArbol } from "@/NodoArbol.js";

export default class ArbolED {
    _root = NodoArbol;
    getRoot() {
        return this._root;
    }
    constructor(root) {
        this.root = root
    }
    hasChildren() {
        return this._root.hasLeftSon() || this._root.hasRightSon();
    }
}

export { ArbolED };