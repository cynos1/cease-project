function sendAnswerToDatabaseA1(question_index, answer){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        let answer_array = user_module.module_1.lesson_1.activity_1.answers;
        answer_array[question_index] = answer;
        return user_module_ref.set(user_module, {merge: true});
    });
}


function sendAnswerToDatabaseA13(name, option){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_2.lesson_4.activity_13.quit_buddy_name = name;
        user_module.module_2.lesson_4.activity_13.quit_buddy_relationship = option;
        return user_module_ref.set(user_module, {merge: true});
    });
}

function sendAnswerToDatabaseA15(question_index, answer){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        let answer_array = user_module.module_2.lesson_5.activity_15.answers;
        answer_array[question_index] = answer;
        return user_module_ref.set(user_module, {merge: true});
    });
}


function completeActivityOnDatabaseA1(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_1.lesson_1.activity_1.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}


function completeActivityOnDatabaseA2(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_1.lesson_1.activity_2.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}

function completeActivityOnDatabaseA3(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_1.lesson_1.activity_3.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}

function completeActivityOnDatabaseA4(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_1.lesson_1.activity_4.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}

function completeActivityOnDatabaseA5(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_1.lesson_1.activity_5.completed = true;
        user_module.module_1.lesson_1.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}

function completeActivityOnDatabaseA6(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_1.lesson_2.activity_6.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}

function completeActivityOnDatabaseA7(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_1.lesson_2.activity_7.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}

function completeActivityOnDatabaseA8(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_1.lesson_3.activity_8.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}

function completeActivityOnDatabaseA9(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_1.lesson_3.activity_9.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}

function completeActivityOnDatabaseA10(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_1.lesson_3.activity_10.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}

function completeActivityOnDatabaseA11(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_2.lesson_4.activity_11.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}

function completeActivityOnDatabaseA12(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_2.lesson_4.activity_12.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}

function completeActivityOnDatabaseA13(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_2.lesson_4.activity_13.completed = true;
        user_module.module_2.lesson_4.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}

function completeActivityOnDatabaseA14(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_2.lesson_5.activity_14.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}

function completeActivityOnDatabaseA15(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_2.lesson_5.activity_15.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}

function completeActivityOnDatabaseA16(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_2.lesson_5.activity_16.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}

function completeActivityOnDatabaseA17(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_2.lesson_5.activity_17.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}

function completeActivityOnDatabaseA18(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_2.lesson_5.activity_18.completed = true;
        user_module.module_2.lesson_5.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}

function completeActivityOnDatabaseForL6(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_2.lesson_6.completed = true;
        user_module.module_2.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}

function completeActivityOnDatabaseA19(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_3.lesson_7.activity_19.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}


function completeActivityOnDatabaseA20(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_3.lesson_7.activity_20.completed = true;
        user_module.module_3.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}