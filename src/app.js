import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoEGzMn78oA2Vj6ekwvY1KIN8e8bLH2E0",
  authDomain: "soaw-app.firebaseapp.comP",
  projectId: "soaw-app",
  storageBucket: "soaw-app.appspot.com",
  messagingSenderId: "405556551631",
  appId: "1:405556551631:web:19f15d80c6a846d27dfcba"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Login error: ", error);
    });
});
