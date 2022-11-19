// Utility Logic

function inclusiveArray(maxNum) {
  const numArray = [];
  for (i = 0; i <= maxNum; i++) {
    numArray.push(i);
  }
  return numArray;
}

// Business Logic

function numAnalyzer(num, neighbor) {
  const stringedNum = num.toString();
  if (neighbor) {
    neighbor = ", " + neighbor;
  }
  if (stringedNum.match(/3/)) {
    return `Won't you be my neighbor${neighbor}?`;
  } else if (stringedNum.match(/2/)) {
    return "Boop!";
  } else if (stringedNum.match(/1/)) {
    return "Beep!";
  } else {
    return stringedNum;
  }
}

function generateResponses(maxNum, neighbor) {
  return inclusiveArray(maxNum).map(element => numAnalyzer(element, neighbor));
}

// Interface Logic

function buildList(maxNum, reversed=false, neighbor="") {
  const responses = generateResponses(maxNum, neighbor);
  if (reversed) {
    responses.reverse();
  }
  const ul = document.createElement("ul");
  responses.forEach(function(element) {
    let li = document.createElement("li");
    li.append(element);
    ul.append(li);
  })
  return ul;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const outputZone = document.getElementById("output-area");
  outputZone.innerHTML = "";
  const maxNum = document.getElementById("max-num").value;
  const reversed = document.getElementById("reversed").checked;
  const username = document.getElementById("username").value.trim();
  if (maxNum !== ""){
    const ul = buildList(maxNum, reversed, username);
    outputZone.append(ul);
  }
}

window.onload = function() {
  document
    .querySelector("form#beep-boop")
    .addEventListener("submit", handleFormSubmission);
}