let checNumbers = ['цхьаъ', 'шиъ', 'кхоъ', 'диъ', 'пхиъ', 'ялх', 'ворх1',
    'барх1', 'исс', 'итт', 'цхьайта', 'шийта', 'кхойтта',
    'дейтта', 'пхийтта', 'ялхийтта', 'верх1итта', 'берхитта',
    'ткъе ясса'
];

let tensNumbers = ['ткъе', 'шоз ткъе', 'къуз ткъе', 'доьз ткъе', 'баь1а'];

let hundredNumbers = ['б1е', 'ши б1е', 'кхо б1е', 'диъ б1е', 'пхи б1е', 'ялх б1е', 'ворх1 б1е', 'барх б1е', 'исс б1е']

function getChechNumb(number) {
    let first = '';
    let second = '';
    let third = '';
    if (number < 20) {
        return checNumbers[number - 1]
    } else if (number < 100) {
        first = Math.floor(Math.floor(number / 10) / 2);
        second = number % 20;
        if (second === 0) {
            return tensNumbers[first - 1]
        }
        return tensNumbers[first - 1] + ' ' + checNumbers[second - 1]
    } else if (number < 1000) {
        first = Math.floor(number / 100);
        second = Math.floor(Math.floor((number % 100) / 10) / 2);
        third = (number % 100) % 20;
        if (second === 0) {
            if (third === 0) {
                return hundredNumbers[first - 1]
            }
            return hundredNumbers[first - 1] + ' ' + checNumbers[third - 1]
        }
        return hundredNumbers[first - 1] + ' ' + tensNumbers[second - 1] + ' ' + checNumbers[third - 1]
    }
}

for (let i = 0; i < 1000; i++) {
    console.log(getChechNumb(i))
}