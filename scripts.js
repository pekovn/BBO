import { newObj, clubs } from './data.js';
console.log(clubs);
let res1 = document.querySelector('.res1');
let res2 = document.querySelector('.res2');
let res3 = document.querySelector('.res3');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let input11 = document.getElementById('input11');
let input12 = document.getElementById('input12');
let input13 = document.getElementById('input13');
let input14 = document.getElementById('input14');
let input15 = document.getElementById('input15');
let input16 = document.getElementById('input16');
let input17 = document.getElementById('input17');
let input18 = document.getElementById('input18');
let input19 = document.getElementById('input19');
let input20 = document.getElementById('input20');
let roundClocked = document.getElementById('input24');
let currRound = document.getElementById('currRound');
let input21 = document.querySelectorAll('.percent div input');
let toResult = document.querySelector('.toResult');
let userName = document.querySelector('.userName input');
let user = document.querySelector('#user');
const char = String.fromCharCode(171);
const char2 = String.fromCharCode(187);

user.addEventListener('click', () => {
    if (userName.value == '') {
        return
    }
    input1.value = `!H!H Good morning, ladies and gentlemen !H ${userName.value} here - tell me as soon as possible in case of an issue :) !H!H`
    input2.value = `!H!H Good afternoon, ladies and gentlemen !H ${userName.value} here - tell me as soon as possible in case of an issue :) !H!H`
    input3.value = `!H!H Good evening, ladies and gentlemen !H ${userName.value} here - tell me as soon as possible in case of an issue :) !H!H`
})

//!H Round 3 has started !H
toResult.addEventListener('click', () => {

    let nameN = newObj[input15.value.toLowerCase()];
    let nameS = newObj[input16.value.toLowerCase()];

    let nameE = newObj[input17.value.toLowerCase()];
    let nameW = newObj[input18.value.toLowerCase()];
    let counterRounds = currRound.value;
    let winners;
    let second;
    let third;
    let currentResult;
    let nameFirstN = newObj[input15.value.toLowerCase()];
    let nameFirstS = newObj[input16.value.toLowerCase()];
    let percent1 = `${input21[0].value}%`;

    let nameSecondN = newObj[input17.value.toLowerCase()];
    let nameSecondS = newObj[input18.value.toLowerCase()];
    let percent2 = `${input21[1].value}%`;;
    let nameThirdN = newObj[input19.value.toLowerCase()];
    let nameThirdS = newObj[input20.value.toLowerCase()];
    // let round = `!H!HRound ${char}${counterRounds}${char2} has started:`;
    let round;
    if (counterRounds == 'last') {
        roundClocked.value = `!H${counterRounds} ${char}round${char2}  has started !H`;
        currentResult = `!HLast ${char}round${char2} has started:${nameN} and ${nameS} on the top, followed by ${nameE} and ${nameW}!H!H`;

    } else if (counterRounds == '') {
        currentResult = `!HRound ${char}2${char2} has started:${nameN} and ${nameS} on the top, followed by ${nameE} and ${nameW}!H!H`;

        roundClocked.value = `!H Round 2 has started !H`;
    } else {
        roundClocked.value = `!H Round ${counterRounds} has started !H`;
        currentResult = `!HRound ${char}${counterRounds}${char2} has started:${nameN} and ${nameS} on the top, followed by ${nameE} and ${nameW}!H!H`;
    }
    // round = `!H!HLast ${char}round${char2} has started:` 


    if (nameThirdN == null) {
        winners = `!C!H!H The WINNERS in section N/S are ${nameFirstN} and ${nameFirstS} with ${percent1} !H!H!C`;
        // Mitchell winners section E/W
        second = `!H!C!H The WINNERS in section E/W are ${nameSecondN} and ${nameSecondS} with ${percent2} !H!C!H`;
    } else {
        let percent3 = `${input21[2].value}%`;
        winners = `!C!H!HAnd the WINNERS are ${nameFirstN} and ${nameFirstS} with ${percent1}!C!H!H`;
        second = `!H!C!HSecond place goes to ${nameSecondN} and ${nameSecondS} with ${percent2}!H!C!H`;
        third = `!H!C!HThird are ${nameThirdN} and ${nameThirdS} with ${percent3}!H!C!H`;
        if (res1.value == res2.value) {
            winners = `!C!H!HFirst place is divided between ${nameFirstN} and ${nameFirstS} also ${nameSecondN} and ${nameSecondS} with the same result ${percent1}!C!H!H`;
            second = ``;
            third = `!H!C!HThird are ${nameThirdN} and ${nameThirdS} with ${percent3}!H!C!H`;
        } else if (res3.value == res2.value) {
            second = `!C!H!HSecond place is divided between ${nameSecondN} and ${nameSecondS} also ${nameThirdN} and ${nameThirdS} with the same result ${percent2}!C!H!H`;
            third = ``;
            console.log(`da`);
        }
        input14.value = third;
    }
    
    input11.value = currentResult
    input12.value = winners;
    input13.value = second;
    setTimeout(() => {
        input11.value = '';
        input12.value = '';
        input13.value = '';
        input14.value = '';

    }, 1000000);
})


