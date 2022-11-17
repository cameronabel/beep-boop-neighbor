function numAnalyzer(num) {
  const stringedNum = num.toString();
  if (stringedNum.match(/3/)) {
    return "Won't you be my neighbor?"
  }
}

console.log(numAnalyzer(3));