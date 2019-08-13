export default class ExamenRendido {
    private asignatura: string;
    private nota: number;

    public constructor(asignatura: string, nota: number) {
        this.asignatura = asignatura;
        this.nota = nota;
    }

    public getAsignatura(): string {
        return this.asignatura;
    }

    public getNota(): number {
        return this.nota;
    }
}