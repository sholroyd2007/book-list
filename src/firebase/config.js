import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBbICQr_lBGpk3WDjiJYlkTReH-ov31npg",
    authDomain: "fb9-reading-list-3a89d.firebaseapp.com",
    projectId: "fb9-reading-list-3a89d",
    storageBucket: "fb9-reading-list-3a89d.appspot.com",
    messagingSenderId: "1077485355543",
    appId: "1:1077485355543:web:e6afaa5f92a47cd613d252"
  };

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()

export { db, auth }
