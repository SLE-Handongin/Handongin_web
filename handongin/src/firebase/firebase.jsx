// Firebase SDK 가져오기
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Firestore 모듈 추가

// Firebase 설정 정보
const firebaseConfig = {
  apiKey: "AIzaSyDVcxUx6CaLIdpFBZW9MAi-PgllBbLTwwY",
  authDomain: "handongin-login.firebaseapp.com",
  projectId: "handongin-login",
  storageBucket: "handongin-login.firebasestorage.app",
  messagingSenderId: "693349683821",
  appId: "1:693349683821:web:a7f174a9cb4589af17e564",
  measurementId: "G-3WMZR9HX5C"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firebase 애널리틱스 초기화 (선택 사항)
const analytics = getAnalytics(app);

// Firestore 데이터베이스 초기화
export const db = getFirestore(app);

export default app;