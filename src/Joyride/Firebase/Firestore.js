// Initialize Cloud Firestore and get a reference to the service
export const firestoreDb = (app) => () =>
	import("firebase/firestore").then(({ getFirestore }) => {
		return getFirestore(
			import.meta.env.VITE_FIREBASE_BUILD === "production" ? app : undefined
		);
	});

const RIDES = "rides";
const TRACKS = "tracks";
const PROFILE = "profile";
const EVENTS = "events";
const MARKER1TIME = "marker1Time";
const MARKER2TIME = "marker2Time";
const MARKER3TIME = "marker3Time";
const MARKER4TIME = "marker4Time";
const MARKER1AUDIOURL = "marker1AudioUrl";
const MARKER2AUDIOURL = "marker2AudioUrl";
const MARKER3AUDIOURL = "marker3AudioUrl";
const MARKER4AUDIOURL = "marker4AudioUrl";
const LENGTH = "length";
const NAME = "name";
const USERNAME = "username";
const AVATARURL = "avatarURL";
const TITLE = "title";
const PRIVATE = "private";
const TAGS = "tags";
const COLUMN = "column";

export const turnOnRealtimePresence = (app) => (fsdb) => (auth) => () =>
	Promise.all([import("firebase/firestore"), import("firebase/database")]).then(([firestore, database]) => {
		var uid = auth.currentUser.uid;
		var db = database.getDatabase(import.meta.env.VITE_FIREBASE_BUILD === "production" ? app : undefined);
		if (import.meta.env.VITE_FIREBASE_BUILD !== "production") {
			database.connectDatabaseEmulator(db, "localhost", 9000);
		}

		var userStatusDatabaseRef = database.ref(db, '/status/' + uid);
		var isOfflineForDatabase = {
			state: 'offline',
			last_changed: database.serverTimestamp(),
		};

		var isOnlineForDatabase = {
			state: 'online',
			last_changed: database.serverTimestamp(),
		};

		var userStatusFirestoreRef = firestore.doc(fsdb, '/status/' + uid);

		// Firestore uses a different server timestamp value, so we'll 
		// create two more constants for Firestore state.
		var isOfflineForFirestore = {
			state: 'offline',
			last_changed: firestore.serverTimestamp(),
		};

		var isOnlineForFirestore = {
			state: 'online',
			last_changed: firestore.serverTimestamp(),
		};

		const retval = database.onValue(database.ref(db, '.info/connected'), function (snapshot) {

			if (snapshot.val() == false) {
				// Instead of simply returning, we'll also set Firestore's state
				// to 'offline'. This ensures that our Firestore cache is aware
				// of the switch to 'offline.'
				console.log('not connected to rtdb');
				firestore.setDoc(userStatusFirestoreRef, isOfflineForFirestore);
				return;
			};
			database.onDisconnect(userStatusDatabaseRef).set(isOfflineForDatabase).then(function () {
				console.log('connected to rtdb');
				database.set(userStatusDatabaseRef, isOnlineForDatabase);
				// We'll also add Firestore set here for when we come online.
				firestore.setDoc(userStatusFirestoreRef, isOnlineForFirestore);
			});
		});
		return () => {
			retval();
			database.onDisconnect(userStatusDatabaseRef).set(null);
		}
	})

export const addTrack = (db) => (track) => () =>
	import("firebase/firestore").then(({ collection, addDoc }) => {
		return addDoc(collection(db, TRACKS), track);
	});

export const forkTrack = (auth) => (db) => (trackID) => () =>
	Promise.all([getTrack(db)(trackID)(), getEvents(db)(trackID)()])
		.then(([track, events]) =>
			Promise.all([
				addTrack(db)({ owner: auth.currentUser.uid, ...track })(),
				Promise.resolve(events)
			])
		)
		.then(([doc, events]) =>
			Promise.all([
				...events.map((e) => addEvent(db)(doc.id)(e.data)()),
			])
		);

export const getTrack = (db) => (trackID) => () =>
	import("firebase/firestore").then(({ getDoc, doc }) => {
		return getDoc(doc(db, TRACKS, trackID)).then((r) => r.data());
	});
export const updateTrackTitle = (db) => (trackID) => (title) => () =>
	import("firebase/firestore").then(({ updateDoc, doc }) => {
		const update = {};
		update[TITLE] = title;
		return updateDoc(doc(db, TRACKS, trackID), update);
	});
export const updateTrackPrivate = (db) => (trackID) => (pvt) => () =>
	import("firebase/firestore").then(({ updateDoc, doc }) => {
		const update = {};
		update[PRIVATE] = pvt;
		return updateDoc(doc(db, TRACKS, trackID), update);
	});
export const addTagToTrack = (db) => (trackID) => (tag) => () =>
	import("firebase/firestore").then(({ updateDoc, arrayUnion, doc }) => {
		const update = {};
		update[TAGS] = arrayUnion(tag);
		return updateDoc(doc(db, TRACKS, trackID), update);
	});
export const removeTagFromTrack = (db) => (trackID) => (tag) => () =>
	import("firebase/firestore").then(({ updateDoc, arrayRemove, doc }) => {
		const update = {};
		update[TAGS] = arrayRemove(tag);
		return updateDoc(doc(db, TRACKS, trackID), update);
	});
export const addEvent = (db) => (trackID) => (event) => () =>
	import("firebase/firestore").then(({ collection, addDoc }) => {
		console.log(trackID, event);
		return addDoc(collection(db, TRACKS, trackID, EVENTS), event);
	});

export const getEvent = (db) => (trackID) => (eventID) => () =>
	import("firebase/firestore").then(({ getDoc, doc }) => {
		return getDoc(doc(db, TRACKS, trackID, EVENTS, eventID)).then((r) =>
			r.data()
		);
	});

export const getTracks = (auth) => (db) => () =>
	import("firebase/firestore").then(({ query, getDocs, collection, where }) => {
		const q = query(
			collection(db, TRACKS),
			where("owner", "==", auth.currentUser.uid)
		);
		return getDocs(q).then((querySnapshot) => {
			const data = [];
			querySnapshot.forEach((doc) => {
				data.push({ id: doc.id, data: doc.data() });
			});
			return data;
		});
	});

export const getProfile = (nothing) => (just) => (auth) => (db) => () =>
	import("firebase/firestore").then(({ getDoc, doc }) => {
		return getDoc(doc(db, PROFILE, auth.currentUser.uid)).then((r) =>
			r.exists() ? just(r.data()) : nothing
		);
	});

export const updateProfileUsername = (auth) => (db) => (username) => () =>
	import("firebase/firestore").then(({ setDoc, doc }) => {
		const update = { version: 0 };
		update[USERNAME] = username;
		return setDoc(doc(db, PROFILE, auth.currentUser.uid), update, { merge: true });
	});

export const updateProfileAvatarURL = (auth) => (db) => (avatarURL) => () =>
	import("firebase/firestore").then(({ setDoc, doc }) => {
		const update = { version: 0 };
		update[AVATARURL] = avatarURL;
		return setDoc(doc(db, PROFILE, auth.currentUser.uid), update, { merge: true });
	});

export const listenToProfile = (pusher) => (auth) => (db) => () => import("firebase/firestore").then(({ onSnapshot, doc }) => onSnapshot(doc(db, PROFILE, auth.currentUser.uid), (doc) =>
	doc.exists() && pusher(doc.data())()
));


export const getWhitelistedTracks = (auth) => (db) => () =>
	import("firebase/firestore").then(({ query, getDocs, collection, where }) => {
		const q = query(
			collection(db, TRACKS),
			where("whitelist", "array-contains", auth.currentUser.uid)
		);
		return getDocs(q).then((querySnapshot) => {
			const data = [];
			querySnapshot.forEach((doc) => {
				data.push({ id: doc.id, data: doc.data() });
			});
			return data;
		});
	});

export const getPublicTracks = (db) => () =>
	import("firebase/firestore").then(
		({ query, getDocs, collection, where, limit }) => {
			const q = query(
				collection(db, TRACKS),
				where("private", "==", false),
				limit(50)
			);
			return getDocs(q).then((querySnapshot) => {
				const data = [];
				querySnapshot.forEach((doc) => {
					data.push({ id: doc.id, data: doc.data() });
				});
				return data;
			});
		}
	);

export const getEvents = (db) => (trackID) => () =>
	import("firebase/firestore").then(({ query, getDocs, collection }) => {
		const q = query(collection(db, TRACKS, trackID, EVENTS));
		return getDocs(q).then((querySnapshot) => {
			const data = [];
			querySnapshot.forEach((doc) => {
				data.push({ id: doc.id, data: doc.data() });
			});
			return data;
		});
	});
export const updateEventName = (db) => (trackID) => (eventID) => (name) => () =>
	import("firebase/firestore").then(({ updateDoc, doc }) => {
		const update = {};
		update[NAME] = name;
		return updateDoc(doc(db, TRACKS, trackID, EVENTS, eventID), update);
	});
export const deleteName = (db) => (trackID) => (eventID) => () =>
	import("firebase/firestore").then(({ updateDoc, doc, deleteField }) => {
		const update = {};
		update[NAME] = deleteField();
		return updateDoc(doc(db, TRACKS, trackID, EVENTS, eventID), update);
	});
export const updateColumn = (db) => (trackID) => (eventID) => (column) => () =>
	import("firebase/firestore").then(({ updateDoc, doc }) => {
		const update = {};
		update[COLUMN] = column;
		return updateDoc(doc(db, TRACKS, trackID, EVENTS, eventID), update);
	});
export const deleteEvent = (db) => (trackID) => (eventID) => () =>
	import("firebase/firestore").then(({ deleteDoc, doc }) => {
		return deleteDoc(doc(db, TRACKS, trackID, EVENTS, eventID));
	});
export const updateMarker1Time =
	(db) => (trackID) => (eventID) => (time) => () =>
		import("firebase/firestore").then(({ updateDoc, doc }) => {
			const update = {};
			update[MARKER1TIME] = time;
			return updateDoc(doc(db, TRACKS, trackID, EVENTS, eventID), update);
		});
export const updateMarker1AudioUrl =
	(db) => (trackID) => (eventID) => (url) => () =>
		import("firebase/firestore").then(({ updateDoc, doc }) => {
			const update = {};
			update[MARKER1AUDIOURL] = url;
			return updateDoc(doc(db, TRACKS, trackID, EVENTS, eventID), update);
		});

export const updateMarker2Time =
	(db) => (trackID) => (eventID) => (time) => () =>
		import("firebase/firestore").then(({ updateDoc, doc }) => {
			const update = {};
			update[MARKER2TIME] = time;
			return updateDoc(doc(db, TRACKS, trackID, EVENTS, eventID), update);
		});
export const updateMarker2AudioUrl =
	(db) => (trackID) => (eventID) => (url) => () =>
		import("firebase/firestore").then(({ updateDoc, doc }) => {
			const update = {};
			update[MARKER2AUDIOURL] = url;
			return updateDoc(doc(db, TRACKS, trackID, EVENTS, eventID), update);
		});
export const updateMarker3Time =
	(db) => (trackID) => (eventID) => (time) => () =>
		import("firebase/firestore").then(({ updateDoc, doc }) => {
			const update = {};
			update[MARKER3TIME] = time;
			return updateDoc(doc(db, TRACKS, trackID, EVENTS, eventID), update);
		});
export const updateMarker3AudioUrl =
	(db) => (trackID) => (eventID) => (url) => () =>
		import("firebase/firestore").then(({ updateDoc, doc }) => {
			const update = {};
			update[MARKER3AUDIOURL] = url;
			return updateDoc(doc(db, TRACKS, trackID, EVENTS, eventID), update);
		});
export const updateMarker4Time =
	(db) => (trackID) => (eventID) => (time) => () =>
		import("firebase/firestore").then(({ updateDoc, doc }) => {
			const update = {};
			update[MARKER4TIME] = time;
			return updateDoc(doc(db, TRACKS, trackID, EVENTS, eventID), update);
		});
export const updateMarker4AudioUrl =
	(db) => (trackID) => (eventID) => (url) => () =>
		import("firebase/firestore").then(({ updateDoc, doc }) => {
			const update = {};
			update[MARKER4AUDIOURL] = url;
			return updateDoc(doc(db, TRACKS, trackID, EVENTS, eventID), update);
		});
export const updateLength = (db) => (trackID) => (eventID) => (length) => () =>
	import("firebase/firestore").then(({ updateDoc, doc }) => {
		const update = {};
		update[LENGTH] = length;
		return updateDoc(doc(db, TRACKS, trackID, EVENTS, eventID), update);
	});

//
export const addRide = (db) => (ride) => () =>
	import("firebase/firestore").then(({ collection, addDoc }) => {
		return addDoc(collection(db, RIDES), ride);
	});

export const getRide = (db) => (rideID) => () =>
	import("firebase/firestore").then(({ getDoc, doc }) => {
		return getDoc(doc(db, RIDES, rideID)).then((r) => r.data());
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

export const listenToRemoteChannelChanges = (db) => (rideID) => (pub) => () =>
	import("firebase/firestore").then(({ doc, onSnapshot }) =>
		onSnapshot(doc(db, RIDES, rideID), (doc) => {
			if (doc.metadata.hasPendingWrites) {
				// ignore, local
			} else {
				const toPublish = doc.data();
				pub(toPublish)();
			}
		})
	);

export const sendMyPointsAndPenaltiesToFirebaseImpl =
	(db) =>
		(auth) =>
			(rideID) =>
				(keyPoints) =>
					(keyPenalty) =>
						(points) =>
							(penalties) =>
								() =>
									import("firebase/firestore").then(({ updateDoc, doc }) => {
										const update = {};
										if (!auth.currentUser) {
											return Promise.reject(new Error("No current user"));
										}
										update[keyPoints] = points;
										update[keyPenalty] = penalties;
										return updateDoc(doc(db, RIDES, rideID), update);
									});
