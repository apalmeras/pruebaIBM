import { Tarjeta } from './Tarjeta';
export interface DetalleConsumo{
    idDetalleConsumo : number,
    tarjeta: Tarjeta;
    fecha: Date;
    descripcion: string;
    monto: number;
 }