// filepath: c:\Cursos\Astro5\react\src\content\config.ts
import { defineCollection, z } from "astro:content";

const circuitos = defineCollection({
    schema: z.object({
        Titulo: z.string(),
        Imagen: z.string(),
        Ubicación: z.string(),
        Longitud: z.string(),
        Vueltas: z.string(),
        Curvas: z.string(),
        Características: z.string(),
    }),
});

const pilotos = defineCollection({
    schema: z.object({
        imgcard: z.string(),
        imgbig: z.string(),
        nombre: z.string(),
        apellido: z.string(),
        nacionalidad: z.string(),
        edad: z.string(),
        altura: z.string(),
        peso: z.string(),
        equipo: z.string(),
        puntos: z.string(),
        titulos: z.string(),
    }),
});

export const collections = { circuitos , pilotos };