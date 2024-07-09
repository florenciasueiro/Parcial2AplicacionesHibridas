import { z } from 'zod';

export const terrenoSchema = z.object({
    sku: z.string({
        required_error: 'El id del terreno es requerido'
    }),
    nombre: z.string({
        required_error: 'El nombre del terreno es requerido'
    }),
    precio: z.number({
        required_error: 'El precio del terreno es requerido'
    }),
    stock:z.number({
        required_error: 'El stock del terreno es requerido'
    }),
    descripcion: z.string({
        required_error: 'La descripción del terreno es requerida'
    }),
    fecha: z.string().regex(/^\d{4}-\d{2}-\d{2}$/i).optional()
});
