import React from 'react';
import './App.css';
import BasicInfo from './BasicInfo.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      person: { name: 'Kenneth', dob: 'August 1st 1996', number: '1234567890' }

    }
  }
  render() {
    return (
      <BasicInfo person={this.state.person} />
    )
  }
}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div>
//
//         </div>
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

export default App;
