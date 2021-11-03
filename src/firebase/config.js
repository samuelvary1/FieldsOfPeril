import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDMOkcSR4tslnvI6gXiAHExbWFgDo5uVgE',
  authDomain: 'fields-of-peril-3ea19.firebaseapp.com',
  databaseURL: 'https://fields-of-peril-3ea19.firebaseio.com',
  projectId: 'fields-of-peril-3ea19',
  storageBucket: 'fields-of-peril-3ea19.appspot.com',
  messagingSenderId: '439759482827',
  appId: '1:439759482827:ios:f37e6ae6c2edd1f160d04e',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
