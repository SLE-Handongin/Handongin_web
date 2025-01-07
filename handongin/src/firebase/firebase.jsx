import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getStorage } from "firebase/storage"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVcxUx6CaLIdpFBZW9MAi-PgllBbLTwwY",
  authDomain: "handongin-login.firebaseapp.com",
  projectId: "handongin-login",
  storageBucket: "handongin-login.firebasestorage.app",
  messagingSenderId: "693349683821",
  appId: "1:693349683821:web:a7f174a9cb4589af17e564",
  measurementId: "G-3WMZR9HX5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app); // Firestore 초기화
// export const storage = getStorage(app);

export default db;