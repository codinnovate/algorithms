// split a string into two characters and if it's odd replace with _


const str = 'abcdeds';

function splitString(str){
   for(i=0; i < str.length; i++){
     for(j = i + 1; j < str.length; j++){
        return str.slice(0, 2).split('')
     }
   }
}

console.log(splitString(str));

// GROK
function splitAndReplace(text) {
    // Step 1: Split into pairs
    const pairs = [];
    for (let i = 0; i < text.length; i += 2) {
      const pair = text.slice(i, i + 2); // Take 2 characters (or 1 if at the end)
      pairs.push(pair);
    }
  
    // Step 2: Replace single-character pairs with '_'
    const result = pairs.map(pair => (pair.length === 1 ? '_' : pair));
  
    return result;
  }
  
  // Test it
  const text = 'abcdeds';
  console.log(splitAndReplace(text)); // ['ab', 'cd', 'ed', '_']'


// /with regex
function splitAndReplaceWithRegex(text) {
    // Split into pairs using regex
    const pairs = text.match(/.{1,2}/g) || [];
    // Replace single-character pairs
    const result = pairs.map(pair => (pair.length === 1 ? `${pair[0]}_` : pair));
    return result;
  }
  
  console.log(splitAndReplaceWithRegex('adfd9ew092323shasakjs', 'regex'));

let newText = "The rain in SPAIN stays mainly in the plain";
console.log(newText.match(/ain/), 'mofiyin ');