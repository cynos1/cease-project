
const messaging = firebase.messaging();
messaging.getToken({
    vapidKey: "BPdEZRDfNZ-SDASdOPxVRdHqMCsMM8SgFESzqS0EY_FiBdHJYesb8ATC3szZdlGugjnft9cPvqlfizDmXKNcOEk"
}).then((currentToken)=>{
    if (currentToken){

    }else{
        console.log("No registration token, request for permission to generate one.");
    }
}).catch((error)=>{
    console.log("Error occured with notification token! ", error);
});
messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    // ...
  });