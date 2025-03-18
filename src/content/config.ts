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

export const collections = { circuitos };