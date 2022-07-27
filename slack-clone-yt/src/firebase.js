import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD8XGXDYOn9Cl6fERvwli45TGz5rODAS68",
    authDomain: "slack-clone-yt-aca5a.firebaseapp.com",
    projectId: "slack-clone-yt-aca5a",
    storageBucket: "slack-clone-yt-aca5a.appspot.com",
    messagingSenderId: "653989452729",
    appId: "1:653989452729:web:fd7da8a3c80bc9488cf468"
  };

  const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 export const auth = getAuth();
 export const provider = new GoogleAuthProvider();
 provider.setCustomParameters({ prompt: 'select_account' });

  // export {auth,db};