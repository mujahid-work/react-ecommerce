import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCbUPYykCqcTwDvpPThoNuoiQJEwZZnhKM",
    authDomain: "react-ecommerce-db-c99cd.firebaseapp.com",
    databaseURL: "https://react-ecommerce-db-c99cd.firebaseio.com",
    projectId: "react-ecommerce-db-c99cd",
    storageBucket: "react-ecommerce-db-c99cd.appspot.com",
    messagingSenderId: "1025549945205",
    appId: "1:1025549945205:web:65686da2fc398cc8b06b3c",
    measurementId: "G-10YTXFB552"
};

export const createUserDoc = async (userAuth, additionalData) => {

    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {

        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error encountered while creating user', error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
