let checNumbers = ['цхьаъ', 'шиъ', 'кхоъ', 'диъ', 'пхиъ', 'ялх', 'ворх1',
    'барх1', 'исс', 'итт', 'цхьайта', 'шийта', 'кхойтта',
    'дейтта', 'пхийтта', 'ялхийтта', 'верх1итта', 'берхитта',
    'ткъе ясса', 'ткъа'
];

let tensNumbers = ['ткъе', 'шоз ткъе', 'къуз ткъе', 'доьз ткъе', 'баь1а'];

let hundredNumbers = ['б1е', 'ши б1е', 'кхо б1е', 'диъ б1е', 'пхи б1е', 'ялх б1е', 'ворх1 б1е', 'барх б1е', 'исс б1е']

function getChechNumb(number) {
    let first = '';
    let second = '';
    if (number <= 20) {
        return checNumbers[number - 1]
    } else if (number < 100) {
        first = Math.floor(Math.floor(number / 10) / 2) - 1;
        return tensNumbers[first] + ' ' + checNumbers[number % 20 - 1]
    } else if (number === 100) {
        return tensNumbers[tensNumbers.length - 1]
    } else if (number < 1000) {
        first = Math.floor(number / 100) - 1;
        second = Math.floor(Math.floor((number % 100) / 10) / 2) - 1;
        return hundredNumbers[first] + ' ' + tensNumbers[second] + ' ' + checNumbers[(number % 100) % 20 - 1]
    }
}

console.log(getChechNumb(578))