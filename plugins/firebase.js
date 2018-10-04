import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDDIPoi805dBMLXy2nSRh6xPyXM_J9G-dk",
    authDomain: "sample-nuxt.firebaseapp.com",
    databaseURL: "https://sample-nuxt.firebaseio.com",
    projectId: "sample-nuxt",
    storageBucket: "",
    messagingSenderId: "200216245054"
  })
}

export default firebase
