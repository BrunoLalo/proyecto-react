import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { ChakraProvider } from '@chakra-ui/react'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrP8DXncuN70FADs8rojEgLQJ0mvq0Opk",
  authDomain: "potterstore-7cfe7.firebaseapp.com",
  projectId: "potterstore-7cfe7",
  storageBucket: "potterstore-7cfe7.appspot.com",
  messagingSenderId: "146927521411",
  appId: "1:146927521411:web:fb4fb56fa74d2fe0e055b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>

    <App />

  </ChakraProvider>
)
