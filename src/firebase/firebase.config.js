// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log('environment variable', import.meta.env.VITE.PASS);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;





/* 
apiKey: "AIzaSyBw2KcU02LjAeGkmTbxRsnjOmCW6QcVuTA",
  authDomain: "chef-recipe-hunter-assig-3eecf.firebaseapp.com",
  projectId: "chef-recipe-hunter-assig-3eecf",
  storageBucket: "chef-recipe-hunter-assig-3eecf.appspot.com",
  messagingSenderId: "433654898123",
  appId: "1:433654898123:web:ceca9afd99473a4fdf6a4e"
*/