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

function inclusiveArray(maxNum) {
  const numArray = []
  for (i = 0; i <= maxNum; i++) {
    numArray.push(i);
  }
  return numArray;
}

function generateResponses(maxNum) {
  return inclusiveArray(maxNum).map(numAnalyzer);
}


// Interface Logic

function buildList(maxNum, reversed=false) {
  const responses = generateResponses(maxNum);
  if (reversed) {
    responses.reverse();
  }
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
  outputZone.innerHTML = "";
  const maxNum = document.getElementById("max-num").value;
  const reversed = document.getElementById('reversed').checked;
  const ul = buildList(maxNum, reversed);
  outputZone.append(ul);
}

window.onload = function() {
  document.querySelector("form#beep-boop").addEventListener("submit", handleFormSubmission);
}