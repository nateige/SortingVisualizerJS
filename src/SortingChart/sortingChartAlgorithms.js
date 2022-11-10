
export function getQuicksortData(array){

  var Data = [];
  var startTime = Date.now();

  let left = 0 ;
  let right = array.length - 1 ;

  Data = runQuickSort(array, left, right);

  var endTime = Date.now() ; 
  var completeTime = endTime - startTime ; 

//  console.log("Quicksort Time|" + completeTime);
  
  return completeTime ; 
}


function runQuickSort(array, left, right){

  if(left >= right){
    return;
  }

  let index = quicksortPartition(array, left, right);

  //Recursively run quicksort on smaller sections of the array until it is fully sorted
  runQuickSort(array, left, index - 1);

  runQuickSort(array, index + 1, right);

  return array;

}

function quicksortPartition(array, left, right){

  //NOTE: QUICKSORT will likely need different array logic than others for animating swaps

  var pivotIndex = left ;
  var pivotValue = array[right] ;
  
  for(let i = left ; i < right  ; i++){

    if(array[i] < pivotValue){

     //swap(array, i, pivotIndex, Data);
     let tmp = array[i];
     array[i] = array[pivotIndex];
     array[pivotIndex] = tmp ;
   
     pivotIndex++; 
    }
  }

 //swap(array, pivotIndex, right, Data);
 let tmp = array[pivotIndex];
 array[pivotIndex] = array[right];
 array[right] = tmp ;

  return pivotIndex ;
}

function swap(mainArray, firstIndex, secondIndex){

  let tmp = mainArray[firstIndex];
  mainArray[firstIndex] = mainArray[secondIndex];
  mainArray[secondIndex] = tmp ;

}

export function getSelectionSortData(array){
  var Data = [];

  var startTime = Date.now();

  Data = runSelectionSort(array);

  var endTime = Date.now();

  var completeTime = endTime - startTime ; 

  return completeTime;
}

function runSelectionSort(array){

  let size = array.length ;
  for (let i = 0 ; i < size - 1 ; i++){

    //Assign first array element as the current minimum value
    let min_idx = i ;

    for ( let j =  i + 1 ; j < size ; j++){

      //If current array element is less than the minimum value, update the minimum value
      if(array[j] < array[min_idx]){
        min_idx = j;
      }
    }
    //swap(array, min_idx, i, Data);
    let tmp = array[min_idx];
    array[min_idx] = array[i];
    array[i] = tmp ;

  }

  return array; 

}

export function getBubbleSortData(array){
  var Data = [];

  var startTime = Date.now();
  
  Data = runBubbleSort(array);

  var endTime = Date.now();

  var completeTime = endTime - startTime ;
  
  //console.log("|Bubble Time|" + completeTime);

  return completeTime;
}

function runBubbleSort(array){

  let size = array.length; 
  for(let i = 0 ; i < size - 1 ; i++){
    for(let j = 0; j < size - i - 1; j++){
      //Compare array element with element right after it and perform necessary swaps
      if(array[j] > array[j + 1]){
        swap(array, j, j + 1);
      }
    }
  }
 return array; 
}

export function getInsertionSortData(array){
  var Data = [];

  var startTime = Date.now();
  Data = runInsertionSort(array);
  var endTime = Date.now();

  var completeTime = endTime - startTime ;
  
 // console.log("|Insertion Time|" + completeTime);

  return completeTime;
}

function runInsertionSort(array){

  let key = 0 ;
  let j = 0 ;
  let size = array.length ;


  for (let i = 1 ; i < size ; i++){

    //Select the first element that has a predecessor as the key
    key = array[i];
 

    //The j index represents the predecessor to the key
    j = i - 1;
    
    //Move all elements that are greater than the key one index ahead
    while ( j >= 0 && array[j] > key){
      array[j+1] = array[j];

      //Decrement j to ensure that the key is inserted back in the right place
      j = j - 1 ;

    }
   
    //Insert the key back into its sorted position
    array[j+1] = key ;

  }

  return array ;

}

export function getHeapSortData(array){
  var Data = [];

  var startTime = Date.now();
  Data =  runHeapSort(array);
  var endTime = Date.now();

  var completeTime = endTime - startTime ;

  return completeTime;
}

function runHeapSort(array){

  let size = array.length ; 
  let i = Math.floor(size/ 2 - 1);
  let k = size - 1 ;

  while  ( i >= 0){
    heapify(array, size, i);
    i--;
  }

  while (k >= 0 ){
    swap(array, 0, k);
    heapify(array, k, 0);
    k--;
  }

  return array ;
}

// Organizes array into a max-heap structure
function heapify(array, size, i){
  let largest = i ;
  let left = i * 2 + 1 ; 
  let right = left + 1 ; 

  //If the left child is larger than the root node, assign it to the root
  if (left < size && array[left] > array[largest]){
    //Data here to mark the bounds of each binary-tree branch
    largest = left ;
  }

  //If the right child is larger than the root node, assign it to the root
  if(right < size && array[right] > array[largest]){
    largest = right;
  }

  // If the largest value has changed through searching left and right nodes, swap with root
  if(largest !== i){
    swap(array, i, largest) ;
    heapify(array, size, largest);
  }

}


export function getCombSortData(array){
  var Data = [];

  var startTime = Date.now();

  Data = runCombSort(array);

  var endTime = Date.now();

  var completeTime = endTime - startTime;

  return completeTime;
}

function runCombSort(array){
  var iteration_count = 0;
  var gap = array.length - 2;
  var decrease_factor = 1.25;
  while (!is_array_sorted(array)){
    if(iteration_count > 0 ){
      gap = (gap === 1) ? gap : Math.floor(gap / decrease_factor);
    }
    var front = 0 ;
    var back = gap;
    while (back <= array.length - 1){

      if(array[front] > array[back]){
        swap(array, front, back);
      }

      front += 1 ;
      back += 1 ; 

    }
    iteration_count += 1
    
  }
  return array;
}

function is_array_sorted(array){
  var sorted = true ; 
  for( var i = 0; i < array.length - 1 ; i++){
    if(array[i] > array[i + 1]){
      sorted = false  ;
      break;
    }
  }
  return sorted;
}


export function getGnomeSortData(array){
  var Data = [] ;

  var startTime = Date.now();

  Data = runGnomeSort(array, Data);

  var endTime = Date.now();

  var completeTime = endTime - startTime ; 

  return completeTime;

}

function runGnomeSort(array){

  let index = 0;
  let size = array.length ; 

  while (index < size){

    //If we're at the starting position, move forward one index
    if(index === 0 ){
      index++ ; 
    }

    //If the current element is larger than or equal to the previous, move forward one index
    if(array[index] >= array[index - 1]){
      index++;
    }

    //If current element is smaller than the previous, swap the two and move back one index
    else{
      swap(array, index, index - 1);
      index--;
    }
  }

  return array ; 
}

export function getShellSortData(array){
  var Data = [] ;

  var startTime = Date.now();

  Data = runShellSort(array);

  var endTime = Date.now();
  var completeTime = endTime - startTime ; 

  return completeTime;

}

function runShellSort(array){

  //Shell sort is a variation of insertion sort
  let size = array.length;

  //Gap is used as an interval to find elements that are far apart from each other.
  //As time goes on, the interval will grow smaller and we compare closer elements.

  for (let gap = Math.floor(size/2) ; gap > 0 ; gap = Math.floor(gap/2)){
    for (let i = gap; i < size; i += 1){
      let temp = array[i];
      let j ;

      for(j = i ; j >= gap && (array[j-gap] > temp) ; j-=gap){
        array[j] = array[j - gap] ;
      }

      array[j] = temp ; 
    }
  }
  return array;
}
