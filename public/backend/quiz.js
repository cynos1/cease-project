function sendAnswerToDatabaseQ1(question_index, answer){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        let answer_array = user_module.module_1.lesson_1.quiz_1.answers;
        answer_array[question_index] = answer;
        return user_module_ref.set(user_module, {merge: true});
    });
}


function completeQuizOnDatabaseQ1(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_1.lesson_1.quiz_1.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}

function sendAnswerToDatabaseQ2(question_index, answer){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        let answer_array = user_module.module_1.lesson_2.quiz_2.answers;
        answer_array[question_index] = answer;
        return user_module_ref.set(user_module, {merge: true});
    });
}


function completeQuizOnDatabaseQ2(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_1.lesson_2.quiz_2.completed = true;
        user_module.module_1.lesson_2.completed = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}