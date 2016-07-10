/**
* URL : https://algospot.com/judge/problem/read/CONVERT
*
* @author devginie
*
* Conversion between the metric and English measurement systems
*
* Unit specification : kg, lb, l, kilograms, pounds, liters, gallons.
* Conditional : rounded to 4 decimal places.
*
* 1.000 kilogram = 2.2046 pounds
* 0.4536 kilograms = 1.0000 pounds
* 1.000 liter = 0.2642 gallons
* 3.7854 liters = 1.000 gallon
*/

var input = [];
require('readline')
.createInterface(process.stdin, {})
.on('line', function(line) {
  input.push(line.trim());
  if(input[0] == input.length - 1) {
    this.emit('close');
    return true;
  }
}).on('close', function() {
  // Loop Input Lines
  var result = solution(input);
  for(var i = 1; i < result.length; i += 1) {
    console.log(i + ' ' + result[i]);
  }
});

function solution(array) {
  var i, max,
  answer = [];

  for(i = 0, max = array.length; i < max; i += 1) {
    // split number from Unit
    var result = array[i].split(' ');

    var number = result[0];
    var unit = result[1];
    var convUnit;


    switch (unit) {
      // kilogram
      case 'kg':
      number *= 2.2046;
      number = number.toFixed(4);
      convUnit = ' lb';
      break;
      // liter
      case 'l':
      number *= 0.2642;
      number = number.toFixed(4);
      convUnit = ' g';
      break;
      // pound
      case 'lb':
      number *= 0.4536;
      number = number.toFixed(4);
      convUnit = ' kg';
      break;
      // gallon
      case 'g':
      number *= 3.7854;
      number = number.toFixed(4);
      convUnit = ' l';
      break;
      default:
      break;
    }
    answer.push(number + convUnit);
  }
  return answer;
}
