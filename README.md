# is-test2025-web

Frontend minimalista hecho con **React + Vite + MUI DataGrid**, que muestra la información almacenada en la base de datos **SQLite** del proyecto principal `is-test-2025`.
Consume la API pública expuesta por el backend `is-test2025-srv`.

---

## Cómo levantar el proyecto con Docker

1. Clona el repositorio:

   ```bash
   git clone https://github.com/christiansum/is-test2025-web.git
   cd is-test2025-web
   ```

2. Construye la imagen:

   ```bash
   docker compose build
   ```

3. Inicia el contenedor:

   ```bash
   docker compose up -d
   ```

4. Abre el navegador:

   ```
   http://localhost:8080
   ```

> Asegúrate de que el backend (`is-test2025-srv`) esté corriendo en `http://localhost:3001`
> o cambia la variable `VITE_API_BASE_URL` en el archivo `.env` si usas otra dirección.

---

## Descripción

* **Framework:** React 18 + Vite
* **UI Library:** MUI X DataGrid (paginación integrada)
* **Funcionalidad:**

  * Obtiene datos de `/api/files` del backend
  * Muestra los resultados en tabla con paginación
  * Permite recargar y navegar entre páginas

---


Este frontend es completamente **autónomo**, listo para integrarse con el backend y desplegarse con un solo comando:

```bash
docker compose up -d
```
