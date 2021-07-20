// Declare variables and capture input
let personName = prompt("Hello, What is your name?")
let favColor = prompt("What is your favorite color?")
let favFruit = prompt("What is your favorite fruit?")
let birthMonth = prompt("What is your birth month")
let javascriptRobot = "The Javascript Robot"
const robotName = "Robotron"
// Combine the input with other words to create a story
alert("Hello"+" "+personName+", nice to meet you...")
alert("My name is "+robotName + " "+ javascriptRobot)
alert("I have learned some things about you...")
let message = "Your favorite color "+ favColor + 
", and you favorite fruit is "+ favFruit
", and you were born in " + birthMonth

// Display the story as a <p> inside the <main> element
document.querySelector('p').innerHTML = message
// FIND THE ERROR HERE
/*

    Issues:
    - <p></p> have string in this tag but what with <main></main> tag
    - need to review document query selector rule
    - alerts or console.log???

    Need to display:
    - message from <p></p> tag


    Solution:
    Diplayed <p></p> in index.html page

*/