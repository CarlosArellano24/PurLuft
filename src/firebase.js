import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    GoogleAuthProvider, 
    FacebookAuthProvider,
    signInWithRedirect, 
    signOut,
    connectAuthEmulator
} from 'firebase/auth';

// import { useRouter } from 'vue-router';

const config = {
    apiKey: "AIzaSyB59QXwzGzzlc1DlIq4bn-8rGYNl-YEFIQ",
    authDomain: "red-purificadores.firebaseapp.com",
    databaseURL: "https://red-purificadores-default-rtdb.firebaseio.com",
    projectId: "red-purificadores",
    storageBucket: "red-purificadores.appspot.com",
    messagingSenderId: "465692295067",
    appId: "1:465692295067:web:63afb8986188b79c06eb3e",
    measurementId: "G-YQG5EHENT8"
};

const app = initializeApp(config);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

if (location.hostname === 'localhost') {
    connectAuthEmulator(auth, 'http://localhost:9099')
}

export { 
    auth, 
    googleAuthProvider,
    signInWithRedirect,
    signOut,
    facebookAuthProvider
};