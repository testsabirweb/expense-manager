import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export { firebase, database as default }


database.ref('expenses')
    .on('value',(snapshot)=>{  //*****value is firebase event there are other also like child_removed,child_added,child_changed refer documentation */
        const expenses=[]
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id:childSnapshot.key,
                ...childSnapshot.val()
            })
        });
        console.log(expenses)
    })


// //
// // //
// // // database.ref('expenses').push({
// // //     description:'qwer',
// // //     note:'qwert',
// // //     amount:5,                      ///////inserting a array
// // //     createdAt:123434
// // // })
// database.ref().on('value',(snapshot)=>{     //*****value is firebase event there are other also like child_removed,child_added,child_changed refer documentation */
//     const val=snapshot.val()
//     console.log(val)                     ///////for reading data whenever database changes
// },(e)=>{
//     console.log('error:',e)
// })

// database.ref()
//     .once('value')
//     .then((snapshot)=>{
//         const val=snapshot.val()
//         console.log(val)                  /////for reading data only once
//     })
//     .catch((e)=>{
//         console.log('error occured:',e)
//     })

// database.ref().set({
//     name: 'sabir ali',
//     age: 22,
//     isSingle: true,
//     location: {
//         city: 'indore',
//         country: 'india'
//     }
// }).then(() => {
//     console.log('data is saved!')
// }).catch((e) => {
//     console.log('creation failed', e)
// })

// // database.ref()
// //     .remove()
// //     .then(() => {
// //         console.log('data is removed')
// //     }).catch((e) => {
// //         console.log('deletion failed', e)
// //     })

// 
// // 
// // // database.ref().update({
// // //     name:'something',
// // //     age:43,
// // //     job:'full stack',
// // //     'location/city':'khandwa'
// // // })