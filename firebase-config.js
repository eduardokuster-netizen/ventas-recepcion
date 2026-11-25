// 1) Pega aquí los datos de tu app web de Firebase
//    (Firebase → Configuración del proyecto → Tus apps → SDK setup and configuration → Config)
export const firebaseConfig = {
  apiKey: "AIzaSyC1OJONcGk5PMK5JQ3cP_stZkkYhXoCjoI",
  authDomain: "ventas-recepcion.firebaseapp.com",
  projectId: "ventas-recepcion",
  storageBucket: "ventas-recepcion.firebasestorage.app",
  messagingSenderId: "778217813896",
  appId: "1:778217813896:web:400b8e1ee7e226f130ac3d"
};

// 2) El correo con el que tú (el dueño) vas a entrar al Panel.
//    Debe ser EXACTAMENTE el mismo que pongas en firestore.rules.
export const OWNER_EMAIL = "eduardokuster@gmail.com";
