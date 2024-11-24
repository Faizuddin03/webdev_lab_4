// question 1
function changeContent() {
    document.getElementById("myElement").textContent = "Hello there!";
}

// question 2
function checkInput() {
    const input = document.getElementById("userInput").value;
      const number = Number(input);

      if (number < 10) {
        alert("The number is lower than 10");
      } 
      else if (number >=10){
        alert("The number is higher than 10");
      }
      else{
        alert("Please enter a number");
      }
}

// question 3
let text = "";
    for (let i = 1; i <= 5; i++) { 
      text += "The number is " + i + "<br>"; 
}
    
document.getElementById("demo").innerHTML = text;

// question 4
function toggleColor() {
    const colorBox = document.getElementById("colorBox");
    if (colorBox.style.backgroundColor === "red") {
      colorBox.style.backgroundColor = "blue";
    } 
    else {
      colorBox.style.backgroundColor = "red";
    }
}