//const functions = require("firebase-functions");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
//exports.helloWorld = functions.https.onRequest((request, response) => {
  //functions.logger.info("Hello logs!", {structuredData: true});
 // response.send("Hello from Firebase!");
 //});

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
//default reference
const admin = require('firebase-admin');
// The Firebase Admin SDK to access Firestore.
admin.initializeApp();
const db = admin.firestore();

// The Cloud Functions
exports.verifyUnusedCode = functions.https.onCall((data, context) =>{
  const userRef = db.collection('users');
  return userRef.where('code', '==', data.code)
  .get()
  .then((snapshot)=>{
    if (snapshot.empty){
      return true
    }
    return false;
  })
  .catch((error)=>{
    return error;
  });
});

exports.userSignUp = functions.auth.user().onCreate(user=>{
  return admin.firestore().collection('users').doc('default').get().then(
    (doc) => {
      var achievements = doc.data().badges;
      admin.firestore().collection('users').doc(user.uid).set({
        email: user.email,
        badges: achievements,
      }, { merge: true });
    });
});

exports.userDeleted = functions.auth.user().onDelete(user=>{
  const doc = admin.firestore().collection('users').doc(user.uid);
  return doc.delete();
});