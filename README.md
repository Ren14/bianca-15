# 🌸 Tirada de Bianca — Invitación Digital

Invitación de 15 años para **Bianca Naciff** — 19 de Abril de 2026.

## Stack

| Tecnología | Versión | Rol |
|---|---|---|
| React | 18 | UI / componentes |
| Vite | 5 | Dev server + build |
| Tailwind CSS | 3 | Estilos utilitarios |

---

## 🚀 Setup inicial (una sola vez)

### Requisitos previos
- **Node.js 18+** → https://nodejs.org
- **npm** (viene con Node)

### Pasos

```bash
# 1. Entrar a la carpeta del proyecto
cd bianca-15

# 2. Instalar dependencias
npm install

# 3. Levantar servidor de desarrollo
npm run dev
```

Abrí el navegador en **http://localhost:5173** y vas a ver la invitación en vivo.

---

## 🛠️ Abrir con WebStorm

1. En WebStorm: **File → Open** → seleccioná la carpeta `bianca-15`
2. WebStorm detecta automáticamente el proyecto Vite/React
3. Abrí la terminal integrada (**Alt+F12**) y ejecutá `npm install` y luego `npm run dev`
4. WebStorm te ofrece abrir la URL directamente con el browser integrado

### Tip: Run Configuration en WebStorm
Podés crear una configuración para no tipear siempre el comando:
- **Run → Edit Configurations → + → npm**
- Script: `dev`
- Así ejecutás con un solo clic ▶️

---

## 📁 Estructura del proyecto

```
bianca-15/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── photos/          ← 📷 Agregar fotos reales acá
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── MusicButton.jsx
│   │   ├── Particles.jsx
│   │   └── UI.jsx           ← SectionTitle, Divider, InfoCard
│   ├── hooks/
│   │   └── useCountdown.js
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Countdown.jsx
│   │   ├── Message.jsx
│   │   ├── EventDetails.jsx
│   │   ├── Gallery.jsx
│   │   └── RSVP.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## ✏️ Cómo personalizar

### Cambiar datos del evento
Editá directamente los archivos de cada sección:
- `src/sections/EventDetails.jsx` → fecha, hora, lugar, dress code, link Maps
- `src/sections/Hero.jsx` → nombre, subtítulo
- `src/sections/Message.jsx` → texto del mensaje

### Agregar fotos reales
1. Copiá tus fotos a `src/assets/photos/`
2. En `src/sections/Gallery.jsx`, reemplazá los placeholders:
```jsx
import foto1 from '../assets/photos/foto1.jpg'
// ...
const PHOTOS = [
  { id: 1, src: foto1, alt: 'Descripción' },
  // ...
]
```

### Conectar música
En `src/components/MusicButton.jsx`:
```jsx
import bgMusic from '../assets/music/cancion.mp3'
const audio = new Audio(bgMusic)
// toggle: audio.play() / audio.pause()
```

### Cambiar colores
Los colores principales están en `src/index.css`. Los gradientes rosa/fucsia/violeta se pueden ajustar buscando los valores hex `#f472b6`, `#e879f9`, `#c084fc`.

---

## 🌐 Publicar online (gratis)

### Opción A — Netlify (recomendado, drag & drop)
```bash
npm run build       # genera la carpeta dist/
```
Arrastrá la carpeta `dist/` a https://app.netlify.com/drop → listo, URL pública al instante.

### Opción B — Vercel (con CLI)
```bash
npm install -g vercel
vercel
```

### Opción C — GitHub Pages
```bash
# En vite.config.js agregá: base: '/bianca-15/'
npm run build
# Subí el contenido de dist/ a la rama gh-pages
```

---

## 📋 Próximos pasos sugeridos

- [ ] Agregar fotos reales de Bianca
- [ ] Conectar música de fondo
- [ ] Agregar link de WhatsApp para confirmar asistencia
- [ ] Conectar el RSVP a Google Sheets o un backend
- [ ] Publicar en Netlify y compartir el link

---

Hecho con ❤️ para Bianca 🌸
