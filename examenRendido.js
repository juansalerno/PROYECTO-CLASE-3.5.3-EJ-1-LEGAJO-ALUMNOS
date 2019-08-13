"use strict";
exports.__esModule = true;
var ExamenRendido = /** @class */ (function () {
    function ExamenRendido(asignatura, nota) {
        this.asignatura = asignatura;
        this.nota = nota;
    }
    ExamenRendido.prototype.getAsignatura = function () {
        return this.asignatura;
    };
    ExamenRendido.prototype.getNota = function () {
        return this.nota;
    };
    return ExamenRendido;
}());
exports["default"] = ExamenRendido;
