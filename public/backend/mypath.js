auth.onAuthStateChanged((user)=>{
    if (user){
        console.log('Signed In');
        //databaseSurvey2ValuesToHTML(user.uid);
    }
    else{
        console.log('Not Signed In!');
    }
});

function databaseSurvey2ValuesToHTML(user_id){
    console.log(user_id);
    const user_module_ref = database.collection("modules").doc(user_id);
    const slider1 = document.getElementById("myRange");
    const slider2 = document.getElementById("myRange1");
    const slider3 = document.getElementById("myRange2");

    user_module_ref.get().then((doc)=>{
        const user_module = doc.data();
        const survey_options = user_module.module_1.survey_1.questions;

        slider1.value = survey_options[0];
        slider2.value = survey_options[1];
        slider3.value = survey_options[2];
    });
}


function HTMLtoDatabaseSurvey2(){

    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);
    const mpfc = document.getElementsByName('improve');
    const my_path_textbox1 = document.getElementById('comments');
    const my_path_textbox2 = document.getElementById('comments1');
    const my_path_textbox3 = document.getElementById('comments2');
    const my_path_textbox4 = document.getElementById('comments3');
    const y = document.getElementById('y');
    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_1.survey_2.completed = true;
        let page1 = user_module.module_1.survey_2.page_1;
        let page2 = user_module.module_1.survey_2.page_2;
        let page3 = user_module.module_1.survey_2.page_3;
        let page4 = user_module.module_1.survey_2.page_4;
        
        //PAGE 1
        page1.emotional_triggers = [mpfc[0].checked, mpfc[1].checked, mpfc[2].checked, mpfc[3].checked];
        page1.routine_triggers = [mpfc[4].checked, mpfc[5].checked, mpfc[6].checked, mpfc[7].checked, mpfc[8].checked];
        page1.behavorial_triggers = [mpfc[9].checked, mpfc[10].checked, mpfc[11].checked, mpfc[12].checked, mpfc[13].checked];
        page1.extra = my_path_textbox1.value;

        //PAGE 2 
        page2.for_my_family = [mpfc[14].checked, mpfc[15].checked, mpfc[16].checked, mpfc[17].checked];
        page2.for_my_health = [mpfc[18].checked, mpfc[19].checked, mpfc[20].checked, mpfc[21].checked, mpfc[22].checked];
        page2.for_myself = [mpfc[23].checked, mpfc[24].checked, mpfc[25].checked, mpfc[26].checked, mpfc[27].checked, mpfc[28].checked];
        page2.extra = my_path_textbox2.value;

        //PAGE 3
        page3.social = [mpfc[29].checked, mpfc[30].checked, mpfc[31].checked];
        page3.eating = [mpfc[32].checked, mpfc[33].checked, mpfc[34].checked, mpfc[35].checked];
        page3.active = [mpfc[36].checked, mpfc[37].checked, mpfc[38].checked, mpfc[39].checked, mpfc[40].checked];
        page3.extra = my_path_textbox3.value;

        //PAGE 4
        page4.listing = my_path_textbox4.value;
        page4.tobacco_cost = y.value;

        // Module 1 complete!
        user_module.module_1.completed = true;
        return user_module_ref.set(user_module);
    });
}