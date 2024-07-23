// Ifga iod masalalar
// 1-masala
// let sum = 0;
// for (let i = 10; i <= 100; i++) {
//     if (i % 2 == 1) {
//         sum += i;
//     }
// }
// console.log('Toq sonlarning yig\'indisi:', sum);

// 2-masala




// 3-masala

// function isPrime(n) {
//     if (n <= 1) return false;
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }

// for (let i = 1; i <= 50; i++) {
//     if (!isPrime(i) && i > 1) {
//         console.log('Murakkab son:', i);
//     }
// }

// 4-masala

// let num = 0;
// for (let i = 1; i <= 20; i++) {
//     num += i * i;
// }
// console.log('Kvadratlarning yig\'indisi:', num);

// 5-masala

// let numbers = [15, 42, 7, 33, 19]; 

// let maxNumber = Math.max(...numbers);
// let minNumber = Math.min(...numbers);

// console.log('Eng katta son:', maxNumber);
// console.log('Eng kichik son:', minNumber);

// 6-masala

// function isPrime(n) {
//     if (n <= 1) return false;
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }

// for (let i = 2; i <= 30; i++) {
//     if (!isPrime(i)) {
//         console.log('Murakkab son:', i);
//     }
// }

// 8-masala

// let num1 = 0;
// let num2 = 0;

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//          num1 += i * i;
//     } else {
//         num2 += i * i * i;
//     }
// }

// console.log('Farq:',  num1 - num2);

// 9-masala


// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('Bo\'linadigan son:', i);
//     }
// }


// 10-masala


// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// let average = sum / 100;
// console.log('O\'rtacha qiymat:', average);


// 14-masala

// let evenSum = 0;
// for (let i = 1; i <= 200; i++) {
//     if (i % 2 === 0) {
//         evenSum += i;
//     }
// }
// console.log('Juft sonlarning yig\'indisi:', evenSum);

// 15-masala

// for (let i = 1; i < 20; i += 2) {
//     console.log('Juftlik:', i, '+', i + 1, '=', i + (i + 1));
// }




// Break/continue ga oid masalalar.

// 1-masala
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break; 
//     }
//     console.log(i);
// }

// 2-masala

// for (let i = 1; i <= 10; i++) {
//     if (i === 3 || i === 7) {
//         continue; // 3 va 7 sonlarini o'tkazib yuboradi
//     }
//     console.log(i);
// }


// 3-masala

// let numbers = [1, 3, 5, 7, 9, 11]; 

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 7) {
//         console.log('Topildi!');
//         break; 
//     }
// }

// 4-masala
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// 5-masala

// for (let i = 1; i <= 100; i++) {
//     if (i > 50) {
//         break; 
//     }
//     console.log(i);
// }



