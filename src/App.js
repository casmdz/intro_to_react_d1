import React, { Component } from 'react'
import Home from './Home'
import Nav from './Nav'
import News from './News'

export default class App extends Component {
  constructor(){
    super();
    this.state ={
      test: 0
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <Home testVar = {this.state.test} /> {/* props  */}
        {/* <News /> */}
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">

//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
