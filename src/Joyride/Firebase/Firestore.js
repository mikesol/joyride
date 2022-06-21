// Initialize Cloud Firestore and get a reference to the service
export const firestoreDb = (app) => () =>
	import("firebase/firestore").then(({ getFirestore }) => {
		console.log("get firestore");
		return getFirestore(app);
	});

const RIDES = "rides";

export const addRide = (db) => (ride) => () =>
	import("firebase/firestore").then(({ collection, addDoc }) => {
		console.log("addRide", ride);
		return addDoc(collection(db, RIDES), ride);
	});
export const getRide = (db) => (ride) => () =>
	import("firebase/firestore").then(({ getDoc, doc }) => {
		console.log("getRide", db, RIDES, ride);
		return getDoc(doc(db, RIDES, ride)).then((r) => r.data());
	});

export const claimPlayer = (auth) => (db) => (ride) => (player) => () =>
	import("firebase/firestore").then(({ updateDoc, doc }) => {
		const update = {};
		if (!auth.currentUser) {
			return Promise.reject(new Error("No current user"));
		}
		update[player] = auth.currentUser.uid;
		console.log("claimPlayer", ride, player);
		return updateDoc(doc(db, RIDES, ride), update);
	});

export const removeUndefineds = (obj) => JSON.parse(JSON.stringify(obj));

export const listenToRemoteChannelChanges = (db) => (chan) => (pub) => () =>
	import("firebase/firestore").then(({ doc, onSnapshot }) =>
		onSnapshot(doc(db, RIDES, chan), (doc) => {
			if (doc.metadata.hasPendingWrites) {
				// ignore, local
			} else {
				const toPublish = doc.data();
				console.log('publishing', chan, toPublish);
				pub(toPublish)();
			}
		})
	);

export const sendMyPointsAndPenaltiesToFirebaseImpl =
	(db) => (auth) => (chan) => (keyPoints) => (keyPenalty) => (points) => (penalties) => () =>
		import("firebase/firestore").then(({ updateDoc, doc }) => {
			const update = {};
			if (!auth.currentUser) {
				return Promise.reject(new Error("No current user"));
			}
			update[keyPoints] = points;
			update[keyPenalty] = penalties;
			console.log("sendMyPointsAndPenaltiesToFirebaseImpl", chan, update);
			return updateDoc(doc(db, RIDES, chan), update);
		});
