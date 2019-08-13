"use strict";
exports.__esModule = true;
var readlineSync = require("./node_modules/readline-sync");
var alumno_1 = require("./alumno");
var examenRendido_1 = require("./examenRendido");
var legajoAlumnos_1 = require("./legajoAlumnos");
var alumnos = [];
var alumno1 = new alumno_1["default"]('Juan Perez', 1, 15, 'B'); //alta alumno por codigo y examenes desde archivo
alumnos.push(alumno1);
var examenesPabloLopez = []; // alta alumno y examenes por codigo
examenesPabloLopez.push(new examenRendido_1["default"]('Geografia', 7));
examenesPabloLopez.push(new examenRendido_1["default"]('Matematica', 9));
examenesPabloLopez.push(new examenRendido_1["default"]('Contabilidad', 4));
examenesPabloLopez.push(new examenRendido_1["default"]('Biologia', 10));
examenesPabloLopez.push(new examenRendido_1["default"]('Lengua', 5));
var alumno2 = new alumno_1["default"]('Pablo Lopez', 2, 16, 'C', examenesPabloLopez);
alumnos.push(alumno2);
//alta alumno y examenes por teclado: 
var opcionAltaTeclado = readlineSync.question('Ingrese 1 para agregar un alumno o presione "ENTER" para salir: ');
while (opcionAltaTeclado != '') {
    if (opcionAltaTeclado == 1) {
        var nombreAlumno3 = readlineSync.question('Ingrese el nombre del alumno: ');
        var legajoAlumno3 = readlineSync.questionInt('Ingrese el numero de legajo del alumno: ');
        var edadAlumno3 = readlineSync.questionInt('Ingrese la edad del alumno: ');
        var cursoAlumno3 = readlineSync.question('Ingrese el curso donde está del alumno: ');
        var examenesAlumno3 = [];
        var asignaturaExamen1Alumno = readlineSync.question('Ingrese la asignatura del examen 1 del alumno: ');
        var notaExamen1Alumno = readlineSync.questionInt('Ingrese la nota del examen 1 del alumno: ');
        examenesAlumno3.push(new examenRendido_1["default"](asignaturaExamen1Alumno, notaExamen1Alumno));
        var asignaturaExamen2Alumno = readlineSync.question('Ingrese la asignatura del examen 2 del alumno: ');
        var notaExamen2Alumno = readlineSync.questionInt('Ingrese la nota del examen 2 del alumno: ');
        examenesAlumno3.push(new examenRendido_1["default"](asignaturaExamen2Alumno, notaExamen2Alumno));
        var asignaturaExamen3Alumno = readlineSync.question('Ingrese la asignatura del examen 3 del alumno: ');
        var notaExamen3Alumno = readlineSync.questionInt('Ingrese la nota del examen 3 del alumno: ');
        examenesAlumno3.push(new examenRendido_1["default"](asignaturaExamen3Alumno, notaExamen3Alumno));
        var asignaturaExamen4Alumno = readlineSync.question('Ingrese la asignatura del examen 4 del alumno: ');
        var notaExamen4Alumno = readlineSync.questionInt('Ingrese la nota del examen 4 del alumno: ');
        examenesAlumno3.push(new examenRendido_1["default"](asignaturaExamen4Alumno, notaExamen4Alumno));
        var asignaturaExamen5Alumno = readlineSync.question('Ingrese la asignatura del examen 5 del alumno: ');
        var notaExamen5Alumno = readlineSync.questionInt('Ingrese la nota del examen 5 del alumno: ');
        examenesAlumno3.push(new examenRendido_1["default"](asignaturaExamen5Alumno, notaExamen5Alumno));
        var alumno3 = new alumno_1["default"](nombreAlumno3, legajoAlumno3, edadAlumno3, cursoAlumno3, examenesAlumno3);
        alumnos.push(alumno3);
    }
    opcionAltaTeclado = readlineSync.question('Ingrese 1 para agregar un alumno o presione "ENTER" para salir: ');
}
// pruebas de ejecucion: 
var legajoAlumnos1 = new legajoAlumnos_1["default"](alumnos); //legajo armado con alumnos dados de alta por codigo y teclado
console.log(legajoAlumnos1.getAlumnosTotales());
console.log(' ');
console.log(alumno1.getPromedioAlumno() + '\r\n');
console.log(legajoAlumnos1.getPromedioAlumnos());
console.log(' ');
console.log(legajoAlumnos1.getPromedioAlumnoDeterminado(alumno2));
legajoAlumnos1.eliminarAlumno(alumno1);
console.log(legajoAlumnos1.getAlumnosTotales());
console.log('-------------------------------------------------');
var legajoAlumnos2 = new legajoAlumnos_1["default"](); // legajo armado con alumnos y examenes desde archivo
console.log(legajoAlumnos2.getAlumnosTotales());
console.log(' ');
console.log(legajoAlumnos2.getAlumnoDeterminado(1312).getPromedioAlumno() + '\r\n');
console.log(legajoAlumnos2.getPromedioAlumnos());
console.log(' ');
var alumnoAEliminar = legajoAlumnos2.getAlumnoDeterminado(15742);
legajoAlumnos2.eliminarAlumno(alumnoAEliminar);
console.log(legajoAlumnos2.getAlumnosTotales());
