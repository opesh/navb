// const uname = 'opeoluwa';
// const password = 'opeoluwa';
// let btnStart = document.getElementById('card');
// let inputUnmae = document.getElementById('user');
// let inputPass = document.getElementById('pass');
// let wrongdetails = document.getElementById('wrong-details');
// let correctdetails = document.getElementById('correct-details');


// const check = function (){
//     // inputUnmae == uname && inputPass == password ? alert('correct') : 'Passwords do not match';
//     if(inputUnmae == uname && inputPass == password){
//        alert('User login successfully');
//     } else {
//         wrongdetails.innerHTML =('incorrect information');
//     }
// }

// btnStart.addEventListener('click', check);
let date = new Date();
let day = date.getDay(),
hour = date.getHours(),
munites = date.getMinutes(),
seconds = date.getSeconds();

let time = function () {
    console.log(`date: ${hour} : ${munites} : ${seconds}`);
}

time();


let btnStart = document.getElementById("card");
function check(){
    const uname = 'opeoluwa';
    const pass = 2222;
    let inputuname = document.getElementById("user");
    let inputpass = document.getElementById("pass");
    let rdetails = document.getElementById("correct-details");
    let wdetails = document.getElementById("wrong-details");
    let username = inputuname.value;
    let password = inputpass.value;
    if(username === uname && Number(password) === pass){
        rdetails.innerHTML = ('user login successfully');
        document.querySelector('#contain').style.display = 'none';
        document.querySelector('#contain2').style.display = 'block';
    }else{
        wdetails.innerHTML = ('user login failed');
    }      
}
const answer = []
function displayRadioValue(){
    var ele = document.getElementsByName('radio1');
    for (const val of ele) {
        if (val.checked) {
            answer.push(val.value);
        } 
    }
}

displayRadioValue();



setTimeout(() => {
    // console.log(displayRadioValue())
    console.log(answer)
}, 15000);

function addAnswerToLocalStorage(){
    let answers = getAnswerFromStorage();
    answers.push(answer);
    localStorage.setItem("answers", JSON.stringify(answers));
    console.log(answers);
}
function getAnswerFromStorage(){
    let answers;
    const answersLS = localStorage.getItem("answers");
    if(answersLS === null){
        answers = [];
    }
    else{
        answers = JSON.parse(answersLS);
    }
    return answers;
}

btnStart.addEventListener('click', check);


let btnStart_1 = document.getElementById('prev2');
let btnstart_2 = document.getElementById('next1');

function question2(){
    document.querySelector('#contain2').style.display = 'none';
    document.querySelector('#contain3').style.display = 'block';
}

btnstart_2.addEventListener('click',question2)

function prevquestion2(){
    document.querySelector('#contain2').style.display = 'block';
    document.querySelector('#contain3').style.display = 'none';
}
btnStart_1.addEventListener('click',prevquestion2);

let btnStart_3= document.getElementById('prev3');
let btnStart_4 = document.getElementById('next2');

function question3(){
    document.querySelector('#contain3').style.display = 'none';
    document.querySelector('#contain4').style.display = 'block';

}
btnStart_4.addEventListener('click', question3);

function prevquestion3(){
    document.querySelector('#contain3').style.display = 'block';
    document.querySelector('#contain4').style.display = 'none';
}
btnStart_3.addEventListener('click',prevquestion3);

let btnStart_5= document.getElementById('prev4');
let btnStart_6 = document.getElementById('next3');

function question4(){
    document.querySelector('#contain4').style.display = 'none';
    document.querySelector('#contain5').style.display = 'block';

}
btnStart_6.addEventListener('click', question4);

function prevquestion4(){
    document.querySelector('#contain4').style.display = 'block';
    document.querySelector('#contain5').style.display = 'none';
}
btnStart_5.addEventListener('click',prevquestion4);

let btnStart_7= document.getElementById('prev5');
let btnStart_8 = document.getElementById('next4');

function question5(){
    document.querySelector('#contain5').style.display = 'none';
    document.querySelector('#contain6').style.display = 'block';

}
btnStart_8.addEventListener('click', question5);

function prevquestion5(){
    document.querySelector('#contain5').style.display = 'block';
    document.querySelector('#contain6').style.display = 'none';
}
btnStart_7.addEventListener('click',prevquestion5);

let btnStart_9= document.getElementById('prev6');
let btnStart_10 = document.getElementById('next5');

function question6(){
    document.querySelector('#contain6').style.display = 'none';
    document.querySelector('#contain7').style.display = 'block';

}
btnStart_10.addEventListener('click', question6);

function prevquestion6(){
    document.querySelector('#contain6').style.display = 'block';
    document.querySelector('#contain7').style.display = 'none';
}
btnStart_9.addEventListener('click',prevquestion6);

let btnStart_11= document.getElementById('prev7');
let btnStart_12 = document.getElementById('next6');

function question7(){
    document.querySelector('#contain7').style.display = 'none';
    document.querySelector('#contain8').style.display = 'block';

}
btnStart_12.addEventListener('click', question7);

function prevquestion7(){
    document.querySelector('#contain7').style.display = 'block';
    document.querySelector('#contain8').style.display = 'none';
}
btnStart_11.addEventListener('click',prevquestion7);

let btnStart_13= document.getElementById('prev8');
let btnStart_14 = document.getElementById('next7');

function question8(){
    document.querySelector('#contain8').style.display = 'none';
    document.querySelector('#contain9').style.display = 'block';

}
btnStart_14.addEventListener('click', question8);

function prevquestion8(){
    document.querySelector('#contain8').style.display = 'block';
    document.querySelector('#contain9').style.display = 'none';
}
btnStart_13.addEventListener('click',prevquestion8);


