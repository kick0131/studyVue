import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '@/secrets/firebaseConfig';

export let firestoreDb = firebase.initializeApp(firebaseConfig).firestore();
