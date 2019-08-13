"use strict";
exports.__esModule = true;
var alumno_1 = require("./alumno");
var examenRendido_1 = require("./examenRendido");
var fs = require("fs");
var LegajoAlumnos = /** @class */ (function () {
    function LegajoAlumnos(alumnos) {
        this.listadoAlumnos = alumnos;
        if (alumnos == undefined) {
            this.listadoAlumnos = this.leerAlumnosDesdeArchivo('listadoAlumnos.txt', '\r\n', ',');
        }
    }
    LegajoAlumnos.prototype.getAlumnosTotales = function () {
        return this.listadoAlumnos;
    };
    LegajoAlumnos.prototype.agregarAlumno = function (alumno) {
        try {
            var legajo = alumno.getNumeroLegajo();
            if (this.buscarEnListado(legajo) != null) {
                throw new Error('El alumno ya se encuentra en el listado');
            }
            this.listadoAlumnos.push(alumno);
        }
        catch (error) {
            console.log(error.message);
        }
    };
    LegajoAlumnos.prototype.eliminarAlumno = function (alumno) {
        try {
            var legajo = alumno.getNumeroLegajo();
            var indiceAlumno = this.buscarEnListado(legajo);
            if (indiceAlumno == null) {
                throw new Error('El alumno no se encuentra en el listado');
            }
            this.listadoAlumnos.splice(indiceAlumno, 1);
        }
        catch (error) {
            console.log(error.message);
        }
    };
    LegajoAlumnos.prototype.getAlumnoDeterminado = function (id) {
        for (var i = 0; i < this.listadoAlumnos.length; i++) {
            if (id == this.listadoAlumnos[i].getNumeroLegajo()) {
                return this.listadoAlumnos[i];
            }
        }
        return null;
    };
    LegajoAlumnos.prototype.getPromedioAlumnos = function () {
        var suma = 0;
        for (var i = 0; i < this.listadoAlumnos.length; i++) {
            suma = suma + this.listadoAlumnos[i].getPromedioAlumno();
        }
        return suma / this.listadoAlumnos.length;
    };
    LegajoAlumnos.prototype.getPromedioAlumnoDeterminado = function (alumno) {
        try {
            var id = alumno.getNumeroLegajo();
            var indiceAlumno = this.buscarEnListado(id);
            if (indiceAlumno == null) {
                throw new Error('El alumno no se encuentra en el listado');
            }
            return this.listadoAlumnos[indiceAlumno].getPromedioAlumno();
        }
        catch (error) {
            console.log(error.message);
        }
    };
    LegajoAlumnos.prototype.buscarEnListado = function (legajo) {
        for (var i = 0; i < this.listadoAlumnos.length; i++) {
            if (legajo == this.listadoAlumnos[i].getNumeroLegajo()) {
                return i;
            }
        }
        return null;
    };
    LegajoAlumnos.prototype.leerAlumnosDesdeArchivo = function (rutaArchivo, separador1, separador2) {
        var texto = fs.readFileSync(rutaArchivo, 'utf-8');
        var arreglotexto = texto.split(separador1);
        var arregloAlumnos = [];
        var examenRendido1;
        var examenRendido2;
        var examenRendido3;
        var examenesRendidos = [];
        for (var i = 0; i < arreglotexto.length; i++) {
            var linea = arreglotexto[i].split(separador2);
            examenRendido1 = new examenRendido_1["default"](linea[4], parseInt(linea[5]));
            examenRendido2 = new examenRendido_1["default"](linea[6], parseInt(linea[7]));
            examenRendido3 = new examenRendido_1["default"](linea[8], parseInt(linea[9]));
            examenesRendidos.push(examenRendido1);
            examenesRendidos.push(examenRendido2);
            examenesRendidos.push(examenRendido3);
            arregloAlumnos.push(new alumno_1["default"](linea[0], parseInt(linea[1]), parseInt(linea[2]), linea[3], examenesRendidos));
            examenesRendidos = [];
        }
        return arregloAlumnos;
    };
    return LegajoAlumnos;
}());
exports["default"] = LegajoAlumnos;
