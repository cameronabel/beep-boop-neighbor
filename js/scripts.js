function numAnalyzer(num) {
  const stringedNum = num.toString();
  if (stringedNum.match(/3/)) {
    return "Won't you be my neighbor?";
  } else if (stringedNum.match(/2/)) {
    return "Boop!";
  } else if (stringedNum.match(/1/)) {
    return "Beep!";
  } else {
    return stringedNum;
  }
}

function generateResponses(maxNum) {
  const numArray = []
  for (i = 0; i <= maxNum; i++) {
    numArray.push(i);
  }
  return numArray;
  //const responses = numArray.map(numAnalyzer)
}
console.log(generateResponses(4));