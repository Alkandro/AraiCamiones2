// import app from "firebase/compat/app";
// import "firebase/compat/firestore";

// import firebaseConfig from "./config";

// class Firebase {
//   constructor() {
//     if (!app.apps.length) {
//       app.initializeApp(firebaseConfig);
//       app.firestore().settings({ experimentalForceLongPolling: true });
//     }
//     this.db = app.firestore();
//   }
// }

// const firebase = new Firebase();
// export default firebase;

import app from "firebase/compat/app";
import "firebase/compat/firestore";

import firebaseConfig from "./config";

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);

      // Solo usa experimentalAutoDetectLongPolling
      app.firestore().settings({
        experimentalAutoDetectLongPolling: true,
        merge: true,
      });
    }
    this.db = app.firestore();
  }
}

const firebase = new Firebase();
export default firebase;

