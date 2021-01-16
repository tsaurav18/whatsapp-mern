import firebse from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVoQC7_VIF_as1Hubt1FDi3yQZcyo22VU",
    authDomain: "whatsapp-mern-d373f.firebaseapp.com",
    projectId: "whatsapp-mern-d373f",
    storageBucket: "whatsapp-mern-d373f.appspot.com",
    messagingSenderId: "661889203974",
    appId: "1:661889203974:web:3ecfc849f116cde4056887",
    measurementId: "G-NK4CPVB71H"
  };
  const firebseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth()
  export {auth}