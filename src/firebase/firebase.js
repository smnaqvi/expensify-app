import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     const database = firebase.database();
     const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
     export { firebase,googleAuthProvider, database as default}; 






    // database.ref('expenses')
    //         .once('value')
    //         .then((snapshot) => {
    //             const expenses = []
    //             snapshot.forEach((childSnapshot) => {
    //                 expenses.push({
    //                     id: childSnapshot.key,
    //                     ...childSnapshot.val()
    //                 });
    //             });
    //             console.log(expenses)
    //         });

    // database.ref('expenses').push({
    //     description : "rent",
    //     note: '',
    //     amount: 8999,
    //     createdAt: 9121829
    // });

    

    // // database.ref()
    // //         .once('value')
    // //         .then((snapshot) => {
    // //           const val =  snapshot.val();
    // //           console.log(val)s
    // //         })
    // //         .catch((e) => {
    // //             console.log('error:',e)
    // //         });

    // // const onValueChange =  database.ref().on('value', (snapshot) => {
    // //     console.log(snapshot.val())
    // // }, (e) => {
    // //     console.log('error with fetching',e)
    // // });

    // // setTimeout(() => {
    // //     database.ref('age').set(29);
    // // },3500);

    // // setTimeout(() => {
    // //     database.ref().off()
    // // },3500);


    // // setTimeout(() => {
    // //     database.ref('age').set(31);
    // // },3500);


    // // database.ref().set({
    // //     name: 'Syed Naqvi',
    // //     age: 23,
    // //     isAvailable: true,
    // //     stressLevel: 6,
    // //     job: {
    // //         title : 'SWE',
    // //         location : 'London'
    // //     }
    // // }).then(() => {
    // //     console.log('data is saved')
    // // }).catch((e) => {
    // //     console.log('error:',e)
    // // })

    // // database.ref().update({
    // //     stressLevel: 9,
    // //     'job/location' : 'Toronto'
    // // });

    // // console.log('change data');