
const idCodeRef = database.collection("codes").doc("codelist");
const users = database.collection("users");
const incorrectpwd = document.getElementById("incorrectpwd");
const VerifyUnusedCode = firebase.functions().httpsCallable('verifyUnusedCode');
var used = [];
var codes = [];

idCodeRef.get().then((doc)=>{
    if (doc.exists) {
        var cache = doc.data();
        codes = cache['codes'];
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        console.error();
    }
});

function verifyUID(){
    event.preventDefault();
    console.log(codes);
    var valid = true;
    var userCode = document.getElementById("myInput").value;
    var storage = window.sessionStorage;
    incorrectpwd.style.display = "none";

    if ((codes.indexOf(userCode) != -1)){
        sessionStorage.setItem("UID", userCode);
        VerifyUnusedCode({code: userCode}).then(
            (result)=>{
                if (result.data == true){
                    console.log("Valid Code");
                    location.href='profile page.html';
                }
                else{
                    incorrectpwd.style.display = "block";
                }
            }).catch((error) => {
                console.error("Couldn't add to used codes", error);
        });
    } else{
        incorrectpwd.style.display = "block";
    }
}