import * as readlineSync from './node_modules/readline-sync';
import * as fs from 'fs';
import Alumno from './alumno';
import ExamenRendido from './examenRendido';
import LegajoAlumnos from './legajoAlumnos';

let alumnos: Alumno[] = []

let alumno1 = new Alumno('Juan Perez', 1, 15, 'B'); //alta alumno por codigo y examenes desde archivo
alumnos.push(alumno1);

let examenesPabloLopez: ExamenRendido[] = [] // alta alumno y examenes por codigo
examenesPabloLopez.push(new ExamenRendido('Geografia', 7));
examenesPabloLopez.push(new ExamenRendido('Matematica', 9));
examenesPabloLopez.push(new ExamenRendido('Contabilidad', 4));
examenesPabloLopez.push(new ExamenRendido('Biologia', 10));
examenesPabloLopez.push(new ExamenRendido('Lengua', 5));

let alumno2 = new Alumno('Pablo Lopez', 2, 16, 'C', examenesPabloLopez);
alumnos.push(alumno2);

//alta alumno y examenes por teclado: 

let opcionAltaTeclado = readlineSync.question('Ingrese 1 para agregar un alumno o presione "ENTER" para salir: ');
while (opcionAltaTeclado != '') {
    if (opcionAltaTeclado == 1) {

        let nombreAlumno3 = readlineSync.question('Ingrese el nombre del alumno: ');
        let legajoAlumno3 = readlineSync.questionInt('Ingrese el numero de legajo del alumno: ');
        let edadAlumno3 = readlineSync.questionInt('Ingrese la edad del alumno: ');
        let cursoAlumno3 = readlineSync.question('Ingrese el curso donde está del alumno: ');

        let examenesAlumno3: ExamenRendido[] = []

        let asignaturaExamen1Alumno = readlineSync.question('Ingrese la asignatura del examen 1 del alumno: ');
        let notaExamen1Alumno = readlineSync.questionInt('Ingrese la nota del examen 1 del alumno: ');

        examenesAlumno3.push(new ExamenRendido(asignaturaExamen1Alumno, notaExamen1Alumno));

        let asignaturaExamen2Alumno = readlineSync.question('Ingrese la asignatura del examen 2 del alumno: ');
        let notaExamen2Alumno = readlineSync.questionInt('Ingrese la nota del examen 2 del alumno: ');

        examenesAlumno3.push(new ExamenRendido(asignaturaExamen2Alumno, notaExamen2Alumno));

        let asignaturaExamen3Alumno = readlineSync.question('Ingrese la asignatura del examen 3 del alumno: ');
        let notaExamen3Alumno = readlineSync.questionInt('Ingrese la nota del examen 3 del alumno: ');

        examenesAlumno3.push(new ExamenRendido(asignaturaExamen3Alumno, notaExamen3Alumno));

        let asignaturaExamen4Alumno = readlineSync.question('Ingrese la asignatura del examen 4 del alumno: ');
        let notaExamen4Alumno = readlineSync.questionInt('Ingrese la nota del examen 4 del alumno: ');

        examenesAlumno3.push(new ExamenRendido(asignaturaExamen4Alumno, notaExamen4Alumno));

        let asignaturaExamen5Alumno = readlineSync.question('Ingrese la asignatura del examen 5 del alumno: ');
        let notaExamen5Alumno = readlineSync.questionInt('Ingrese la nota del examen 5 del alumno: ');

        examenesAlumno3.push(new ExamenRendido(asignaturaExamen5Alumno, notaExamen5Alumno));

        let alumno3 = new Alumno(nombreAlumno3, legajoAlumno3, edadAlumno3, cursoAlumno3, examenesAlumno3);
        alumnos.push(alumno3);
    }
    opcionAltaTeclado = readlineSync.question('Ingrese 1 para agregar un alumno o presione "ENTER" para salir: ');
}

// pruebas de ejecucion: 

let legajoAlumnos1: LegajoAlumnos = new LegajoAlumnos(alumnos); //legajo armado con alumnos dados de alta por codigo y teclado


console.log(legajoAlumnos1.getAlumnosTotales());

console.log(' ');

console.log(alumno1.getPromedioAlumno() + '\r\n');

console.log(legajoAlumnos1.getPromedioAlumnos());

console.log(' ');

console.log(legajoAlumnos1.getPromedioAlumnoDeterminado(alumno2));

legajoAlumnos1.eliminarAlumno(alumno1);

console.log(legajoAlumnos1.getAlumnosTotales());

console.log('-------------------------------------------------');


let legajoAlumnos2: LegajoAlumnos = new LegajoAlumnos(); // legajo armado con alumnos y examenes desde archivo


console.log(legajoAlumnos2.getAlumnosTotales());

console.log(' ');

console.log(legajoAlumnos2.getAlumnoDeterminado(1312).getPromedioAlumno() + '\r\n');

console.log(legajoAlumnos2.getPromedioAlumnos());

console.log(' ');

let alumnoAEliminar = legajoAlumnos2.getAlumnoDeterminado(15742)
legajoAlumnos2.eliminarAlumno(alumnoAEliminar);

console.log(legajoAlumnos2.getAlumnosTotales());