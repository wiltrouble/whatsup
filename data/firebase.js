import firebase from "firebase";
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default {
    firebase,
    db
}