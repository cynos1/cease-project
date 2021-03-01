auth.onAuthStateChanged((user)=>{
    if (user){
        console.log('Signed In');
        processPageValues(user.uid);
    }
    else{
        console.log('Not Signed In!');
    }
});

function processPageValues(user_id){
    const user_module_ref = database.collection("modules").doc(user_id);
    const module1 = document.getElementById("module 1");
    const module2 = document.getElementById("module 2");
    const module3 = document.getElementById("module 3");

    const lesson1 = document.getElementById("lesson 1");
    const lesson2 = document.getElementById("lesson 2");
    const lesson3 = document.getElementById("lesson 3");
    const lesson4 = document.getElementById("lesson 4");
    const lesson5 = document.getElementById("lesson 5");
    const lesson6 = document.getElementById("lesson 6");
    const lesson7 = document.getElementById("lesson 7");

    user_module_ref.get().then((doc)=>{
        const user_module = doc.data();
        if (user_module.module_1.survey_1.completed){
            module1.style.display = "block";
            lesson1.style.display = "block";
        }
        if (user_module.module_1.lesson_1.completed){
            lesson2.style.display = "block";
        }
        if (user_module.module_1.lesson_2.completed){
            lesson3.style.display = "block";
        }
        if (user_module.module_1.lesson_3.completed){
            module2.style.display = "block";
            lesson4.style.display = "block";
        }
        if (user_module.module_2.lesson_4.completed){
            lesson5.style.display = "block";
        }
        if (user_module.module_2.lesson_5.completed){
            lesson6.style.display = "block";
        }
        if (user_module.module_2.lesson_6.completed){
            module3.style.display = "block";
            lesson7.style.display = "block";
        }
    });
}