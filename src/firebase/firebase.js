import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
//PONER ACA LA INFO DE SU APP
{
    apiKey: "AIzaSyDC-uW0AQikR9S4cWjsE_d5UY1JcnTZU48",
    authDomain: "tienda-de-deportes.firebaseapp.com",
    projectId: "tienda-de-deportes",
    storageBucket: "tienda-de-deportes.appspot.com",
    messagingSenderId: "717200378582",
    appId: "1:717200378582:web:d71a3a99078b300527d777"
  }
);
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}