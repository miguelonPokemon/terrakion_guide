# Terrakion Guide — Vite.js & GitHub Actions

Guía interactiva de Raid 4P para Terrakion modularizada con **Vite.js** y configurada para despliegue automático en **GitHub Pages**.

## 🚀 Despliegue en GitHub Pages
1. Sube este repositorio a GitHub.
2. En **Settings > Pages**, configura el Source en **Deploy from a branch** seleccionando la rama **`gh-pages`** y la carpeta `/(root)`.
3. Cada `git push` a `main` compilará y actualizará la web automáticamente mediante GitHub Actions.

## Ejecución Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```
