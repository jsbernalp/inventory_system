export class HttpError extends Error {
    statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message); // Llama al constructor de la clase base `Error`
        this.statusCode = statusCode;
        this.name = this.constructor.name; // Establece el nombre de la clase en el error
    }
}