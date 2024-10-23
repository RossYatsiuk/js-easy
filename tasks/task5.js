// Задача: Напишіть функцію countOccurrences, яка приймає рядок і символ,
//  і повертає кількість входжень цього символу в рядку


function countOccurrences(str, char) {
  let count = 0;
 
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
 
  return count;
 }
 
 console.log(countOccurrences("hello world", 'o')); // Виведе: 2
 console.log(countOccurrences("banana", 'a'));       // Виведе: 3
 
 module.exports = countOccurrences;