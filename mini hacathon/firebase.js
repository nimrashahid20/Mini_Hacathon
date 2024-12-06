
 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth , 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    signOut,
    signInWithPopup, } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js'
    import { getFirestore ,setDoc,addDoc,serverTimestamp,collection,} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js"
  const firebaseConfig = {
    apiKey: "AIzaSyDaXTsaoEdTi54yZPxcP5z-3kvwq1kWKhU",
    authDomain: "fir-project-90e99.firebaseapp.com",
    projectId: "fir-project-90e99",
    storageBucket: "fir-project-90e99.firebasestorage.app",
    messagingSenderId: "931307349530",
    appId: "1:931307349530:web:f4ef0e23f8eebcad2b13a3",
    measurementId: "G-04H5RNGH8J"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

export{ auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    signOut,
    signInWithPopup, setDoc,addDoc,serverTimestamp,collection,db}