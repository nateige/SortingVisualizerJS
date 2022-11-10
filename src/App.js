import logo from './logo.svg';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import SortingChart from './SortingChart/SortingChart'
import './App.css';
import React from 'react' ; 

function App() {
  return (
    <div className="App">
    <section>
    <SortingVisualizer></SortingVisualizer>
    <SortingChart></SortingChart>

    </section>
    
    </div>
    
  );
}

export default App;
