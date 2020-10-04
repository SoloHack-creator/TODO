
import firebase from "firebase"
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDsA0UH5Sz9yhtM_1Z0jDuPwiWQ6pYthyU",
    authDomain: "todo-app-cp-6dd3c.firebaseapp.com",
    databaseURL: "https://todo-app-cp-6dd3c.firebaseio.com",
    projectId: "todo-app-cp-6dd3c",
    storageBucket: "todo-app-cp-6dd3c.appspot.com",
    messagingSenderId: "378904454842",
    appId: "1:378904454842:web:26a08f1d24aea0fb4fc483",
    measurementId: "G-FVJYWXF47V"

});

const db=firebaseApp.firestore();

export default db
