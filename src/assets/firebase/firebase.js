// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// const firebaseConfig = {
//   apiKey: "AIzaSyD8_ilixun69vpuGoAC2cjCHvZJFCYLxP0",
//   authDomain: "shop-acc-bea47.firebaseapp.com",
//   projectId: "shop-acc-bea47",
//   storageBucket: "shop-acc-bea47.firebasestorage.app",
//   messagingSenderId: "294314318792",
//   appId: "1:294314318792:web:aaeef0cb3be2c0dda5befd",
//   measurementId: "G-6YT2EM1YKY"
// };

const firebaseConfig = {
  apiKey: "AIzaSyD8_ilixun69vpuGoAC2cjCHvZJFCYLxP0",
  authDomain: "shop-acc-bea47.firebaseapp.com",
  projectId: "shop-acc-bea47",
  storageBucket: "shop-acc-bea47.appspot.com",
  messagingSenderId: "294314318792",
  appId: "1:294314318792:web:aaeef0cb3be2c0dda5befd",
  measurementId: "G-6YT2EM1YKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Storage instance
export const storage = getStorage(app);
