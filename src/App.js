import React, {Component} from 'react';
import Catalog from './components/Catalog';
// import Notes from './components/Notes';
// import logo from './logo.svg';

 class App extends Component {
     constructor(props){
         super(props);
         this.state = {
             username: ''
         }
     }
     handleInputChange = (event) => {
         console.log(event.target.value);
         this.setState({username: event.target.value})
     }
     render() {
         return (
             <div className="App" style={{padding: '2vw'}}>

                 <h3>Welcome. Please enter your username to view the catalog:</h3>
                 <input name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                 />
                 { this.state.username.length > 4 &&
                     <Catalog
                         textSize="big"
                     />
                 }
             </div>
         );
     }
}

export default App;
