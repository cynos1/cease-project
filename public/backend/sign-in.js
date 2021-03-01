const returnEmailUsername = firebase.functions().httpsCallable('sendEmailThroughUsername');

// taken from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function signIn(){
    event.preventDefault(); 
    const incorrect_password = document.getElementById("incorrectinfo");
    const invalid_username = document.getElementById("incorrectuser");
    const username_email = document.getElementById("myInput0").value;
    const password = document.getElementById("myInput1").value;
    incorrect_password.style.display = "hidden";
    invalid_username.style.display = "hidden";
    if (validateEmail(username_email)){
        auth.signInWithEmailAndPassword(username_email, password).then((credential)=>{
            console.log('signed in');
            location.href = 'modules.html';
        }).catch((error) => {
            console.log(error.message);
            incorrect_password.style.display = "block";
        });
    }else{
        returnEmailUsername({username: username_email}).then((result)=>{
            const email = result.data;
            if (email){
                auth.signInWithEmailAndPassword(email, password).then((credential)=>{
                    console.log('signed in');
                    location.href = 'modules.html';
                }).catch((error) => {
                    console.log(error.message); 
                    incorrect_password.style.display = "block";
                });
            }else{
                console.log("unvalid username");
                invalid_username.style.display = "block";
            }
        });
    }
}