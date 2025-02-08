
// ----------------- Helper Functions -----------------
// Generate an array of random numbers
function generateArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
}

// Helper function to map a number from one range to another
function mapValueToHeight(num, minValue, maxValue, minHeight, maxHeight) {
    // Prevent division by zero if all numbers are the same
    if (maxValue === minValue) {
        return (minHeight + maxHeight) / 2;
    }
    return minHeight + ((num - minValue) / (maxValue - minValue)) * (maxHeight - minHeight);
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
    
    // Define the range of pixel heights for the bars
    const minBarHeight = 30;  // Minimum height in pixels for visibility
    const maxBarHeight = 200; // Maximum height (e.g., container's height)

    // Determine the minimum and maximum values in the array
    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);

    // Create a bar for each number in the array
    arr.forEach(num => {
        const bar = document.createElement('div');
        bar.classList.add('bar');

        // Map the number to a height within the desired range
        const height = mapValueToHeight(num, minValue, maxValue, minBarHeight, maxBarHeight);

        bar.style.height = `${height}px`;
        bar.textContent = num;
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




// ----------------- Animation Functions -----------------
function animateSwap(bar1, bar2, duration = 300) {
    // Capture initial positions (First)
    const rect1 = bar1.getBoundingClientRect();
    const rect2 = bar2.getBoundingClientRect();
  
    // Swap the bars in the DOM (Last)
    const parent = bar1.parentNode;
    // Swap positions by inserting bar2 before bar1, then re-inserting bar1
    parent.insertBefore(bar2, bar1);
    
    // Get new positions after the DOM change
    const rect1New = bar1.getBoundingClientRect();
    const rect2New = bar2.getBoundingClientRect();
  
    // Calculate the differences (Invert)
    const deltaX1 = rect1.left - rect1New.left;
    const deltaY1 = rect1.top - rect1New.top;
    const deltaX2 = rect2.left - rect2New.left;
    const deltaY2 = rect2.top - rect2New.top;
  
    // Apply inverse transforms so bars appear to be in their original positions
    bar1.style.transform = `translate(${deltaX1}px, ${deltaY1}px)`;
    bar2.style.transform = `translate(${deltaX2}px, ${deltaY2}px)`;
  
    // Force a reflow so the browser acknowledges the transform (Flush the CSS changes)
    bar1.offsetHeight;
  
    // Animate the transform back to zero (Play)
    bar1.style.transition = `transform ${duration}ms ease`;
    bar2.style.transition = `transform ${duration}ms ease`;
    bar1.style.transform = '';
    bar2.style.transform = '';
  
    // Cleanup transitions after the animation is complete
    setTimeout(() => {
      bar1.style.transition = '';
      bar2.style.transition = '';
    }, duration);
  }
  
  async function bubbleSort(arr) {
    const container = document.getElementById('array-container');
    
    for (let i = 0; i < arr.length; i++) {
      let swapped = false;
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap values in the array
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
          
          // Retrieve the bar elements based on their current positions
          const bar1 = container.children[j];
          const bar2 = container.children[j + 1];
  
          // Animate the swap between these two bars
          animateSwap(bar1, bar2, 300);
          
          // Wait for the animation to finish
          await delay(300);
        }
      }
      if (!swapped) break;
    }
    return arr;
  }
  