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

//GOALS

const titleCased = () => {



debugger
  return tutorials.map(item => {
    debugger
    const updSent = [];
    const upperFast = item.split(' ');
    
    for(let string of upperFast){
      debugger
      //onst newSent =  [];
      debugger
      const word = string.charAt(0).toUpperCase() + string.slice(1);
      debugger
      
      updSent.push(word);
      //updSent.join(' ')

    

      //return word;
      debugger
    }

    debugger
    return updSent.join(' ');
    //return updSent;
  });
  
}
console.log(titleCased());

//.map() goal is to iterate over an array and apply a function to each element of array and then return value to a NEW array,
//leaving the original array unchanged

//function titleCased(tutorials)

