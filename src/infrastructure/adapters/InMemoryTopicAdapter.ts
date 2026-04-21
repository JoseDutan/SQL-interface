import type { Topic } from '../../domain/models/Topic';
import type { TopicPort } from '../../domain/ports/TopicPort';

const TOPICS: Topic[] = [
  // Curso
  {
    id: 'curso-1',
    sectionId: 'curso',
    title: 'Introducción a SQL',
    description: 'Conoce qué es SQL y por qué es fundamental en bases de datos.',
    content:
      'SQL (Structured Query Language) es el lenguaje estándar para gestionar bases de datos relacionales. Permite crear, leer, actualizar y eliminar datos de forma eficiente.',
  },
  {
    id: 'curso-2',
    sectionId: 'curso',
    title: 'SELECT - Consultas básicas',
    description: 'Aprende a extraer datos de una tabla con SELECT.',
    content:
      'La sentencia SELECT se utiliza para seleccionar datos de una base de datos. Ejemplo: SELECT nombre, edad FROM estudiantes;',
  },
  {
    id: 'curso-3',
    sectionId: 'curso',
    title: 'WHERE - Filtrar resultados',
    description: 'Filtra registros usando condiciones con WHERE.',
    content:
      'WHERE se usa para filtrar registros que cumplen una condición. Ejemplo: SELECT * FROM estudiantes WHERE edad > 20;',
  },
  {
    id: 'curso-4',
    sectionId: 'curso',
    title: 'INSERT INTO - Insertar datos',
    description: 'Aprende a agregar nuevos registros a una tabla.',
    content:
      'INSERT INTO permite agregar filas. Ejemplo: INSERT INTO estudiantes (nombre, edad) VALUES (\'Ana\', 22);',
  },
  {
    id: 'curso-5',
    sectionId: 'curso',
    title: 'UPDATE - Actualizar datos',
    description: 'Modifica registros existentes en una tabla.',
    content:
      'UPDATE modifica datos existentes. Ejemplo: UPDATE estudiantes SET edad = 23 WHERE nombre = \'Ana\';',
  },
  {
    id: 'curso-6',
    sectionId: 'curso',
    title: 'DELETE - Eliminar registros',
    description: 'Elimina registros de una tabla de forma segura.',
    content:
      'DELETE elimina filas. Ejemplo: DELETE FROM estudiantes WHERE nombre = \'Ana\'; Siempre usa WHERE para evitar borrar todo.',
  },
  // Actividades
  {
    id: 'actividad-1',
    sectionId: 'actividad',
    title: 'Práctica SELECT',
    description: 'Escribe consultas SELECT para obtener datos.',
    content:
      'Ejercicio: Escribe una consulta que devuelva todos los nombres de la tabla "productos" cuyo precio sea mayor a 100.',
  },
  {
    id: 'actividad-2',
    sectionId: 'actividad',
    title: 'Práctica INSERT',
    description: 'Practica la inserción de datos en tablas.',
    content:
      'Ejercicio: Inserta un nuevo registro en la tabla "clientes" con nombre "Carlos" y ciudad "Guayaquil".',
  },
  {
    id: 'actividad-3',
    sectionId: 'actividad',
    title: 'Práctica WHERE',
    description: 'Practica el uso de filtros con WHERE.',
    content:
      'Ejercicio: Selecciona los empleados cuyo salario sea mayor a 1500 y que pertenezcan al departamento "Ventas".',
  },
  // Evaluaciones
  {
    id: 'evaluacion-1',
    sectionId: 'evaluacion',
    title: 'Evaluación - Consultas básicas',
    description: 'Demuestra tus conocimientos en SELECT y WHERE.',
    content:
      'Pregunta 1: ¿Cuál es la sintaxis correcta para seleccionar todas las columnas de una tabla llamada "empleados"?\n\nA) SELECT empleados\nB) SELECT * FROM empleados\nC) GET * FROM empleados\nD) SELECT ALL empleados',
  },
  {
    id: 'evaluacion-2',
    sectionId: 'evaluacion',
    title: 'Evaluación - Manipulación de datos',
    description: 'Evalúa tus habilidades con INSERT, UPDATE y DELETE.',
    content:
      'Pregunta 1: ¿Cuál sentencia se usa para agregar nuevos registros?\n\nA) ADD INTO\nB) INSERT INTO\nC) CREATE ROW\nD) NEW RECORD',
  },
];

export class InMemoryTopicAdapter implements TopicPort {
  getTopicsBySectionId(sectionId: string): Topic[] {
    return TOPICS.filter((t) => t.sectionId === sectionId);
  }

  getTopicById(id: string): Topic | undefined {
    return TOPICS.find((t) => t.id === id);
  }
}
