import * as firebase from "firebase";

const firebaseConfig = {
    // paste your own firebase configuration here.
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export default auth;