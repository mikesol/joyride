const firebaseConfig = {
	apiKey: "AIzaSyBwnikO21-Mmj0WKLEwLYQ801X5MsJkmCw",
	authDomain: "joyri-de.firebaseapp.com",
	projectId: "joyri-de",
	storageBucket: "joyri-de.appspot.com",
	messagingSenderId: "58052920677",
	...(import.meta.env.VITE_FIREBASE_BUILD === "production" ? { databaseURL: "https://joyri-de-default-rtdb.europe-west1.firebasedatabase.app/" } : {}),
	appId: "1:58052920677:web:7bd22ca2a8b3e0423e8d8c",
	measurementId: "G-G6P7FY8QWJ",
};

// Initialize Firebase
export const firebaseApp = () => import("firebase/app").then(({ initializeApp }) =>
	initializeApp(firebaseConfig)
);