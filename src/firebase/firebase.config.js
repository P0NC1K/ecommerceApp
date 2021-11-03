import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore,  collection, addDoc, getDocs, updateDoc, doc, serverTimestamp, setDoc, getDoc } from "firebase/firestore";

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

export default app
// const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });

// export const signInWithGoogle = () => signInWithPopup(auth, provider)

// async function addCollection(user, otherData) {

//     try {
//         const newDocUser = await setDoc(doc(firestore, 'users', 'user2'), {
//             userID: user.uid,
//             username : user.displayName
//         });
//         getCollection();
//     }
//     catch(e) {
//         console.error(e);
//     }
// }

// async function getCollection() {
//     const getQuerry = await getDocs(collection(firestore, 'users') );
    
//     getQuerry.forEach(user => {
//         console.log(user.id, user.data())
//     });
// }

// async function updateUserInfo(){
//     const userAndrei = doc(firestore, "users", "1iwl2r7h12nJrDzhdufe");
//     try {
//         await updateDoc(userAndrei, {
//             age: 16,
//             surname: 'Dolboeb',
//             timestamp: serverTimestamp(),
//             favorites: {color: "Black", sport: "Soccer"}
//         })

//         await updateDoc(userAndrei, {
//             'age' : 33,
//             'favorites.color' : "Blue"
//         })
//     }
//     catch(e) {
//         console.error(e);
//     }
// }
