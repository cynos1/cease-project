function completeVideoOnDatabaseQ1(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_1.lesson_1.quiz_1.video_watched = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}

function completeVideoOnDatabaseQ2(){
    const user = auth.currentUser;
    const user_module_ref = database.collection("modules").doc(user.uid);

    return user_module_ref.get().then((doc)=>{
        let user_module = doc.data();
        user_module.module_1.lesson_2.quiz_2.video_watched = true;
        return user_module_ref.set(user_module, {merge: true});
    });
}