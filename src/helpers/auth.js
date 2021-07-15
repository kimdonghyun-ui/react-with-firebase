import { auth } from "../services/firebase";

export function signUp(email, password) {
  console.log("가입", email, password);
  return auth().createUserWithEmailAndPassword(email, password);
}

export function signIn(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function logout() {
  return auth().signOut();
}

export function signInWithGoogle() {
  const provider = new auth.GoogleAuthProvider();
  // provider.setCustomParameters({ prompt: 'select_account' });
  return auth().signInWithPopup(provider);
}
