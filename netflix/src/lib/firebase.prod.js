import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Uncomment this while seeding data i.e, inserting data
//import { seedDatabase } from '../seed';

//Add your firebase config values
const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
