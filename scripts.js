import { newObj } from './data.js';
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
let input21 = document.querySelectorAll('.percent div input');
let toResult = document.querySelector('.toResult');
const char = String.fromCharCode(171);
const char2 = String.fromCharCode(187);


// let nameN = newObj['007Rana'.toLowerCase()];
// let nameS = newObj['0ldie90'.toLowerCase()];
// let percentFirst = '10' + '%';

// let nameE = newObj['007Rana'.toLowerCase()];
// let nameW = newObj['0ldie90'.toLowerCase()];
// let percentSecond = '10' + '%';
// let counterRounds = 2;

// let round = `!H!HRound ${char}${counterRounds}${char2} has started:`
// // round = `!H!HLast ${char}round${char2} has started:` 
// let currentResult=`${round} ${nameN} and ${nameN} on the top, followed by ${nameE} and ${nameW}!H!H`;

// let nameFirstN = newObj['007Rana'.toLowerCase()];
// let nameFirstS= newObj['0ldie90'.toLowerCase()];
// let percent1 = '10' + '%';

// let nameSecondN = newObj['007Rana'.toLowerCase()];
// let nameSecondS= newObj['0ldie90'.toLowerCase()];
// let percent2 = '20' + '%';

// let nameThirdN = newObj['007Rana'.toLowerCase()];
// let nameThirdS= newObj['0ldie90'.toLowerCase()];
// let percent3 = '40' + '%';
// let seconds =`!H!C!H Second place goes to ${newObj[nameSecondN]} and ${newObj[nameSecondS]} with ${percentSecond}!H!C!H`;
// console.log(`!C!H!H And the WINNERS are ${nameN} and ${nameS} with ${percentFirst}!C!H!H`);

// let winners = `!C!H!HAnd the WINNERS are ${nameFirstN} and ${nameFirstS} with ${percent1}!C!H!H`;
// let second=`!H!C!HSecond place goes to ${nameSecondN} and ${nameSecondS} with ${percent2}!H!C!H`;
// let third=`!H!C!HThird are ${nameThirdN} and ${nameThirdS} with ${percent3}!H!C!H`;


// console.log(`!H!H!C Third are ${newObj[nameThirdN]} and ${newObj[nameThirdS]} with ${percentThird}!H!H!C`);




toResult.addEventListener('click', () => {

    let nameN = newObj[input15.value.toLowerCase()];
    let nameS = newObj[input16.value.toLowerCase()];
    console.log(input21[0].value);

    let nameE = newObj[input17.value.toLowerCase()];
    let nameW = newObj[input18.value.toLowerCase()];
    let counterRounds = 2;
    let winners;
    let second;
    let third;
    let round = `!H!HRound ${char}${counterRounds}${char2} has started:`
    // round = `!H!HLast ${char}round${char2} has started:` 
    let currentResult = `${round} ${nameN} and ${nameS} on the top, followed by ${nameE} and ${nameW}!H!H`;

    let nameFirstN = newObj[input15.value.toLowerCase()];
    let nameFirstS = newObj[input16.value.toLowerCase()];
    let percent1 = `${input21[0].value}%`;

    let nameSecondN = newObj[input17.value.toLowerCase()];
    let nameSecondS = newObj[input18.value.toLowerCase()];
    let percent2 = `${input21[1].value}%`;;
    let nameThirdN = newObj[input19.value.toLowerCase()];
    let nameThirdS = newObj[input20.value.toLowerCase()];
    console.log(newObj[input19.value.toLowerCase()]);
    if (nameThirdN == "Robots") {
        winners = `!C!H!H The WINNERS in section N/S are ${nameFirstN} and ${nameFirstS} with ${percent1} !H!H!C`;
        // Mitchell winners section E/W
        second = `!H!C!H The WINNERS in section E/W are ${nameSecondN} and ${nameSecondS} with ${percent2} !H!C!H`;
    } else {

        let percent3 = `${input21[2].value}%`;;
        console.log(`!C!H!H And the WINNERS are ${nameN} and ${nameS} with ${percent1}!C!H!H`);

        winners = `!C!H!HAnd the WINNERS are ${nameFirstN} and ${nameFirstS} with ${percent1}!C!H!H`;
        second = `!H!C!HSecond place goes to ${nameSecondN} and ${nameSecondS} with ${percent2}!H!C!H`;
        third = `!H!C!HThird are ${nameThirdN} and ${nameThirdS} with ${percent3}!H!C!H`;
        input14.value = third;
    }

    input11.value = currentResult
    input12.value = winners;
    input13.value = second;
})


