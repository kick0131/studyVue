<script>
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '@/secrets/firebaseConfig';

firebase.initializeApp(firebaseConfig);
export default {
  db: firebase.firestore()
};
</script>
