import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_w79SwzXmi0BjiqD4N1hHdrgAnx2N7Yk",
  authDomain: "linkedin-clone-yt-c9f7f.firebaseapp.com",
  databaseURL: "https://linkedin-clone-yt-c9f7f-default-rtdb.firebaseio.com",
  projectId: "linkedin-clone-yt-c9f7f",
  storageBucket: "linkedin-clone-yt-c9f7f.appspot.com",
  messagingSenderId: "476940920795",
  appId: "1:476940920795:web:b28c88d8993494c53ba9fe",
  measurementId: "G-12GX4FHT3V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

//const app = initializeApp(config);
//const firebaseApp = firebase.initializeApp(firebaseConfig);
//const firebaseApp = initializeApp(firebaseConfig);
//const db = firebaseApp.firestore();
//const auth = auth();
//export { db, auth };

//const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
//
//const auth = getAuth();
//export { db, auth };
