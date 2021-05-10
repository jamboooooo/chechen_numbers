let checNumbers = ['цхьаъ', 'шиъ', 'кхоъ', 'диъ', 'пхиъ', 'ялх', 'ворх1',
    'барх1', 'исс', 'итт', 'цхьайта', 'шийта', 'кхойтта',
    'дейтта', 'пхийтта', 'ялхийтта', 'верх1итта', 'берхитта',
    'ткъе ясса'
];

let tensNumbers = ['ткъе', 'шоз ткъе', 'къуз ткъе', 'доьз ткъе', 'баь1а'];

let hundredNumbers = ['б1е', 'ши б1е', 'кхо б1е', 'диъ б1е', 'пхи б1е', 'ялх б1е', 'ворх1 б1е', 'барх б1е', 'исс б1е']

let thousend = 'эзар'

function checkNull(number) {
    if (number === 0) {
        return ''
    }
}

function get20Number(number) {
    checkNull(number)
    return checNumbers[number - 1]
}

function get100Number(number) {
    checkNull(number)
    return tensNumbers[Math.floor(Math.floor(number / 10) / 2) - 1] + ' ' + getNumbers(number % 20)
}

function get1000Number(number) {
    checkNull(number)
    return hundredNumbers[Math.floor(number / 100) - 1] + ' ' + getNumbers(number % 100)
}

function getMillionNumber(number) {
    checkNull(number)
    return getNumbers(Math.floor(number / 1000)) + ' ' + thousend + ' ' + getNumbers(number % 1000)
}


function getNumbers(number) {
    if (number === 0) {
        return ''
    }
    if (number < 20) {
        return get20Number(number);
    }
    if (number < 100) {
        return get100Number(number);
    }
    if (number < 1000) {
        return get1000Number(number);
    }
    if (number < 1000000) {
        return getMillionNumber(number);
    }
}

console.log(getNumbers(120502))