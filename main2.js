//task 1

const num = 4;
if (num%2 === 0){
    console.log('the number is even');
} else{
    console.log('the number is odd');

}

// task 2

const age = 50;
if (age<=18){
    console.log('0 - 18 years');
}else if (age<=30){
    console.log('19 - 30 years');
    }else if (age<=40){
        console.log('31 - 40 years');
        }else if (age<=50){
            console.log('41 - 50 years');
        }else{
    console.log('51 + years');
}

// task 3

const number = 5;
if (number%2 === 0 && number%3 === 0){
    console.log('Fizz Bazz')
} else if (number%2 === 0){
    console.log('Fizz')
} else if (number%3 === 0){
    console.log('Buzz') 
    } else {
    console.log(number)  
    }