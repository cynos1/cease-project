
const incorrectpwd = document.getElementById("incorrectpwd");
const VerifyUnusedCode = firebase.functions().httpsCallable('verifyUnusedCode');

function verifyUID(){
    event.preventDefault();
    var userCode = document.getElementById("myInput").value;
    incorrectpwd.style.display = "none";
    VerifyUnusedCode({code: userCode}).then(
        (result)=>{
            if (result.data == true){
                console.log("Valid Code");
                sessionStorage.setItem("UID", userCode);
                location.href='Edit_Profile___1.html';
            }
            else{
                incorrectpwd.style.display = "block";
            }
        }).catch((error) => {
            console.error("Couldn't add to used codes", error);
    });

}