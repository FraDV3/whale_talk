const input = 'Hello, my name is Wally';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for(let i = 0; i < input.length; i++){
  //console.log('inputIndex is ' +i);
  
  for(let j = 0; j < vowels.length; j++){
    //console.log('vowelIndex is ' +j);
    if (input[i] === vowels[j]){
      resultArray.push(input[i]);
    } 
    if (input[i] === 'e'){
      resultArray.push(input[i]);
    }
    if (input[i] === 'u'){
      resultArray.push(input[i]);
    }
  }
};

//console.log(resultArray);
let resultString = resultArray.join('').toUpperCase();
console.log(resultString);
