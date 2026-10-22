# Proyecto para practicar

Este es un proyecto de Vanilla TypeScript en Vite, para trabajar los ejercicios del curso sobre Principios SOLID y CleanCode.

Clonar o descargar el proyecto y luego:

```
yarn install
ó
npm install
```

Para ejecutar el proyecto, simplemente ejecuten
```
yarn dev
ó
npm run dev
```

## Trabajar con ramas y commits

### 1. Crear una rama

Antes de cambiar de rama, revisa si tienes cambios pendientes:

```bash
git status
```

Guarda los cambios pendientes en un commit en la rama que corresponda. Luego, para crear una rama desde la versión actualizada de `main`:

```bash
git switch main
git pull --ff-only origin main
git switch -c nombre-rama
```

Reemplaza `nombre-rama` por el nombre que quieras. Si la rama ya existe, entra en ella sin volver a crearla:

```bash
git switch technical-debt
```

Cambiar de rama no fusiona los commits. Los cambios que todavía no tienen commit pueden acompañarte al cambiar de rama si Git lo permite.

### 2. Crear un commit y subir la rama

Después de editar los archivos, comprueba que estás en la rama correcta y revisa los cambios:

```bash
git branch --show-current
git status
git diff
```

Agrega únicamente los archivos que quieras incluir y crea el commit. Por ejemplo, para guardar un cambio en este README:

```bash
git add README.md
git commit -m "docs: documentar el flujo de trabajo con Git"
```

`git add` prepara los cambios y `git commit` los guarda en tu equipo. Para subir por primera vez la rama `technical-debt` a GitHub:

```bash
git push -u origin technical-debt
```

Si usaste otro nombre de rama, reemplaza `technical-debt` por ese nombre. La opción `-u` conecta la rama local con su rama remota. Después, desde esa misma rama, puedes subir nuevos commits con:

```bash
git push
```

### 3. Fusionar la rama con main

Cuando los cambios estén listos, deja la rama de trabajo sin cambios pendientes y ejecuta:

```bash
git switch main
git pull --ff-only origin main
git merge technical-debt
```

`git merge technical-debt` incorpora los commits de `technical-debt` a la rama actual, que en este caso es `main`. Si `main` no tiene commits nuevos, Git puede avanzar directamente al último commit de la otra rama sin crear un commit de merge.

Si aparecen conflictos, abre los archivos indicados, resuelve las diferencias y elimina las marcas de conflicto. Luego agrega los archivos resueltos y completa el merge:

```bash
git add ruta/del/archivo
git commit
```

Reemplaza `ruta/del/archivo` por cada archivo resuelto. Si prefieres cancelar el merge mientras está en conflicto, usa `git merge --abort`.

Revisa y prueba el resultado antes de publicar `main`:

```bash
git status
git log --oneline -5
git push origin main
```

Si GitHub exige revisión mediante un pull request, abre uno desde `technical-debt` hacia `main` y completa la fusión en GitHub.

### Comprobar que las ramas siguen a sus propias ramas remotas

```bash
git branch -vv
```

El seguimiento esperado es:

```text
main           → origin/main
technical-debt → origin/technical-debt
```

Las dos ramas pueden mostrar el mismo contenido después de una fusión. Los commits nuevos en `technical-debt` permanecerán en esa rama hasta que vuelvas a incorporarlos a `main`.
