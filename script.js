// ----------------- Helper Functions -----------------
// Generate an array of random numbers
function generateArray(size = 10) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 50);
}

// Display array on the page
function displayArray(arr) {
    let container = document.getElementById('array-container');  // declare container variable

    // If container doesn't exist, create it
    if (!container) {
        container = document.createElement('div');
        container.id = 'array-container';
        document.body.appendChild(container);
    }

    container.innerHTML = ''; // Clear previous bars
    
    // Create a bar for each number in the array
    // arr is the array of numbers
    arr.forEach(num => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${num}px`; // Only dynamic property
        bar.textContent = num; // Number inside the bar
        container.appendChild(bar);
    });
}

// ----------------- Bubble Sort -----------------

// Bubble Sort function
function bubbleSort(arr) {
    // TODO make this function sort the array using bubble sort
}

// ----------------- Insertion Sort -----------------
function insertionSort(arr) {
    // TODO make this function sort the array using insertion sort
}

// ----------------- Initialization -----------------
// Initialize array and display it
let myArray = generateArray();
displayArray(myArray);

// ----------------- Buttons -----------------

// Bubble Sort Algorithm

// HTML Button - Event Listener
// document.getElementById('bubbleSortBtn').addEventListener('click', () => {
//     myArray = bubbleSort(myArray);  // Sorts the array via bubble sort
//     displayArray(myArray);  // Then displays the sorted array
// });

// Dynamically create a button in the DOM via JavaScript
const buttonContainer = document.getElementById('button-container');
const bubbleSortBtn = document.createElement('button');
bubbleSortBtn.id = 'bubbleSortBtn';
bubbleSortBtn.textContent = 'Bubble Sort';
buttonContainer.appendChild(bubbleSortBtn);


// Insertion Sort Algorithm
