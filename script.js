console.log("Script running...")
// Task 1: Hello button flow
// Select the 'Click me for hello' button
let button = document.querySelector("#helloButton")
console.log(button)
// Select the empty p tag under that button
let ptag = document.querySelector("#helloText")
console.log(ptag)
// Add an event listener to the hello button such that when it's click, the p tag text says "Hello"
button.addEventListener("click", function(event){
  ptag.textContent = "Hello"
})


// Task 2: All caps button flow
// Select the 'Click me for all caps' button
let caps = document.querySelector("#capsButton")
console.log(caps)
// Select the p tag under that button (says there's no need to shout)
let shouttag = document.querySelector("#capsText")
console.log(shouttag)
// Add an event listener to the caps button such that when it's clicked, the p tag text is "THERE'S NO NEED TO SHOUT"

caps.addEventListener("click", function(event){
  shouttag.textContent = "THERE'S NO NEED TO SHOUT"
})


// Task 3: Dog image flow
// Select the dog image
let image = document.querySelector(".dogImage")
console.log(image)
// Add an event listener to the dog image such that when the mouse is over it, the image src becomes happy-dog.jpeg
image.addEventListener("mouseover", function(event){
  image.src = "happy-dog.jpeg"
})


// Add an event listener to the dog image such that when the mouse is off it, the image src becomes sad-dog.jpeg
image.addEventListener("mouseout", function(event){
  image.src = "sad-dog.jpeg"
})


// Task 4: Name input flow
// Select the submit button
let submit = document.querySelector("#nameButton")
console.log(submit)
// Select the input 
let input = document.querySelector("#name")
console.log(input)
// Select the empty p tag under them
let empty = document.querySelector("#nameText")
console.log(empty)
// Add an event listener to the submit button such that when it is clicked, the p tag text is " Nice to meet you" + input.value
submit.addEventListener("click", function(event){
  empty.textContent = ("Nice to meet you" + input.value)
})



