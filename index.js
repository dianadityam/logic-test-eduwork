// SOAL 1
function soal1(number) {
    let result = 1;
    for (let i = number; i > 0; i--) {
        result = i * result;
    }
    return result;
}
console.log('Jawaban Soal 1:');
console.log(soal1(8), '\n');

// SOAL 2

function soal2(input) {
    let reversed = '';
    for (let value of input) {
        reversed = value + reversed;
    }
    return reversed;
}

console.log('Jawaban Soal 2:');
console.log(soal2('abcde'), '\n');

// SOAL 3

function soal3(num) {
    let res = num.replace(/\D/g, '');
    let arr = res.split('');
    const zeroRepeat = (total) => {
        let zeroPrint = '';
        for (let i = 0; i < total; i++) {
            zeroPrint += '0';
        }
        return zeroPrint;
    };
    const descSort = (array) => {
        array.sort((a, b) => (a > b ? -1 : 1));
        return array;
    };
    arr = soal6(arr);
    const descArr = descSort(arr);
    const number = descArr.join('');
    console.log(number);
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i] + zeroRepeat(i));
        // console.log(i);
    }
}

console.log('Jawaban Soal 3:');
soal3('5712ew');
console.log('\n');

// SOAL 4

function soal4(a, b) {
    [a, b] = [b, a];
    console.log(`a = ${a}, b = ${b}`);
}

console.log('Jawaban Soal 4:');
soal4(3, 5);
console.log('\n');

// SOAL 5

function soal5(num) {
    const numberToWords = {
        0: 'Nol',
        1: 'Satu',
        2: 'Dua',
        3: 'Tiga',
        4: 'Empat',
        5: 'Lima',
        6: 'Enam',
        7: 'Tujuh',
        8: 'Delapan',
        9: 'Sembilan',
        10: 'Sepuluh',
        11: 'Sebelas',
        100: 'Seratus',
    };

    if (num in numberToWords) return numberToWords[num];

    let words = '';

    if (num > 0) {
        if (num > 11 && num < 20) {
            words += soal5(num - 10) + ' Belas';
        } else {
            words += numberToWords[Math.floor(num / 10)] + ' Puluh ';
            if (num % 10 > 0) {
                words += numberToWords[num % 10];
            }
        }
    }

    return words;
}

console.log('Jawaban Soal 5:');
console.log(soal5(13), '\n');

// SOAL 6

function soal6(arr) {
    arr.sort(function (a, b) {
        return a - b;
    });
    return arr;
}

console.log('Jawaban Soal 4:');
console.log(soal6([1, 3, 1000, 10]), '\n');
