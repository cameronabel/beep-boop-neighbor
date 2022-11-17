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

console.log(numAnalyzer(1));