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

// google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
