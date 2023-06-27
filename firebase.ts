import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0_pZdFmaoOKKOzJcH9-2bDxCKhVBYlDg",
  authDomain: "chatgpt-clone-8e282.firebaseapp.com",
  projectId: "chatgpt-clone-8e282",
  storageBucket: "chatgpt-clone-8e282.appspot.com",
  messagingSenderId: "793736605951",
  appId: "1:793736605951:web:779db10bc4b260e17a9cca",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
