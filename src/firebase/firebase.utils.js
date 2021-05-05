import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAH1L-jbO-Kvb62PygnbspKHgvTNx1LDao",
  authDomain: "kinpick-apparels.firebaseapp.com",
  projectId: "kinpick-apparels",
  storageBucket: "kinpick-apparels.appspot.com",
  messagingSenderId: "190216801051",
  appId: "1:190216801051:web:850f0ac9ad93a800d121be",
};

export const app = firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = app.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // query firestory if user exists
  const userRef = firestore.doc(`users/${userAuth.uid}`); // document ref
  const snapshot = await userRef.get(); // check if data exists

  console.log(`does user already exists? ${snapshot.exists}`);

  if (!snapshot.exists) {
    // create user
    const { displayName, email } = userAuth;
    const createdAt = Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error(`Error while creating the user: ${error}`);
    }
  }

  return userRef;
};

// google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
