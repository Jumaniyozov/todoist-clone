import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyD_CHNbYCD7TQX7iAG9NxvoZb-N5nCxy-8",
    authDomain: "todoist-b4439.firebaseapp.com",
    projectId: "todoist-b4439",
    storageBucket: "todoist-b4439.appspot.com",
    messagingSenderId: "681839468057",
    appId: "1:681839468057:web:9311e065f71b5651d65488"
});

export {firebaseConfig as firebase};

