
// ----------------- Helper Functions -----------------
// Generate an array of random numbers
function generateArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
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

        // Calculate height using a scaling factor
        let height = num * 1.5;

        // Ensure a minimum height of 30px for visibility
        if (height < 30) {
            height = 30;
        }

        bar.style.height = `${height}px`; // Only dynamic property
        bar.textContent = num; // Number inside the bar
        container.appendChild(bar);
    });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ----------------- Create Input for Array Size -----------------
// Select the input and button already defined in your HTML
const arraySizeInput = document.getElementById('arraySizeInput');
const generateArrayBtn = document.getElementById('generateArrayBtn');

// Add event listener to the static button
generateArrayBtn.addEventListener('click', async () => {
    // Disable the button and update text for feedback
    generateArrayBtn.disabled = true;
    generateArrayBtn.textContent = "Generating...";

    const size = parseInt(arraySizeInput.value, 10) || 10;
    myArray = generateArray(size);
    displayArray(myArray);

    await delay(300);

    // Restore button state and text after generation is complete
    generateArrayBtn.textContent = "Generate Array";
    generateArrayBtn.disabled = false;
});

/**
 * SORTING ALGORITHMS
 */

// ----------------- Bubble Sort Function -----------------
async function bubbleSort(arr) {
    for (i = 0; i < arr.length; i++) {
        let swapped = false;

        for (j = 0; j < arr.length - i - 1; j++){
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
                displayArray(arr);  // display the swap
                await delay(300);
            }
        }
        if (!swapped){
            break;
        }
    }
    return arr;
}

// ----------------- Insertion Sort Functon -----------------
function insertionSort(arr) {
    // TODO make this function sort the array using insertion sort
}

// ----------------- Initialization -----------------
// Initialize array and display it
let myArray = generateArray(0);
displayArray(myArray);

// ----------------- Algorithm Buttons -----------------

// Dynamically create a button in the DOM via JavaScript
const algoButtonContainer = document.getElementById('algo-button-container');
if (!algoButtonContainer) {
    algoButtonContainer = document.createElement('div');
    algoButtonContainer.id = 'algo-button-container';
    document.body.appendChild(algoButtonContainer);
}

// ----------------- Bubble Sort Button -----------------
const bubbleSortBtn = document.createElement('button');
bubbleSortBtn.id = 'bubbleSortBtn';
bubbleSortBtn.textContent = 'Bubble Sort';
algoButtonContainer.appendChild(bubbleSortBtn);

// Add an event listener to the Bubble Sort button
bubbleSortBtn.addEventListener('click', async () => {
    // Assume bubbleSort() sorts the array in place or returns the sorted array
    await bubbleSort(myArray);
    // Now display the (sorted) array on the page
    displayArray(myArray);
});

// ----------------- Insertion Sort Button -----------------
// Dynamically create a button in the DOM via JavaScript
const insertionSortBtn = document.createElement('button');
insertionSortBtn.id = 'insertionSortBtn';
insertionSortBtn.textContent = 'Insertion Sort';
algoButtonContainer.appendChild(insertionSortBtn);

