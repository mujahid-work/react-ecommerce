import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC9nowLX6ED3ejLyC1Sz2EIrvQmwWd38ic",
  authDomain: "react-ecommerce-db-22db0.firebaseapp.com",
  databaseURL: "https://react-ecommerce-db-22db0.firebaseio.com",
  projectId: "react-ecommerce-db-22db0",
  storageBucket: "react-ecommerce-db-22db0.appspot.com",
  messagingSenderId: "92488586663",
  appId: "1:92488586663:web:75001a806b876a9bc2d282",
  measurementId: "G-WDGBE7062D",
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
        ...additionalData,
      });
    } catch (error) {
      console.log("Error encountered while creating user", error.message);
    }
  }

  return userRef;
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
//     const collectionRef = firestore.collection(collectionKey);

//     const batch = firestore.batch();
//     objectsToAdd.forEach(element => {
//         const newDocRef = collectionRef.doc();
//         batch.set(newDocRef,element);
//     });

//     return await batch.commit();
// }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
