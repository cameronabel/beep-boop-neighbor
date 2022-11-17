// Business Logic

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

function inclusiveArray(maxNum, reverse=false) {
  const numArray = []
  for (i = 0; i <= maxNum; i++) {
    numArray.push(i);
  }
  if (reverse) {
    return numArray.reverse();
  } else {
    return numArray;
  }
}

function generateResponses(maxNum) {
  return inclusiveArray(maxNum).map(numAnalyzer);
}


// Interface Logic

function buildList(maxNum) {
  const responses = generateResponses(maxNum);
  const ul = document.createElement('ul');
  responses.forEach(function(element) {
    let li = document.createElement('li');
    li.append(element);
    ul.append(li);
  })
  return ul;
}

function handleFormSubmission(event) {
  event.preventDefault()
  const outputZone = document.getElementById("output-area");
  outputZone.innerText = "";
  const maxNum = document.getElementById("max-num").value;
  const ul = buildList(maxNum)
  outputZone.append(ul);
}

window.onload = function() {
  document.querySelector("form#beep-boop").addEventListener("submit", handleFormSubmission)
}