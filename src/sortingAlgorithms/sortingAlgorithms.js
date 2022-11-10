
export var sorting_animations = [];

export function getQuicksortAnimations(array){

  var animations = [];

  let left = 0 ;
  let right = array.length - 1 ;

  console.log("|getQuickSortAnimations|Array|");

  array = runQuickSort(array, left, right, animations);

  sorting_animations = [];

  return animations ; 
}


export function runQuickSort(array, left, right, animations){

  if(left >= right){
    return;
  }

  let index = quicksortPartition(array, left, right, animations);

  //Recursively run quicksort on smaller sections of the array until it is fully sorted
  runQuickSort(array, left, index - 1, animations);

  runQuickSort(array, index + 1, right, animations);

  return array;

}

function quicksortPartition(array, left, right, animations){

  var pivotIndex = left ;
  var pivotValue = array[right] ;
  animations.push([right, 1]);
  sorting_animations.push([right, 1, "Quicksort"]);
  
  for(let i = left ; i < right  ; i++){

    animations.push([i, 2]);
    if(array[i] < pivotValue){

     animations.push([i, 5]);
     sorting_animations.push([i, 5, "Quicksort"]);
     //swap(array, i, pivotIndex, animations);
     let tmp = array[i];
     array[i] = array[pivotIndex];
     array[pivotIndex] = tmp ;
   
     sorting_animations.push([i, pivotIndex, 3, "Quicksort"]);
     animations.push([i, pivotIndex, 3]);
   
     pivotIndex++; 
    }
  }

 let tmp = array[pivotIndex];
 array[pivotIndex] = array[right];
 array[right] = tmp ;

 sorting_animations.push([pivotIndex, right, 3, "Quicksort"]);
 animations.push([pivotIndex, right, 3]);

 console.log(array);

  sorting_animations.push([right, 4, "Quicksort"]);
  animations.push([right, 4]);
  return pivotIndex ;
}

function swap(mainArray, firstIndex, secondIndex, animations){

  let tmp = mainArray[firstIndex];
  mainArray[firstIndex] = mainArray[secondIndex];
  mainArray[secondIndex] = tmp ;

  animations.push([firstIndex, secondIndex, 3]);

}

export function getSelectionSortAnimations(array){
  var animations = [];

  runSelectionSort(array, animations);

  sorting_animations = [];

  return animations;
}

function runSelectionSort(array, animations){

  let size = array.length ;
  for (let i = 0 ; i < size - 1 ; i++){

    //Assign first array element as the current minimum value
    let min_idx = i ;

    //Color current minimum value
    animations.push([min_idx, 1]);
    sorting_animations.push([min_idx, 1, "SelectionSort"]); 
    for ( let j =  i + 1 ; j < size ; j++){

      //Color search for new minimum
      animations.push([j, 2]);
      sorting_animations.push([j, 2, "SelectionSort"]); 
      //If current array element is less than the minimum value, update the minimum value
      if(array[j] < array[min_idx]){
        animations.push([j, 4]);
        sorting_animations.push([j, 4, "SelectionSort"]); 
        min_idx = j;
      }
    }
    //swap(array, min_idx, i, animations);
    let tmp = array[min_idx];
    array[min_idx] = array[i];
    array[i] = tmp ;
  
    sorting_animations.push([min_idx, i, 3, "SelectionSort"]); 
    animations.push([min_idx, i, 3]);
  

  }

}

export function getBubbleSortAnimations(array){
  var animations = [];
  
  runBubbleSort(array, animations);
  console.log("|BUBBLE SORT|");
  console.log(array);
  console.log(animations);

  
  return animations;
}

function runBubbleSort(array, animations){

  let size = array.length; 
  for(let i = 0 ; i < size - 1 ; i++){
    for(let j = 0; j < size - i - 1; j++){
      animations.push([j, 2]);
      //Compare array element with element right after it and perform necessary swaps
      if(array[j] > array[j + 1]){
        swap(array, j, j + 1, animations);
      }
    }
  }
  console.log("|getBubbleSort|Array|");
}

export function getInsertionSortAnimations(array){
  var animations = [];

  animations = runInsertionSort(array, animations);
  console.log("|INSERTION SORT|");
  console.log(array);
  console.log(animations);
  return animations;
}

function runInsertionSort(array, animations){

  let key = 0 ;
  let j = 0 ;
  let size = array.length ;


  for (let i = 1 ; i < size ; i++){

    //Select the first element that has a predecessor as the key
    key = array[i];

    animations.push([i, 1]);
 

    //The j index represents the predecessor to the key
    j = i - 1;
    animations.push([j, 2]);
    
    //Move all elements that are greater than the key one index ahead
    while ( j >= 0 && array[j] > key){
      array[j+1] = array[j];
      animations.push([j+1, j, 3]);

      //Decrement j to ensure that the key is inserted back in the right place
      j = j - 1 ;

    }
   
    //Insert the key back into its sorted position
    array[j+1] = key ;
    animations.push([j+1, 4]); 

  }

  return animations;

}

export function getHeapSortAnimations(array){
  const animations = [];

  runHeapSort(array, animations);
  console.log("|HEAP SORT|")
  console.log(array);
  console.log(animations);
  return animations;
}

function runHeapSort(array, animations){

  let size = array.length ; 
  let i = Math.floor(size/ 2 - 1);
  let k = size - 1 ;

  while  ( i >= 0){
    heapify(array, size, i, animations);
    animations.push([i, 4]);
    i--;
  }

  while (k >= 0 ){
    // Swap largest element with the element at the end of the unsorted array
    swap(array, 0, k, animations);
    heapify(array, k, 0, animations);
    k--;
  }

}

// Organizes array into a max-heap structure
function heapify(array, size, i, animations){
  let largest = i ;
  let left = i * 2 + 1 ; 
  let right = left + 1 ; 

  //If the left child is larger than the root node, assign it to the root
  if (left < size && array[left] > array[largest]){
    //Animations here to mark the bounds of each binary-tree branch
    animations.push([left, 1]);
    largest = left ;
  }

  //If the right child is larger than the root node, assign it to the root
  if(right < size && array[right] > array[largest]){
    animations.push([right, 2]);
    largest = right;
  }

  // If the largest value has changed through searching left and right nodes, swap with root
  if(largest !== i){
    swap(array, i, largest, animations) ;
    heapify(array, size, largest, animations);
  }

}


export function getCombSortAnimations(array){
  const animations = [];

  runCombSort(array, animations);

  return animations;
}

function runCombSort(array, animations){
  var iteration_count = 0;
  var gap = array.length - 2;
  var decrease_factor = 1.25;
  while (!is_array_sorted(array, animations)){

    if(iteration_count > 0 ){
      // Decrease gap size by 25% each pass
      gap = (gap === 1) ? gap : Math.floor(gap / decrease_factor);
    }
    var front = 0 ;
    var back = gap;
    while (back <= array.length - 1){

      // Compare elements at the front and back of the gap until array is sorted.
      if(array[front] > array[back]){
        swap(array, front, back, animations);
      }

      front += 1 ;
      back += 1 ; 

    }
    iteration_count += 1
    
  }
}

function is_array_sorted(array, animations){
  var sorted = true ; 
  for( var i = 0; i < array.length - 1 ; i++){
    if(array[i] > array[i + 1]){
      sorted = false  ;
      break;
    }
  }
  return sorted;
}


export function getGnomeSortAnimations(array){
  const animations = [] ;

  runGnomeSort(array, animations);

  return animations;

}

function runGnomeSort(array, animations){

  let index = 0;
  let size = array.length ; 

  while (index < size){

    //If we're at the starting position, move forward one index
    if(index === 0 ){
      index++ ; 
    }

    //If the current element is larger than or equal to the previous, move forward one index
    if(array[index] >= array[index - 1]){
      animations.push([index, 1]);
      index++;
    }

    //If current element is smaller than the previous, swap the two and move back one index
    else{
      swap(array, index, index - 1, animations);
      index--;
      animations.push([index, 5]); 
    }
  }

}

export function getShellSortAnimations(array){
  const animations = [] ;

  runShellSort(array, animations);

  return animations;

}

function runShellSort(array, animations){

  //Shell sort is a variation of insertion sort
  let size = array.length;

  //Gap is used as an interval to find elements that are far apart from each other.
  //As time goes on, the interval will grow smaller and we compare closer elements.

  for (let gap = Math.floor(size/2) ; gap > 0 ; gap = Math.floor(gap/2)){
    for (let i = gap; i < size; i += 1){
      let temp = array[i];
      let j ;
      animations.push([i, 2]);

      // Compare and swap elements that are gap-distance apart
      for(j = i ; j >= gap && (array[j-gap] > temp) ; j-=gap){
        array[j] = array[j - gap] ;
        animations.push([j, j-gap, 3]); 
      }

      // Put the original array[i] element in its correct location
      array[j] = temp ; 
      animations.push([j, i, 4]); 
    }
  }
}
