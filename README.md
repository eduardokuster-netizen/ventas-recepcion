# Ventas en recepción — guía para publicarla

Archivos del proyecto:

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app completa |
| `firebase-config.js` | Tus datos de Firebase y tu correo de dueño (lo llenas tú) |
| `firestore.rules` | Reglas de seguridad de la base de datos (se pegan en Firebase) |

---

## Paso 1 — Crear el proyecto en Firebase

1. Entra a **console.firebase.google.com** → **Agregar proyecto** → nombre, por ejemplo `ventas-recepcion`. Puedes desactivar Google Analytics.
2. Menú **Compilación → Firestore Database → Crear base de datos** → modo **producción** → ubicación `us-east1` (o la más cercana) → Habilitar.
3. Menú **Compilación → Authentication → Comenzar** → pestaña **Método de acceso** y activa estos dos:
   - **Anónimo** (lo usan los celulares de las recepciones y de tus hijos)
   - **Correo electrónico/contraseña** (lo usas tú para entrar al Panel)
4. En **Authentication → Usuarios → Agregar usuario**, crea tu usuario de dueño con tu correo y una contraseña.

## Paso 2 — Pegar las reglas de seguridad

1. Abre `firestore.rules` y cambia `tu-correo@gmail.com` por el correo que creaste en el paso 1.4.
2. En Firebase: **Firestore Database → Reglas**, borra lo que hay, pega todo el contenido de `firestore.rules` y toca **Publicar**.

## Paso 3 — Llenar `firebase-config.js`

1. En Firebase: ⚙️ **Configuración del proyecto → General → Tus apps → ícono `</>` (Web)**. Ponle un nombre y regístrala. No necesitas Firebase Hosting.
2. Copia los valores de `firebaseConfig` (apiKey, authDomain, projectId, etc.) y pégalos en `firebase-config.js`.
3. En el mismo archivo, cambia `OWNER_EMAIL` por tu correo (el mismo del paso 2).

> La `apiKey` de Firebase no es secreta: la seguridad la dan las reglas del paso 2.

## Paso 4 — Subirlo a GitHub

1. En **github.com → New repository** → nombre `ventas-recepcion` → **Create repository**.
2. Toca **uploading an existing file**, arrastra los 3 archivos (`index.html`, `firebase-config.js`, `firestore.rules`) y este README → **Commit changes**.

## Paso 5 — Publicarlo en Vercel

1. En **vercel.com → Add New → Project** → importa el repositorio `ventas-recepcion`.
2. Framework Preset: **Other**. No cambies nada más → **Deploy**.
3. Te dará una dirección tipo `ventas-recepcion.vercel.app`.
4. De vuelta en Firebase: **Authentication → Configuración → Dominios autorizados → Agregar dominio** y pega `ventas-recepcion.vercel.app`.

Cada vez que cambies un archivo en GitHub, Vercel publica la nueva versión solo.

## Paso 6 — Primer uso

1. Abre la dirección de Vercel en tu celular → botón **Dueño** arriba → entra con tu correo y contraseña.
2. **Panel → Productos → "Cargar los 4 productos de Mateo y Matías"**, y luego ponle precio y foto a cada uno.
3. **Panel → Reponer** → guarda las 12 unidades por piso.
4. Abre la misma dirección en cada celular de recepción y en los de Mateo y Matías. Cada uno muestra un **código de 4 letras**.
5. En tu **Panel → Celulares**, asigna cada código a **Piso 1, 2, 3, Mateo o Matías**.
6. Consejo: en cada celular, del menú del navegador elige **"Agregar a pantalla de inicio"** para que quede como una app.

## Bueno saber

- Un celular que no está asignado no puede ver ni registrar nada.
- Si en un celular se borran los datos del navegador, mostrará un código nuevo: lo asignas otra vez y quitas el viejo.
- Si cierras sesión en tu celular (**Salir**), ese celular vuelve a ser un celular normal sin asignar.
- Las fotos se guardan reducidas dentro de la base de datos, así no necesitas Firebase Storage ni el plan de pago.
- El plan gratuito de Firebase (Spark) alcanza de sobra para este uso.
- Los datos que cargaste en la versión de prueba de Claude no se pasan solos: solo eran los 4 productos y se cargan con el botón del paso 6.2.
