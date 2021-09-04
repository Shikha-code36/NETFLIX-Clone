import * as firebase from "firebase";

const firebaseConfig = {
  // paste your own firebase configuration here.
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export default auth;
