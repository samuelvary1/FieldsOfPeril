import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBSf6Oi6tsZCY8PJx588XezL_0ZpCn6B10',
  authDomain: 'fields-of-peril.firebaseapp.com',
  databaseURL: 'https://fields-of-peril.firebaseio.com',
  projectId: 'fields-of-peril',
  storageBucket: 'fields-of-peril.appspot.com',
  messagingSenderId: '918616759858',
  appId: '1:918616759858:ios:4fd93c52ddad17ebd8e62b',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
