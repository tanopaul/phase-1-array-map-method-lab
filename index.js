const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let split = tutorials.map(sent => {
    return sent.split(' ');
  })

  console.log(split)
  let newUpper = []

  for (let i = 0; i < split.length; i++) {
    let upper = split[i].map(word => {
      return word.replace(word[0], word[0].toUpperCase());
    })
    // newUpper += upper;
    // upper[i].join(' ')
    newUpper.push(upper.join(' '))
  }

  return newUpper;
  
  
}

titleCased()
  

// let split = tutorials[0].split(' ');

// console.log(tutorials[0].split(' '));

// let upper = split.map(word => {
//   return word.replace(word[0], word[0].toUpperCase())
// })

// console.log(upper)