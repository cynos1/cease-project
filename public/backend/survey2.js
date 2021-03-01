auth.onAuthStateChanged((user)=>{
    if (user){
        console.log('Signed In');
        databaseSurvey3ValuesToHTML(user.uid);
    }
    else{
        console.log('Not Signed In!');
    }
});

function databaseSurvey3ValuesToHTML(user_id){
    console.log(user_id);
    const user_module_ref = database.collection("modules").doc(user_id);
    const slider1 = document.getElementById("myRange");
    const slider2 = document.getElementById("myRange1");
    const slider3 = document.getElementById("myRange2");

    user_module_ref.get().then((doc)=>{
        const user_module = doc.data();
        const survey_options = user_module.module_1.survey_3.questions;

        slider1.value = survey_options[0];
        slider2.value = survey_options[1];
        slider3.value = survey_options[2];
    });
}


function HTMLtoDatabaseSurvey3(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);
    const slider1_value = document.getElementById("myRange").value;
    const slider2_value = document.getElementById("myRange1").value;
    const slider3_value = document.getElementById("myRange2").value;
    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_1.survey_3.completed = true;
        user_module.module_1.survey_3.questions[0] = slider1_value;
        user_module.module_1.survey_3.questions[1] = slider2_value;
        user_module.module_1.survey_3.questions[2] = slider3_value;

        return user_module_ref.set(user_module);
    });
}