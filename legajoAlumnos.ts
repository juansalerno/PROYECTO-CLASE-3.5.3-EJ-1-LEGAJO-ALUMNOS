import Alumno from './alumno';
import ExamenRendido from './examenRendido';
import * as fs from 'fs';

export default class LegajoAlumnos {
    private listadoAlumnos: Alumno[]

    public constructor(alumnos?: Alumno[]) {
        this.listadoAlumnos = alumnos;
        if(alumnos == undefined) {
            this.listadoAlumnos = this.leerAlumnosDesdeArchivo('listadoAlumnos.txt', '\r\n', ',');
        }
    }

    public getAlumnosTotales(): Alumno[] {
        return this.listadoAlumnos;
    }

    public agregarAlumno(alumno: Alumno): void {
        try {
            let legajo = alumno.getNumeroLegajo()
            if (this.buscarEnListado(legajo) != null) {
                throw new Error('El alumno ya se encuentra en el listado')
            }
            this.listadoAlumnos.push(alumno);
        }
        catch (error) {
            console.log(error.message);
        }
    }

    public eliminarAlumno(alumno: Alumno): void {
        try {
            let legajo = alumno.getNumeroLegajo()
            let indiceAlumno = this.buscarEnListado(legajo);
            if (indiceAlumno == null) {
                throw new Error('El alumno no se encuentra en el listado')
            }
            this.listadoAlumnos.splice(indiceAlumno, 1);
        }
        catch (error) {
            console.log(error.message);
        }
    }

    public getAlumnoDeterminado(id: number): Alumno {
        for(let i=0; i<this.listadoAlumnos.length; i++) {
            if(id == this.listadoAlumnos[i].getNumeroLegajo()) {
                return this.listadoAlumnos[i];
            }
        }
        return null;
    }

    public getPromedioAlumnos(): number {
        let suma: number = 0;
        for(let i=0; i<this.listadoAlumnos.length; i++) {
            suma = suma + this.listadoAlumnos[i].getPromedioAlumno();
        }
        return suma/this.listadoAlumnos.length;
    }

    public getPromedioAlumnoDeterminado(alumno: Alumno): number {
        try {
            let id = alumno.getNumeroLegajo()
            let indiceAlumno = this.buscarEnListado(id);
            if (indiceAlumno == null) {
                throw new Error('El alumno no se encuentra en el listado')
            }
            return this.listadoAlumnos[indiceAlumno].getPromedioAlumno();
        }
        catch (error) {
            console.log(error.message);
        }
    
    }

    private buscarEnListado(legajo: number): number {
        for (let i = 0; i < this.listadoAlumnos.length; i++) {
            if (legajo == this.listadoAlumnos[i].getNumeroLegajo()) {
                return i;
            }
        }
        return null
    }

    private leerAlumnosDesdeArchivo(rutaArchivo:string, separador1:string, separador2:string): Alumno[] {
        let texto: string = fs.readFileSync(rutaArchivo, 'utf-8');
        let arreglotexto: string[] = texto.split(separador1);
        let arregloAlumnos: Alumno[] = [];
        let examenRendido1: ExamenRendido
        let examenRendido2: ExamenRendido
        let examenRendido3: ExamenRendido
        let examenesRendidos: ExamenRendido[] = []
        for(let i=0; i<arreglotexto.length; i++) {
            let linea: string[] = arreglotexto[i].split(separador2);
            examenRendido1 = new ExamenRendido(linea[4], parseInt(linea[5]))
            examenRendido2= new ExamenRendido(linea[6], parseInt(linea[7]))
            examenRendido3 = new ExamenRendido(linea[8], parseInt(linea[9]))
            examenesRendidos.push(examenRendido1);
            examenesRendidos.push(examenRendido2);
            examenesRendidos.push(examenRendido3);
            arregloAlumnos.push(new Alumno(linea[0], parseInt(linea[1]), parseInt(linea[2]), linea[3], examenesRendidos));
            examenesRendidos = [];
        }
        return arregloAlumnos;
}
}