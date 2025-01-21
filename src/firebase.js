import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; // Firestoreのインポート

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAM8J-_SleZsYfuRNw5XvajUFxCSWWkvrQ",
  authDomain: "line-clone-a5151.firebaseapp.com",
  projectId: "line-clone-a5151",
  storageBucket: "line-clone-a5151.appspot.com", // 修正: ストレージバケットのURLが間違っている
  messagingSenderId: "26302128359",
  appId: "1:26302128359:web:cec755974596d37ccd0242",
});

const db = firebaseApp.firestore(); // Firestoreインスタンス
const auth = firebase.auth(); // Authインスタンス

export { db, auth };
