#7ma-Tarea-REACT-NEXT.JS

## Descripción

Este proyecto es una aplicación React que consume la API de **Breaking Bad Quotes** para mostrar citas aleatorias de la serie _Breaking Bad_. La app se compone de varios componentes: `BBApp`, `Quote`, y `Loader`, organizados para facilitar la estructura y funcionalidad de la aplicación.

La aplicación se destaca por usar _React Hooks_, la biblioteca _Axios_ para realizar solicitudes HTTP, y un _spinner_ personalizado para mejorar la experiencia del usuario.

## Componentes

1. **BBApp**: Componente principal donde se gestiona el estado de la cita y la carga de datos desde la API.
2. **Quote**: Componente responsable de mostrar la cita y el autor.
3. **Loader**: Componente artesanal para mostrar un spinner mientras se cargan las citas.

## API Utilizada

- **API de Breaking Bad Quotes**: La aplicación consume esta API para obtener citas aleatorias de los personajes de la serie.

## Tecnologías y Herramientas

- **React**: Se utiliza para la estructura de componentes y la gestión de estado con _Hooks_ (`useState`, `useEffect`).
- **Axios**: Biblioteca para realizar solicitudes HTTP, usada en lugar de `fetch` para mayor simplicidad y manejo de respuestas.
- **CSS Module**: Uso de módulos de CSS para mantener los estilos organizados y evitar conflictos globales.

## Aprendizajes y Desafíos

### Uso de Axios para Peticiones HTTP

- **Axios vs. Fetch**: En clase, aprendimos a utilizar `Axios`, una biblioteca no nativa de JavaScript, que facilita las peticiones HTTP y el manejo de respuestas en comparación con `fetch`.
- **Consola y Visualización**: Vimos cómo `Axios` simplifica el código y mejora la visualización de respuestas en la consola.

### Manejo Asincrónico con `async/await`

- Aprendimos a usar `async/await` para manejar las promesas en nuestras solicitudes. Esto hace que el código sea más legible y fácil de seguir en comparación con el uso de `.then()` y `.catch()`.

### Objetos Literales en JavaScript

- **Simplificación del Código**: Cuando una propiedad de un objeto tiene el mismo nombre que la variable que almacena su valor, es posible omitir el nombre de la propiedad para hacer el código más conciso (por ejemplo, `{ text, author }` en lugar de `{ text: text, author: author }`).

### Uso de `useEffect` y Carga de Información

- **Carga Inicial de Datos**: Con `useEffect`, cargamos una cita cuando el componente se monta, y mostramos un _spinner_ para indicar al usuario que los datos están en proceso de carga.
- **Spinner Personalizado**: Se diseñó un _spinner_ para indicar al usuario que se está cargando información.

### Estilos y Semántica

- **Estilos Consistentes**: Se decidió mantener los estilos de los componentes dentro de un módulo de CSS para evitar conflictos y asegurar un estilo coherente.
- **Conflictos Semánticos**: Fue importante identificar y evitar posibles conflictos de nombres, asegurando que los componentes y variables tengan nombres descriptivos y únicos.

### Duración del Spinner

- **Uso de `setTimeout`**: Se implementó un `setTimeout` para prolongar la visualización del _spinner_, mejorando la experiencia visual del usuario mientras espera la carga de datos.

### Manejo de Errores con `try/catch`

- Se introdujo la estructura de control `try/catch` para capturar y manejar posibles errores en la petición HTTP, mejorando la robustez de la aplicación en caso de que la API falle o se experimente un problema de red.

in process : https://7ma-tarea-react-next-js.vercel.app/
