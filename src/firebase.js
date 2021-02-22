import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAsWQUG3Xal3gGy66iSOEmkfME33UY6XiM",
	authDomain: "snapchat-clone-df02e.firebaseapp.com",
	projectId: "snapchat-clone-df02e",
	storageBucket: "snapchat-clone-df02e.appspot.com",
	messagingSenderId: "948515417850",
	appId: "1:948515417850:web:4af6a516c094520516e343",
	measurementId: "G-FX6N9T6EZJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GithubAuthProvider();

export { db, auth, storage, provider };
