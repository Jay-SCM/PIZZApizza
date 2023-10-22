//////////////////////////////////////
//////////////////////////////////////
//PIZZA TASKS 1,2,3, and 4 -- MOD 4 //
//////////////////////////////////////
/////////////////////////////////////

// Mimic a pizza making procedure, by writing code that prints statements in the below order:

// Started preparing pizza ...
// Made the base
// Added the sauce and cheese
// Added the pizza toppings
// Cooked the pizza
// Pizza is ready

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));} // Return a promise that resolves after ms milliseconds
async function startPizzaProcess() {
    while (true) {// infinity loops because why not
        await prepareAndServePizza();}} // Call the function to start the process loop infinity
async function resetCard() {
    const messageElement = document.getElementById('message'); // Get the message element
    const imageElement = document.getElementById('image'); // Get the image element
    messageElement.innerText = ''; // Clear the message
    imageElement.src = '';} // Clear the image
async function showMessage(message, image) { // Function declaration with async to await
    document.getElementById('message').innerText = message; // Set the message
    document.getElementById('image').src = image; // Set the image source
    await delay(2000); // Display message and image for 2 seconds
    document.getElementById('message').innerText = '';  // Clear the message
    document.getElementById('image').src = '';} // Clear the  image
async function preparePizza() {
    await showMessage("Started preparing pizza...", 'PBASE.png');
    await delay(1000);}
async function makeBase() {
    await showMessage("Made the base", 'base.png');
    await delay(1500);} // Wait for 1500 milliseconds
async function addSauceAndCheese() {
    await showMessage("Added the sauce and cheese", 'baseCheese.png');
    await delay(2000);}
async function addToppings() {
    await showMessage("Added the pizza toppings", 'toppings.png');
    await delay(2500);}
async function cookPizza() {
    await showMessage("Cooked the pizza", 'Cooked.png');
    await delay(3000);}
function servePizza() {
    showMessage("Pizza is ready", 'pizza.png');}
async function prepareAndServePizza() { // Function declaration with async to await
    await preparePizza();
    await resetCard(); // Wait for each function to complete before moving to the next
    await makeBase();
    await addSauceAndCheese();
    await addToppings();
    await cookPizza();
    servePizza();
    await delay(2000);}
    startPizzaProcess(); // Call the function to start the process

/////////////////////////////////////////////////////////////////////////
//////  TASK 4 ORGINAL CODE WITHOUT IMG CARD AND ANIMATIONS /////////////
/////////////////////////////////////////////////////////////////////////

// function delay(ms) { // Function declaration to delay execution of code
//     return new Promise(resolve => setTimeout(resolve, ms));}  // Return a promise that resolves after ms milliseconds
// async function preparePizza() { // Function declaration with async to await
//     console.log("Started preparing pizza..."); // Log  the message
//     await delay(1000);} // Wait for 1000 milliseconds
// async function makeBase() {
//     await delay(2000); // Wait for 2000 milliseconds
//     console.log("Made the base");} // Log piza base message
// async function addSauceAndCheese() {
//     await delay(1500);
//     console.log("Added the sauce and cheese");}
// async function addToppings() {
//     await delay(1000);
//     console.log("Added the pizza toppings");}
// async function cookPizza() {
//     await delay(2500);
//     console.log("Cooked the pizza");}
// function servePizza() {
//     console.log("Pizza is ready");}
// async function prepareAndServePizza() {
//     await preparePizza(); // Wait for each function to complete before moving to the next
//     await makeBase();
//     await addSauceAndCheese();
//     await addToppings();
//     await cookPizza();
//     servePizza();}
//
// prepareAndServePizza(); // Call the function to start the process



/////////////////////////////////////////////////////////////
////////////// PIZZA task 1 /////////////////////////////////
/////////////////////////////////////////////////////////////

// Task 1: Create 6 JS functions which print the pizza processing
// statements and call those functions in sequence. Use a mix of
// function declarations, expressions and arrow functions.

// Started preparing pizza ...
// Made the base
// Added the sauce and cheese
// Added the pizza toppings
// Cooked the pizza
// Pizza is ready

// function preparePizza() { // Function declaration
//     console.log("Started preparing pizza...");
//     makeBase();}
// const makeBase = function() { // Function expression
//     console.log("Made the base");
//     addSauceAndCheese();};
// const addSauceAndCheese = () => { // Arrow function
//     console.log("Added the sauce and cheese"); // Log piza base message
//     addToppings();};
// function addToppings() {
//     console.log("Added the pizza toppings");
//     cookPizza();}
// const cookPizza = () => { // Arrow function
//     console.log("Cooked the pizza");
//     servePizza();};
// const servePizza = () => {
//     console.log("Pizza is ready");};
//
// preparePizza(); // Call the functions in sequence


/////////////////////////////////////////////////////////////
////////////// PIZZA task 2 /////////////////////////////////
/////////////////////////////////////////////////////////////

//Task 2: Make the functions asynchronous by using setTimeout with
//different time durations, maintaining the right order.

// Started preparing pizza ...
// Made the base
// Added the sauce and cheese
// Added the pizza toppings
// Cooked the pizza
// Pizza is ready

// function preparePizza() { // Function declaration
//     console.log("Started preparing pizza...");
//     setTimeout(makeBase, 1000);} // Wait for 1000 milliseconds
// // Function expression
// const makeBase = function() { // Function expression
//     console.log("Made the base");
//     setTimeout(addSauceAndCheese, 1500);};
// // Arrow function
// const addSauceAndCheese = () => { // Arrow function
//     console.log("Added the sauce and cheese");
//     setTimeout(addToppings, 2000);};
// function addToppings() {
//     console.log("Added the pizza toppings");
//     setTimeout(cookPizza, 2500);} // Wait for 2500 milliseconds
// const cookPizza = () => {
//     console.log("Cooked the pizza");
//     setTimeout(servePizza, 3000);};
// const servePizza = () => {
//     console.log("Pizza is ready");};
// preparePizza(); // Call the functions in sequence

/////////////////////////////////////////////////////////////
////////////// PIZZA task 3 /////////////////////////////////
/////////////////////////////////////////////////////////////

// Task 3: Modify the asynchronous functions to use Promises and
// achieve the required result.

// Started preparing pizza ...
// Made the base
// Added the sauce and cheese
// Added the pizza toppings
// Cooked the pizza
// Pizza is ready

// function preparePizza() {
//     return new Promise((resolve) => {
//         console.log("Started preparing pizza...");
//         setTimeout(() => {
//             resolve();}, 1000);});}
// function makeBase() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Made the base");
//             resolve();}, 1500);});}
// function addSauceAndCheese() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Added the sauce and cheese");
//             resolve();}, 2000);});}
// function addToppings() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Added the pizza toppings");
//             resolve();}, 2500);});}
// function cookPizza() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Cooked the pizza");
//             resolve();}, 3000);});}
// function servePizza() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//     console.log("Pizza is ready");
//     resolve();}, 3500);});}
//
//     preparePizza()
//     .then(makeBase)
//     .then(addSauceAndCheese)
//     .then(addToppings)
//     .then(cookPizza)
//     .then(servePizza);



