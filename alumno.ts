import ExamenRendido from "./examenRendido";
import * as fs from 'fs';

export default class Alumno {
    private nombreAlumno: string;
    private numeroLegajo: number;
    private edad: number;
    private curso: string;
    private examenesRendidos: ExamenRendido[];

    public constructor(nombreAlumno: string, numeroLegajo:number, edad: number, curso: string, examenesRendidos?: ExamenRendido[]) {
        this.nombreAlumno = nombreAlumno;
        this.numeroLegajo = numeroLegajo;
        this.edad = edad;
        this.curso = curso;
        this.examenesRendidos = examenesRendidos;

        if (examenesRendidos == undefined) {
            this.examenesRendidos = this.leerExamenesDesdeArchivo('./examenesRendidos.txt', '\r\n', ',')
        }
    }

    public getNombreAlumno(): string {
        return this.nombreAlumno;
    }

    public getNumeroLegajo(): number {
        return this.numeroLegajo;
    }

    public getEdadAlumno(): number {
        return this.edad;
    }

    public getCursoAlumno(): string {
        return this.curso;
    }

    public getPromedioAlumno(): number {
        let suma: number = 0
        if (this.examenesRendidos.length > 0) {
            for (let i = 0; i < this.examenesRendidos.length; i++) {
                suma = suma + this.examenesRendidos[i].getNota()
            }
            return (suma / this.examenesRendidos.length)
        }
        else return null;
    }

    private leerExamenesDesdeArchivo(rutaArchivo:string, separador1:string, separador2:string): ExamenRendido[] {
        let texto: string = fs.readFileSync(rutaArchivo, 'utf-8');
        let arreglotexto: string[] = texto.split(separador1);
        let arregloExamenes: ExamenRendido[] = [];
        for(let i=0; i<arreglotexto.length; i++) {
            let linea: string[] = arreglotexto[i].split(separador2);
            arregloExamenes.push(new ExamenRendido(linea[0], parseInt(linea[1])));
        }
        return arregloExamenes;
    }

}