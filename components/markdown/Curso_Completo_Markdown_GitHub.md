# Curso Completo de Markdown para GitHub

> Guía práctica desde nivel básico hasta profesional.

# Índice

-   Encabezados
-   Formato de texto
-   Citas
-   Listas
-   Checklist
-   Enlaces
-   Imágenes
-   Código
-   Tablas
-   HTML en Markdown
-   Emojis
-   Badges
-   TOC
-   Anclas
-   GIFs
-   Acordeones
-   Alertas
-   Árbol de directorios
-   README profesional
-   Shields.io
-   GitHub Stats
-   Licencia

------------------------------------------------------------------------

# Encabezados

``` md
# Título 1
## Título 2
### Título 3
#### Título 4
##### Título 5
###### Título 6
```

**Sirve para:** Organizar el documento por niveles.

------------------------------------------------------------------------

# Formato de texto

``` md
**Negrita**
*Cursiva*
***Negrita + cursiva***
~~Tachado~~
`Código`
```

**Sirve para:** Resaltar información importante.

------------------------------------------------------------------------

# Citas

``` md
> Nota importante
```

**Sirve para:** Consejos, notas o advertencias.

------------------------------------------------------------------------

# Listas

``` md
- Uno
- Dos

1. Primero
2. Segundo

- Padre
  - Hijo
```

**Sirve para:** Organizar información.

------------------------------------------------------------------------

# Checklist

``` md
- [ ] Pendiente
- [x] Terminado
```

**Sirve para:** Roadmaps y tareas.

------------------------------------------------------------------------

# Enlaces

``` md
[GitHub](https://github.com)
```

**Sirve para:** Navegar hacia otros sitios.

------------------------------------------------------------------------

# Imágenes

``` md
![Logo](images/logo.png)
```

**Sirve para:** Mostrar capturas y recursos.

------------------------------------------------------------------------

# Código

```` md
```html
<h1>Hola</h1>
```

```css
body{}
```

```js
console.log("Hola")
```

```bash
git status
```

```json
{}
```
````

**Sirve para:** Mostrar código con colores.

------------------------------------------------------------------------

# Línea horizontal

``` md
---
```

------------------------------------------------------------------------

# Tablas

``` md
| Nombre | Edad |
|--------|-----:|
| Ana |20|
| Luis|25|
```

------------------------------------------------------------------------

# HTML dentro de Markdown

``` html
<center>Texto</center>

<kbd>Ctrl</kbd> + <kbd>C</kbd>

<sub>sub</sub>

<sup>sup</sup>

<br>
<hr>
```

**Sirve para:** Agregar funciones no soportadas por Markdown puro.

------------------------------------------------------------------------

# Emojis

``` md
🚀 📦 📖 📸 🔥 ⭐ 💻 🛠️ 📄 🎯
```

------------------------------------------------------------------------

# Badges (Shields.io)

``` md
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)

![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

![JS](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

![License](https://img.shields.io/badge/license-MIT-green)
```

**Sirve para:** Mostrar tecnologías y estado del proyecto.

------------------------------------------------------------------------

# Tabla de contenido

``` md
## Índice

- [Instalación](#instalación)
- [Uso](#uso)
- [Licencia](#licencia)
```

------------------------------------------------------------------------

# Anclas

``` md
## Instalación
```

Enlace:

``` md
[Ir](#instalación)
```

------------------------------------------------------------------------

# GIFs

``` md
![Demo](screenshots/demo.gif)
```

------------------------------------------------------------------------

# Acordeones

``` md
<details>

<summary>Mostrar</summary>

Contenido oculto.

</details>
```

------------------------------------------------------------------------

# Alertas

``` md
> [!NOTE]
> Nota.

> [!TIP]
> Consejo.

> [!IMPORTANT]
> Importante.

> [!WARNING]
> Advertencia.

> [!CAUTION]
> Precaución.
```

------------------------------------------------------------------------

# Árbol de carpetas

```` md
```text
Proyecto/
├── assets/
├── css/
├── js/
├── docs/
├── screenshots/
├── README.md
└── LICENSE
```
````

------------------------------------------------------------------------

# GitHub Stats

``` md
![Stats](https://github-readme-stats.vercel.app/api?username=USUARIO&show_icons=true)

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=USUARIO)
```

------------------------------------------------------------------------

# README Profesional

``` text
README.md
│
├── Badges
├── Descripción
├── Demo
├── Capturas
├── Tecnologías
├── Instalación
├── Uso
├── Roadmap
├── Contribuciones
├── Licencia
└── Autor
```

------------------------------------------------------------------------

# Plantilla Completa

``` md
# Proyecto

Badges

## 📖 Descripción

## 🚀 Demo

## ✨ Funcionalidades

## 🛠 Tecnologías

## 📂 Estructura

## ⚙ Instalación

## 💻 Uso

## 📸 Capturas

## 🗺 Roadmap

## 🤝 Contribuir

## 👤 Autor

## 📄 Licencia
```

------------------------------------------------------------------------

Fin de la guía.
