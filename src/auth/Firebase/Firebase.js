import app from 'firebase/app'
import { firebaseConfig } from '../../config/firebase'

export const Firebase = () => app.initializeApp(firebaseConfig)

export default Firebase;

