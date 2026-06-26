import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBTOy3LL6fCAhYcqRzvvxCf27B4oaPf6UI",
  authDomain: "disco-scanner-mv7sv.firebaseapp.com",
  projectId: "disco-scanner-mv7sv",
  storageBucket: "disco-scanner-mv7sv.firebasestorage.app",
  messagingSenderId: "151862691574",
  appId: "1:151862691574:web:e37ff689009ec210d2ced7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    // Check if user exists in db
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);
    
    if (!userSnap.exists()) {
      await setDoc(userRef, {
        email: user.email,
        displayName: user.displayName,
        plan: 'Basic', // Default plan
        createdAt: new Date().toISOString()
      });
    }
  } catch (error) {
    console.error("Error signing in with Google", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out", error);
  }
};
