import firebase from 'firebase/compat/app';


const firebaseConfig = {
    apiKey: "AIzaSyD510XCvivc0xQP_eFKDH_XMgED9LB2y-8",
    authDomain: "netflix-clone-51e81.firebaseapp.com",
    projectId: "netflix-clone-51e81",
    storageBucket: "netflix-clone-51e81.appspot.com",
    messagingSenderId: "607679489324",
    appId: "1:607679489324:web:efb9f73d2fb5d6f83df889"
  };

  //  const firebaseapp = firebase.initializeApp(firebaseConfig)

  //  const db = firebaseapp.firestore()

  //  const auth = firebase.auth()

  //  export {auth};
  //  export default db

  // const app = !firebase.apps.length
  // ? firebase.initializeApp(firebaseConfig)
  // : firebase.app();

   const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore;
  const auth = app.auth;
 
   export { auth };
   export default db;