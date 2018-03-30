'use strict';

function get_letter_interval_2(number_a, number_b) {
    var collection_c = [];
    var i = 0;
    var letter = '';
    var a_ASCII = 'a'.charCodeAt();
    if (number_a < number_b) {
        for (i = number_a; i <= number_b; i++) {
            if (i > 26) {
                letter = '';
                if (i % 26 == 0){
                    letter += String.fromCharCode(a_ASCII + i / 26 - 2);
                    letter += 'z';
                    collection_c.push(letter);
                }
                else {
                    letter += String.fromCharCode(a_ASCII + i / 26 - 1);
                    letter += String.fromCharCode(a_ASCII + i % 26 - 1);
                    collection_c.push(letter);
                }
            }
            else {
                collection_c.push(String.fromCharCode(a_ASCII + i - 1));
            }
        }
    }
    else if (number_a > number_b) {
        for (i = number_a; i >= number_b; i--) {
            if (i > 26) {
                letter = '';
                if (i % 26 == 0){
                    letter += String.fromCharCode(a_ASCII + i / 26 - 2);
                    letter += 'z';
                    collection_c.push(letter);
                }
                else {
                    letter += String.fromCharCode(a_ASCII + i / 26 - 1);
                    letter += String.fromCharCode(a_ASCII + i % 26 - 1);
                    collection_c.push(letter);
                }
            }
            else {
                collection_c.push(String.fromCharCode(a_ASCII + i - 1));
            }
        }
    }
    else if (number_a == number_b) {
        if (number_a > 26) {
            letter = '';
            letter += String.fromCharCode(a_ASCII + number_a / 26 - 1);
            letter += String.fromCharCode(a_ASCII + number_a % 26 - 1);
            collection_c.push(letter);
        }
        else {
            collection_c.push(String.fromCharCode(a_ASCII + number_a - 1));
        }
    }
    return collection_c;
}

module.exports = get_letter_interval_2;
//console.log(get_letter_interval_2(20, 53));
