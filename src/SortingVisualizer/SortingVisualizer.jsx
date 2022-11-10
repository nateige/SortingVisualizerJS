import React from 'react';
import  * as controls from '../sortingAlgorithms/sortingAlgorithms.js'
import './SortingVisualizer.css';


// Change this value for the number of bars (value) in the array.
let NUMBER_OF_ARRAY_BARS = 25

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    // array1: Holds the values of array elements that are rendered on the page
    this.state = {
      array1: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  // Renders a new random array on the page
  resetArray() {

    // Grab selected value to determine size of random array
    let selection2 = document.getElementById('select2').value ;
    
    if(selection2 != ""){
      NUMBER_OF_ARRAY_BARS = parseInt(selection2);
    }

    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 300));
    }
    const copy_array2 = array;
    const copy_array3 = array;
    const copy_array4 = array; 
    this.setState({array1: [], array2: [], array3: [], array4: []});
    this.setState({array1: array, array2: copy_array2, array3: copy_array3, array4: copy_array4});
  }

  // Animation Codes:
  // 1 - Color Pivot
  // 2 - Color Search Index
  // 3 - Swap Values
  // 4 - Restore Pivot to Original Color
  // 5 - Found value less than pivot
  async quickSort() {

    let animations = [];
    animations = controls.getQuicksortAnimations(this.state.array1);

    let newAnimations = [];

    for( let animation of animations){
      newAnimations.push(animation);
      newAnimations.push(animation);
      newAnimations.push(animation);

    }
    animations = null;

    for (let i =  0; i < newAnimations.length ; i++){
      let arrayBars = document.getElementsByClassName('array-bar1');
      let barOneStyle;
      let barTwoStyle;
      let animationL = newAnimations[i] ; 
      let animationCode = animationL[animationL.length - 1 ];
      let colorChange = false; 

      switch(animationCode){
        case 1:
          colorChange = (i % 3 !== 2) ; 

          barOneStyle = arrayBars[animationL[0]].style;

          if(colorChange){
          setTimeout(() => {
            barOneStyle.backgroundColor = 'red' ;
  
          }, i * 20); 
        }

        else{
          setTimeout(() => {
            barOneStyle.backgroundColor = 'purple' ;
  
          }, i * 20); 

        }

          break;
        case 2:
          colorChange = (i % 3 !== 2) ; 

          barOneStyle = arrayBars[animationL[0]].style;

          if(colorChange){
          setTimeout(() => {
            barOneStyle.backgroundColor = 'orange' ;
  
          }, i * 20); 
        }
        else{
          setTimeout(() => {
            barOneStyle.backgroundColor = 'turquoise' ;
  
          }, i * 20); 
        }
        break;
        case 3:
          colorChange = (i % 3 !== 2) ; 
          barOneStyle = arrayBars[animationL[0]].style;
          barTwoStyle = arrayBars[animationL[1]].style;
          if (colorChange){
            const color = i % 3 === 0 ? 'blue' : 'turquoise' ;
            setTimeout(() => {
              barOneStyle.backgroundColor = color ;
              barTwoStyle.backgroundColor = color ;  
    
            }, i * 20); 
          }
          else{
            setTimeout(() => {
              const tempHeight = barOneStyle.height ;
              barOneStyle.height = barTwoStyle.height ;
              barTwoStyle.height = tempHeight ;  
    
            }, i * 20)
          }
          break;
        case 4:
          barOneStyle = arrayBars[animationL[0]].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = 'turquoise' ;
  
          }, i * 20); 
          break;
          
        default:

      }
    }

  }

  //Animation Codes:
  // 1 - Color Minimum
  // 2 - Search Index for new minimum
  // 3 - Swap values
  // 4 - Update minimum value
  async selectionSort() {

    let animations = [];
    animations = controls.getQuicksortAnimations(this.state.array1);

    let newAnimations = [];

    for( let animation of animations){
      newAnimations.push(animation);
      newAnimations.push(animation);
      newAnimations.push(animation);

    }

    animations = null;

    for (let i =  0; i < newAnimations.length ; i++){
      let arrayBars = document.getElementsByClassName('array-bar1');
      console.log("|ARRAY BARS SELSORT|" + String(arrayBars));
      let barOneStyle;
      let barTwoStyle;
      let animationL = newAnimations[i] ; 
      let animationCode = animationL[animationL.length - 1 ];
      let colorChange = false; 

      switch(animationCode){
        case 1:
          colorChange = (i % 3 !== 2) ; 

          barOneStyle = arrayBars[animationL[0]].style;

          if(colorChange){
          setTimeout(() => {
            barOneStyle.backgroundColor = 'red' ;
  
          }, i * 20); 
        }

          break;
        case 2:
          colorChange = (i % 3 !== 2) ; 

          barOneStyle = arrayBars[animationL[0]].style;

          if(colorChange){
          setTimeout(() => {
            barOneStyle.backgroundColor = 'orange' ;
  
          }, i * 20); 
        }
        else{
          setTimeout(() => {
            barOneStyle.backgroundColor = 'turquoise' ;
  
          }, i * 20); 
        }
        break;
        case 3:
          colorChange = (i % 3 !== 2) ; 
          barOneStyle = arrayBars[animationL[0]].style;
          barTwoStyle = arrayBars[animationL[1]].style;
          if (colorChange){
            const color = i % 3 === 0 ? 'blue' : 'turquoise' ;
            setTimeout(() => {
              barOneStyle.backgroundColor = color ;
              barTwoStyle.backgroundColor = color ;  
    
            }, i * 20); 
          }
          else{
            setTimeout(() => {
              const tempHeight = barOneStyle.height ;
              barOneStyle.height = barTwoStyle.height ;
              barTwoStyle.height = tempHeight ;  
    
            }, i * 20)
          }
          break;
        case 4:
          colorChange = (i % 3 !== 2) ; 
          barOneStyle = arrayBars[animationL[0]].style;

          if (colorChange){
            const color = i % 3 === 0 ? 'purple' : 'turquoise' ;
            setTimeout(() => {
              barOneStyle.backgroundColor = color ;
              barTwoStyle.backgroundColor = color ;  
    
            }, i * 20); 
          }

          break;
          
        default:

      }
    }

  }

  // Animation Codes
  // 1 - Mark the max node on this branch (if left child)
  // 2 - Mark the max node on this branch (if right child)
  // 3 - Swap values

  heapSort() {
    let animations = [];
    animations = controls.getHeapSortAnimations(this.state.array1);

    let newAnimations = [];

    for( let animation of animations){
      newAnimations.push(animation);
      newAnimations.push(animation);
      newAnimations.push(animation);

    }

    animations = null;

    for (let i =  0; i < newAnimations.length ; i++){
      let arrayBars = document.getElementsByClassName('array-bar1');
      let barOneStyle;
      let barTwoStyle;
      let animationL = newAnimations[i] ; 
      let animationCode = animationL[animationL.length - 1 ];
      let colorChange = false; 

      switch(animationCode){
        case 1:
          colorChange = (i % 3 !== 2) ; 
          barOneStyle = arrayBars[animationL[0]].style;

          if(colorChange){
          setTimeout(() => {
            barOneStyle.backgroundColor = 'deeppink' ;
  
          }, i * 20); 
        }
        else{
          setTimeout(() => {
  
          }, i * 20); 
        }
        break;
        case 2:
          colorChange = (i % 3 !== 2) ; 

          barOneStyle = arrayBars[animationL[0]].style;

          if(colorChange){
          setTimeout(() => {
            barOneStyle.backgroundColor = 'darkblue' ;
  
          }, i * 20); 
        }
        else{
          setTimeout(() => {
  
          }, i * 20); 
        }
        break;
        case 3:
          colorChange = (i % 3 !== 2) ; 
          barOneStyle = arrayBars[animationL[0]].style;
          barTwoStyle = arrayBars[animationL[1]].style;
          if (colorChange){
            const color = i % 3 === 0 ? 'blue' : 'turquoise' ;
            setTimeout(() => {
              barOneStyle.backgroundColor = color ;
              barTwoStyle.backgroundColor = color ;  
    
            }, i * 20); 
          } 
          else{
            setTimeout(() => {
              const tempHeight = barOneStyle.height ;
              barOneStyle.height = barTwoStyle.height ;
              barTwoStyle.height = tempHeight ;  
    
            }, i * 20)
          }
          break;
          
        default:

      }
    }


  }

  // Animation Codes
  // 3 - Swap values
  combSort() {
    let animations = [];
    animations = controls.getCombSortAnimations(this.state.array1);

    let newAnimations = [];

    for( let animation of animations){
      newAnimations.push(animation);
      newAnimations.push(animation);
      newAnimations.push(animation);

    }

    animations = null;

    for (let i =  0; i < newAnimations.length ; i++){
      let arrayBars = document.getElementsByClassName('array-bar1');
      let barOneStyle;
      let barTwoStyle;
      let animationL = newAnimations[i] ; 
      let animationCode = animationL[animationL.length - 1 ];
      let colorChange = false; 

      switch(animationCode){
        case 3:
          colorChange = (i % 3 !== 2) ; 
          barOneStyle = arrayBars[animationL[0]].style;
          barTwoStyle = arrayBars[animationL[1]].style;
          if (colorChange){
            const color = i % 3 === 0 ? 'blue' : 'turquoise' ;
            setTimeout(() => {
              barOneStyle.backgroundColor = color ;
              barTwoStyle.backgroundColor = color ;  
    
            }, i * 20); 
          } 
          else{
            setTimeout(() => {
              const tempHeight = barOneStyle.height ;
              barOneStyle.height = barTwoStyle.height ;
              barTwoStyle.height = tempHeight ;  
    
            }, i * 20)
          }
          break;
          
        default:

      }
    }

  }

  //Animation Codes:
  // 2 - Search Index for new minimum
  // 3 - Swap values
  bubbleSort() {
    let animations = [];
    animations = controls.getBubbleSortAnimations(this.state.array1);

    let newAnimations = [];

    for( let animation of animations){
      newAnimations.push(animation);
      newAnimations.push(animation);
      newAnimations.push(animation);

    }

    animations = null;

    for (let i =  0; i < newAnimations.length ; i++){
      let arrayBars = document.getElementsByClassName('array-bar1');
      console.log("|ARRAY BARS SELSORT|" + String(arrayBars));
      let barOneStyle;
      let barTwoStyle;
      let animationL = newAnimations[i] ; 
      let animationCode = animationL[animationL.length - 1 ];
      let colorChange = false; 

      switch(animationCode){
        case 2:
          colorChange = (i % 3 !== 2) ; 

          barOneStyle = arrayBars[animationL[0]].style;

          if(colorChange){
          setTimeout(() => {
            barOneStyle.backgroundColor = 'orange' ;
  
          }, i * 20); 
        }
        else{
          setTimeout(() => {
            barOneStyle.backgroundColor = 'turquoise' ;
  
          }, i * 20); 
        }
        break;
        case 3:
          colorChange = (i % 3 !== 2) ; 
          barOneStyle = arrayBars[animationL[0]].style;
          barTwoStyle = arrayBars[animationL[1]].style;
          if (colorChange){
            const color = i % 3 === 0 ? 'blue' : 'turquoise' ;
            setTimeout(() => {
              barOneStyle.backgroundColor = color ;
              barTwoStyle.backgroundColor = color ;  
    
            }, i * 20); 
          }
          else{
            setTimeout(() => {
              const tempHeight = barOneStyle.height ;
              barOneStyle.height = barTwoStyle.height ;
              barTwoStyle.height = tempHeight ;  
    
            }, i * 20)
          }
          break;
          
        default:

      }
    }

  }

  //Animation Codes:
  // 1 - First element that has a predecessor (key)
  // 2 - Predecessor to the key
  // 3 - Swap values
  // 4 - Insert key back to its sorted position
  insertionSort(){
    let animations = [];
    animations = controls.getInsertionSortAnimations(this.state.array1);

    let newAnimations = [];

    for( let animation of animations){
      newAnimations.push(animation);
      newAnimations.push(animation);
      newAnimations.push(animation);

    }
    animations = null;

    let barOneSave; 
    for (let i =  0; i < newAnimations.length ; i++){
      let arrayBars = document.getElementsByClassName('array-bar1');
      let barOneStyle;
      let barTwoStyle;
      let animationL = newAnimations[i] ; 
      let animationCode = animationL[animationL.length - 1 ];
      let colorChange = false;

      switch(animationCode){
        case 1:
          colorChange = (i % 3 !== 2) ; 

          barOneStyle = arrayBars[animationL[0]].style;
          barOneSave = barOneStyle ; 

          if(colorChange){
          setTimeout(() => {
            barOneStyle.backgroundColor = 'red' ;
  
          }, i * 20); 
        }

          break;
        case 2:
          colorChange = (i % 3 !== 2) ; 

          barOneStyle = arrayBars[animationL[0]].style;

          if(colorChange){
          setTimeout(() => {
            barOneStyle.backgroundColor = 'orange' ;
  
          }, i * 20); 
        }
        else{
          setTimeout(() => {
            barOneStyle.backgroundColor = 'turquoise' ;
  
          }, i * 20); 
        }
        break;
        case 3:
          colorChange = (i % 3 !== 2) ; 
          barOneStyle = arrayBars[animationL[0]].style;
          barTwoStyle = arrayBars[animationL[1]].style;
          if (colorChange){
            const color = i % 3 === 0 ? 'blue' : 'turquoise' ;
            setTimeout(() => {
              barTwoStyle.backgroundColor = color ;  
    
            }, i * 20); 
          }
          else{
            setTimeout(() => {
              const tempHeight = barOneStyle.height ;
              barOneStyle.height = barTwoStyle.height ;
              barTwoStyle.height = tempHeight ;  
    
            }, i * 20)
          }
          break;
          case 4:
            colorChange = (i % 3 !== 2) ; 
  
            barOneStyle = arrayBars[animationL[0]].style;
  
            if(colorChange){
            setTimeout(() => {
              barOneStyle.backgroundColor = 'black' ;
              barOneSave.backgroundColor = 'turquoise';
    
            }, i * 20); 
          }
          else{
            setTimeout(() => {
              barOneStyle.backgroundColor = 'turquoise' ;
    
            }, i * 20); 
          }
          break;
          
        default:

      }
    }

  }

  //Animation Codes:
  // 1 - Search Index
  // 3 - Swap values
  // 5 - Move back one index
  gnomeSort(){
    let animations = [];
    animations = controls.getGnomeSortAnimations(this.state.array1);

    let newAnimations = [];

    for( let animation of animations){
      newAnimations.push(animation);
      newAnimations.push(animation);
      newAnimations.push(animation);

    }

    animations = null;

    for (let i =  0; i < newAnimations.length ; i++){
      let arrayBars = document.getElementsByClassName('array-bar1');
      let barOneStyle;
      let barTwoStyle;
      let animationL = newAnimations[i] ; 
      let animationCode = animationL[animationL.length - 1 ];
      let colorChange = false; 

      switch(animationCode){
        case 1:
          colorChange = (i % 3 !== 2) ; 

          barOneStyle = arrayBars[animationL[0]].style;

          if(colorChange){
          setTimeout(() => {
            barOneStyle.backgroundColor = 'red' ;
  
          }, i * 20); 
        }
        else{
          setTimeout(() => {
            barOneStyle.backgroundColor = 'turquoise' ;
  
          }, i * 20); 
        }
        break;
        case 2:
          colorChange = (i % 3 !== 2) ; 

          barOneStyle = arrayBars[animationL[0]].style;

          if(colorChange){
          setTimeout(() => {
            barOneStyle.backgroundColor = 'orange' ;
  
          }, i * 20); 
        }
        else{
          setTimeout(() => {
            barOneStyle.backgroundColor = 'turquoise' ;
  
          }, i * 20); 
        }
        break;
        case 3:
          colorChange = (i % 3 !== 2) ; 
          barOneStyle = arrayBars[animationL[0]].style;
          barTwoStyle = arrayBars[animationL[1]].style;
          if (colorChange){
            const color = i % 3 === 0 ? 'blue' : 'turquoise' ;
            setTimeout(() => {
              barOneStyle.backgroundColor = color ;
              barTwoStyle.backgroundColor = color ;  
    
            }, i * 20); 
          }
          else{
            setTimeout(() => {
              const tempHeight = barOneStyle.height ;
              barOneStyle.height = barTwoStyle.height ;
              barTwoStyle.height = tempHeight ;  
    
            }, i * 20)
          }
          break;
          case 4:
            colorChange = (i % 3 !== 2) ; 
  
            barOneStyle = arrayBars[animationL[0]].style;
  
            if(colorChange){
            setTimeout(() => {
              barOneStyle.backgroundColor = 'purple' ;
    
            }, i * 20); 
          }
          else{
            setTimeout(() => {
              barOneStyle.backgroundColor = 'turquoise' ;
    
            }, i * 20); 
          }
          break;
          case 5:
            colorChange = (i % 3 !== 2) ; 
  
            barOneStyle = arrayBars[animationL[0]].style;
  
            if(colorChange){
            setTimeout(() => {
              barOneStyle.backgroundColor = 'black' ;
    
            }, i * 20); 
          }
          else{
            setTimeout(() => {
              barOneStyle.backgroundColor = 'turquoise' ;
    
            }, i * 20); 
          }
          break;
          
        default:

      }
    }

  }

  //Animation Codes:
  // 2 - Search Index within gap
  // 3 - Swap values
  shellSort(){
    let animations = [];
    animations = controls.getShellSortAnimations(this.state.array1);

    let newAnimations = [];

    for( let animation of animations){
      newAnimations.push(animation);
      newAnimations.push(animation);
      newAnimations.push(animation);

    }

    animations = null;

    for (let i =  0; i < newAnimations.length ; i++){
      let arrayBars = document.getElementsByClassName('array-bar1');
      let barOneStyle;
      let barTwoStyle;
      let animationL = newAnimations[i] ; 
      let animationCode = animationL[animationL.length - 1 ];
      let colorChange = false; 

      switch(animationCode){
        case 1:
          colorChange = (i % 3 !== 2) ; 

          barOneStyle = arrayBars[animationL[0]].style;

          if(colorChange){
          setTimeout(() => {
            barOneStyle.backgroundColor = 'red' ;
  
          }, i * 20); 
        }
        else{
          setTimeout(() => {
            barOneStyle.backgroundColor = 'turquoise' ;
  
          }, i * 20); 
        }
        break;
        case 2:
          colorChange = (i % 3 !== 2) ; 

          barOneStyle = arrayBars[animationL[0]].style;

          if(colorChange){
          setTimeout(() => {
            barOneStyle.backgroundColor = 'orange' ;
  
          }, i * 20); 
        }
        else{
          setTimeout(() => {
            barOneStyle.backgroundColor = 'turquoise' ;
  
          }, i * 20); 
        }
        break;
        case 3:
          colorChange = (i % 3 !== 2) ; 
          barOneStyle = arrayBars[animationL[0]].style;
          barTwoStyle = arrayBars[animationL[1]].style;
          if (colorChange){
            const color = i % 3 === 0 ? 'blue' : 'turquoise' ;
            setTimeout(() => {
              barOneStyle.backgroundColor = color ;
              barTwoStyle.backgroundColor = color ;  
    
            }, i * 20); 
          }
          else{
            setTimeout(() => {
              const tempHeight = barOneStyle.height ;
              barOneStyle.height = barTwoStyle.height ;
              barTwoStyle.height = tempHeight ;  
    
            }, i * 20)
          }
          break;
          case 4:
            colorChange = (i % 3 !== 2) ; 
  
            barOneStyle = arrayBars[animationL[0]].style;
  
            if(colorChange){
            setTimeout(() => {
              barOneStyle.backgroundColor = 'purple' ;
    
            }, i * 20); 
          }
          else{
            setTimeout(() => {
              barOneStyle.backgroundColor = 'turquoise' ;
    
            }, i * 20); 
          }
          break;
          
        default:

      }
    }

  }

  // Triggers sort animation on the web page
  runSort(){
  
    let selection = document.getElementById('select1').value ; 
    
    switch(selection){
      case "Quick Sort":
        this.quickSort();
        break;
      case "Selection Sort":
        this.selectionSort();
        break;
      case "Heap Sort":
        this.heapSort();
        break;
      case "Comb Sort":
        this.combSort();
        break;
      case "Bubble Sort":
        this.bubbleSort();
        break;
      case "Insertion Sort":
        this.insertionSort();
        break;
      case "Gnome Sort":
        this.gnomeSort();
        break;
      case "Shell Sort":
        this.shellSort();
        break;
      default:
        break;
    }


}

  handleClick = (event, key) => {
    console.log(event.target);
    console.log('key index: ', key);
  };

  render() {
    let array_v1 = this.state.array1;

    return (
      <div>
      <div>
      <div id="heading">Exploring the Speed of Sorting Algorithms</div>
      <div id="label_bar">
        <label id="b1"> Select Algorithm </label>
        <select id="select1">
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
        <label id="b1"> Sorting Size </label>
        <select id="select2">
          <option></option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.runSort()}>Run Animation</button>

      </div>

      <div id="graph1"></div>
      <div id="net1" className="boxStats">
        <p><span id="sort1">Algorithm:</span></p>
         <div className="array-container">
         {array_v1.map((value, idx) => (
          <div
            className="array-bar1"
            key={String(idx) + " " + String("array-bar1")}
            onClick={event => this.handleClick(event,idx)}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}
        </div>
      </div>



    </div>
    </div>
      
    );
  }
}

// Generate a random number from the min-max range
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}