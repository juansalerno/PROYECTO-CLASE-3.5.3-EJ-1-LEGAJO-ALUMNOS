"use strict";
exports.__esModule = true;
var examenRendido_1 = require("./examenRendido");
var fs = require("fs");
var Alumno = /** @class */ (function () {
    function Alumno(nombreAlumno, numeroLegajo, edad, curso, examenesRendidos) {
        this.nombreAlumno = nombreAlumno;
        this.numeroLegajo = numeroLegajo;
        this.edad = edad;
        this.curso = curso;
        this.examenesRendidos = examenesRendidos;
        if (examenesRendidos == undefined) {
            this.examenesRendidos = this.leerExamenesDesdeArchivo('./examenesRendidos.txt', '\r\n', ',');
        }
    }
    Alumno.prototype.getNombreAlumno = function () {
        return this.nombreAlumno;
    };
    Alumno.prototype.getNumeroLegajo = function () {
        return this.numeroLegajo;
    };
    Alumno.prototype.getEdadAlumno = function () {
        return this.edad;
    };
    Alumno.prototype.getCursoAlumno = function () {
        return this.curso;
    };
    Alumno.prototype.getPromedioAlumno = function () {
        var suma = 0;
        if (this.examenesRendidos.length > 0) {
            for (var i = 0; i < this.examenesRendidos.length; i++) {
                suma = suma + this.examenesRendidos[i].getNota();
            }
            return (suma / this.examenesRendidos.length);
        }
        else
            return null;
    };
    Alumno.prototype.leerExamenesDesdeArchivo = function (rutaArchivo, separador1, separador2) {
        var texto = fs.readFileSync(rutaArchivo, 'utf-8');
        var arreglotexto = texto.split(separador1);
        var arregloExamenes = [];
        for (var i = 0; i < arreglotexto.length; i++) {
            var linea = arreglotexto[i].split(separador2);
            arregloExamenes.push(new examenRendido_1["default"](linea[0], parseInt(linea[1])));
        }
        return arregloExamenes;
    };
    return Alumno;
}());
exports["default"] = Alumno;
