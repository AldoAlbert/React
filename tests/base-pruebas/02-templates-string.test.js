import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en el archivo 02', () => {
    test('getSaludo debe retornar "Hola Aldo"', () => {
        
        const name = 'Aldo';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}!!`);

    })
})