const signupForm = document.querySelector("#CEASE-signup-form");

const users = database.collection("users");
const codes = database.collection("codes");

function authorizeAccount(){
    var UID = sessionStorage.getItem("UID");
    
    var usernameUsed = false;

    const userEmailPhone = document.getElementById("email/phone-textbox").value;
    const userName = document.getElementById("username-textbox").value;
    const nonconfirmedPwd = document.getElementById("password-1-textbox").value;
    const confirmedPwd = document.getElementById("password-2-textbox").value;

    
    //all of the hidden elements to show
    const emailWarningDiv = document.getElementById('used-email-password');
    const usernameWarningDiv = document.getElementById('used-username');
    const passwordWarningDiv = document.getElementById('unmatching-passwords');
    const emptyError = document.getElementById('empty-error');

    if (userEmailPhone.length == 0 ||userName.length == 0 || nonconfirmedPwd == 0 || confirmedPwd == 0){
        emptyError.style.display = "block";
        return false;
    }

    const return_func = async() =>{
        let snapshot = await database.collection('users').where("username", "==", userName).get();
        if (snapshot.docs.length){
            usernameWarningDiv.style.display = "block";
        }   
        else if (nonconfirmedPwd != confirmedPwd){
            passwordWarningDiv.style.display = "block";
        }
        else{
            auth.createUserWithEmailAndPassword(userEmailPhone, confirmedPwd).then(
                (userCredentials)=>{
                    var user = userCredentials.user;
                    user.updateProfile({displayName: userName});
                    user_created = true;
                    sessionStorage.setItem("User", user);
                    users.doc(user.uid).set({
                        username: userName,
                        code: UID,
                    }, { merge: true }).then(
                        ()=>{
                            console.log("Added to user profile.");
                            location.href='modulesurvey.html';
                        }).catch((error) => {
                            console.error("Profile doesn't exist: ", error);
                    });
                }
            ).catch((error)=>{
                if (error.code == 'auth/email-already-in-use'){
                    emailWarningDiv.style.display = "block";
                }
            });
        }
    }
    return return_func();
}