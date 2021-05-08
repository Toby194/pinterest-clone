import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCHWDCgfunv_DjcvpnXF37k5Ji6mXhe-TE",
  authDomain: "pinterest-clone-d8cb3.firebaseapp.com",
  projectId: "pinterest-clone-d8cb3",
  storageBucket: "pinterest-clone-d8cb3.appspot.com",
  messagingSenderId: "50498409087",
  appId: "1:50498409087:web:e5477359d31c30d9b7a54a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GithubAuthProvider();

export { auth, provider };
export default db;
