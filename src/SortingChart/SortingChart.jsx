import React, { useState, useEffect } from 'react';
import * as controls from './sortingChartAlgorithms';
import '../SortingVisualizer/SortingVisualizer.css';
import { Line, Chart } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)


const chartOptions = {
  plugins: {
  title: {
      display: true,
      text: 'Completion time of Sorting Algorithms (ms)',
      fontSize: 50,
      top: 10
  },
  legend: {
      display: true,
      position: 'left',
  }
}
};

// Initial data rendered in the line chart
var initData = {
  labels: ['100x100', '500x500', '1000x1000', '2000x2000'],
  datasets: [
    {
      label: 'Algo1',
      data: [10, 50, 25, 70],
      backgroundColor: 'blue',
      borderColor: 'lightblue',
      fill: false,
      lineTension: 0,
      radius: 5,
    },
    {
      label: 'Algo2',
      data: [20, 35, 40, 60],
      backgroundColor: 'green',
      borderColor: 'lightgreen',
      fill: false,
      lineTension: 0,
      radius: 5,
    },
    {
      label: 'Algo3',
      data: [22, 32, 42, 62],
      backgroundColor: 'red',
      borderColor: 'pink',
      fill: false,
      lineTension: 0,
      radius: 5,
    },
    {
      label: 'Algo4',
      data: [29, 39, 49, 69],
      backgroundColor: 'orange',
      borderColor: 'yellow',
      fill: false,
      lineTension: 0,
      radius: 5,
    },
  ],
};

// Arrays of the completion times for each selected algorithm
var algo1Data = [];
var algo2Data = [];
var algo3Data = [];
var algo4Data = [];

// Updated data object for the chart
let midData = {
  labels: ['100x100', '500x500', '1000x1000', '2000x2000'],
  datasets: [
    {
      label: 'Algo1',
      data: [1, 2, 3, 4],
      backgroundColor: 'blue',
      borderColor: 'lightblue',
      fill: false,
      lineTension: 0,
      radius: 5,
    },
    {
      label: 'Algo2',
      data: [20, 35, 40, 60],
      backgroundColor: 'green',
      borderColor: 'lightgreen',
      fill: false,
      lineTension: 0,
      radius: 5,
    },
    {
      label: 'Algo3',
      data: [22, 32, 42, 62],
      backgroundColor: 'red',
      borderColor: 'pink',
      fill: false,
      lineTension: 0,
      radius: 5,
    },
    {
      label: 'Algo4',
      data: [29, 39, 49, 69],
      backgroundColor: 'orange',
      borderColor: 'yellow',
      fill: false,
      lineTension: 0,
      radius: 5,
    },
  ],
};

function SortingChart(){

 const [chartData, setChartData] = useState(initData);

 // Updates chart data on change
  const handleChange = () => {
    
    // Grab selected algorithms and stores them as strings
    var algoName1 = document.getElementById('selectA').value ;
    var algoName2 = document.getElementById('selectB').value ; 
    var algoName3 = document.getElementById('selectC').value ; 
    var algoName4 = document.getElementById('selectD').value ;

    midData = {
      labels: ['100x100', '500x500', '1000x1000', '2000x2000'],
      datasets: [
        {
          label: algoName1,
          data: algo1Data,
          backgroundColor: 'blue',
          borderColor: 'lightblue',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: algoName2,
          data: algo2Data,
          backgroundColor: 'green',
          borderColor: 'lightgreen',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: algoName3,
          data: algo3Data,
          backgroundColor: 'red',
          borderColor: 'pink',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: algoName4,
          data: algo4Data,
          backgroundColor: 'orange',
          borderColor: 'yellow',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
      ],
    };

    setChartData(midData);
   
  }

let arrayACollection = [];
let arrayBCollection = [];
let arrayCCollection = [];
let arrayDCollection = [] ; 

let arraysA   = [];
let arraysB  = [];
let arraysC  = [];
let arraysD = [];

// Generate a random number from a given min and max range
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function generateRandomArrays() {

  arrayACollection = [];
  arrayBCollection = [];
  arrayCCollection = [];
  arrayDCollection = [] ; 
  
  arraysA   = [];
  arraysB  = [];
  arraysC  = [];
  arraysD = [];
  
  // Generate random 100x100 arrays
  for(let i = 0; i < 100; i++){
      for (let j = 0; j < 100; j++) {
          arraysA.push(randomIntFromInterval(5,10000));
        }
        arrayACollection.push(arraysA);
        arraysA = [];
  }

  // Generate random 500x500 arrays
  for(let i = 0; i < 500; i++){
      for (let j = 0; j < 500; j++) {
          arraysB.push(randomIntFromInterval(5,10000));
        }
        arrayBCollection.push(arraysB);
        arraysB = [];
  }

  // Generate random 1000x1000 arrays
  for(let i = 0; i < 1000; i++){
      for (let j = 0; j < 1000; j++) {
          arraysC.push(randomIntFromInterval(5,10000));
        }
        arrayCCollection.push(arraysC);
        arraysC = [];
  }

  // Generate random 2000x2000 arrays
  for(let i = 0; i < 2000; i++){
      for (let j = 0; j < 2000; j++) {
          arraysD.push(randomIntFromInterval(5,10000));
        }
        arrayDCollection.push(arraysD);
        arraysD = [];
  }

 console.log(arrayBCollection);
    
}

function getSortData(){

  generateRandomArrays();

  var algoName1 = document.getElementById('selectA').value ;
  var algoName2 = document.getElementById('selectB').value ; 
  var algoName3 = document.getElementById('selectC').value ; 
  var algoName4 = document.getElementById('selectD').value ;
  
  var algoTime1_A = 0 ;
  var algoTime1_B = 0 ;
  var algoTime1_C = 0 ;
  var algoTime1_D = 0 ;
  
  var algoTime2_A = 0 ;
  var algoTime2_B = 0 ;
  var algoTime2_C = 0 ;
  var algoTime2_D = 0 ;

  var algoTime3_A = 0 ;
  var algoTime3_B = 0 ;
  var algoTime3_C = 0 ;
  var algoTime3_D = 0 ;

  var algoTime4_A = 0 ;
  var algoTime4_B = 0 ;
  var algoTime4_C = 0 ;
  var algoTime4_D = 0 ;
  
  console.log(algoName1 + algoName2 + algoName3 + algoName4);   

  // Promise logic used to make sure that algorithms run sequentially and don't interfere with time results
  let chartPromise = new Promise(function(resolve, reject) {
    algoTime1_A   = sortLoop(100,   algoName1, arrayACollection);
    algoTime1_B  = sortLoop(500,  algoName1, arrayBCollection);
    algoTime1_C  = sortLoop(1000,  algoName1, arrayCCollection);
    algoTime1_D = sortLoop(2000, algoName1, arrayDCollection);

    // Generate new un-sorted data
    generateRandomArrays() ;
    console.log("|here4|");

    resolve(1);

  }).then(function(result) {

    algoTime2_A   = sortLoop(100,   algoName2, arrayACollection);
    algoTime2_B  = sortLoop(500,  algoName2, arrayBCollection);
    algoTime2_C  = sortLoop(1000,  algoName2, arrayCCollection);
    algoTime2_D = sortLoop(2000, algoName2, arrayDCollection);


    generateRandomArrays() ;

    console.log("|here5|");

    return result ; 
  
  }).then(function(result) {
    algoTime3_A   = sortLoop(100,   algoName3, arrayACollection);
    algoTime3_B  = sortLoop(500,  algoName3, arrayBCollection);
    algoTime3_C  = sortLoop(1000,  algoName3, arrayCCollection);
    algoTime3_D = sortLoop(2000, algoName3, arrayDCollection);

    generateRandomArrays() ;
    console.log("|here6|"); 

    return result ; 
  }).then(function(result){
    algoTime4_A   = sortLoop(100,   algoName4, arrayACollection);
    algoTime4_B  = sortLoop(500,  algoName4, arrayBCollection);
    algoTime4_C  = sortLoop(1000,  algoName4, arrayCCollection);
    algoTime4_D = sortLoop(2000, algoName4, arrayDCollection);


    console.log("|here7|");

    return result ; 
  }).then(function(result){

    algo1Data = [algoTime1_A, algoTime1_B, algoTime1_C, algoTime1_D];
    algo2Data = [algoTime2_A, algoTime2_B, algoTime2_C, algoTime2_D];
    algo3Data = [algoTime3_A, algoTime3_B, algoTime3_C, algoTime3_D];
    algo4Data = [algoTime4_A, algoTime4_B, algoTime4_C, algoTime4_D];

    handleChange();

  })
  
}

// Aggregates completion time for sorting large collection of arrays
function sortLoop(sortSize, algoName, arrayCollection){

  var totalTime = 0 ;

  if(algoName == ''){
    console.log("|NO SELECTION|");
    return;
  }

  for(let i = 0 ; i < sortSize ; i++){
      switch(algoName){
          case "Quick Sort":
            totalTime = totalTime + controls.getQuicksortData(arrayCollection[i]);
            break;
          case "Selection Sort":
            totalTime = totalTime + controls.getSelectionSortData(arrayCollection[i]);
            break;
          case "Heap Sort":
            totalTime = totalTime + controls.getHeapSortData(arrayCollection[i]);
            break;
          case "Comb Sort":
            totalTime = totalTime + controls.getCombSortData(arrayCollection[i]);
            break;
          case "Bubble Sort":
            totalTime = totalTime + controls.getBubbleSortData(arrayCollection[i]);
            break;
          case "Insertion Sort":
            totalTime = totalTime + controls.getInsertionSortData(arrayCollection[i]);
            break;
          case "Gnome Sort":
            totalTime = totalTime + controls.getGnomeSortData(arrayCollection[i]);
            break;
          case "Shell Sort":
            totalTime = totalTime + controls.getShellSortData(arrayCollection[i]);
            break;
          default:
            break;
        }
  }

  return totalTime ;
}
  return (
    <div>
            <div id="statGraph">
            <Line data={chartData} options={chartOptions} redraw={true} ></Line>
            
          <label id="b1" className='smallText'> Algorithm 1: </label>
          <select id="selectA">
            <br></br>
            <br></br>
          <option></option>
          <option>Quick Sort</option>
          <option>Selection Sort</option>
          <option>Heap Sort</option>
          <option>Comb Sort</option>
          <option>Bubble Sort</option>
          <option>Insertion Sort</option>
          <option>Gnome Sort</option>
          <option>Shell Sort</option>
          </select>
          <label id="b2" className='smallText'> Algorithm 2: </label>
          <select id="selectB">
          <option></option>
          <option>Quick Sort</option>
          <option>Selection Sort</option>
          <option>Heap Sort</option>
          <option>Comb Sort</option>
          <option>Bubble Sort</option>
          <option>Insertion Sort</option>
          <option>Gnome Sort</option>
          <option>Shell Sort</option>
          </select>
          <label id="b3" className='smallText'> Algorithm 3: </label>
          <select id="selectC">
          <option></option>
          <option>Quick Sort</option>
          <option>Selection Sort</option>
          <option>Heap Sort</option>
          <option>Comb Sort</option>
          <option>Bubble Sort</option>
          <option>Insertion Sort</option>
          <option>Gnome Sort</option>
          <option>Shell Sort</option>
          </select>
          <label id="b4" className='smallText'> Algorithm 4: </label>
          <select id="selectD">
          <option></option>
          <option>Quick Sort</option>
          <option>Selection Sort</option>
          <option>Heap Sort</option>
          <option>Comb Sort</option>
          <option>Bubble Sort</option>
          <option>Insertion Sort</option>
          <option>Gnome Sort</option>
          <option>Shell Sort</option>
          </select>
          <br></br>
          <button onClick={() => getSortData()}> Chart Sort</button>
            
            </div>
            <div id="stats"></div>

          </div>
  );

}


export default SortingChart;