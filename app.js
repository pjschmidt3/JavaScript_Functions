// Exercise 1 Section
function printOdds (count) {
  if (count < 0) {
    console.error('printOdds expects a positive integer parameter');
    return;
  }

  for (let i = 0; i < count; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

console.log(parseInt(undefined));
printOdds(100);

// Exercise 2 Section
function checkAge (age) {
  age = parseInt(age);
  if (Number.isNaN(age)) {
    console.error('Invalid integer passed to checkAge');
    return;
  }

  const aboveSixteen = 'You can drive!';
  const belowSixteen = 'Sorry, but you need to wait until you\'re 16.';

  let result;
  if (age >= 16) {
    result = aboveSixteen;
  } else {
    result = belowSixteen;
  }

  console.log(result);
}

console.log('Should be allowed to drive: ');
checkAge(16);

console.log('Should not be allowed to drive: ');
checkAge(15);