import { Cliente } from './Cliente';

export interface Tarjeta{
    idTarjeta: number;
    numtarjeta: number;
    ccv: number;
    tiptarjeta: string;
    cliente: Cliente;
 }