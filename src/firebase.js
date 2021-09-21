import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBGmSNWs0b55FXVxGjFaMRlQWoO-2LnGoA",
    authDomain: "slack-clone-react-20df5.firebaseapp.com",
    projectId: "slack-clone-react-20df5",
    storageBucket: "slack-clone-react-20df5.appspot.com",
    messagingSenderId: "102143648670",
    appId: "1:102143648670:web:afddab417f799348c5ec8f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider };