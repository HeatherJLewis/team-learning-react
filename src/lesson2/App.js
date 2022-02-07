import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { color: ''}
  }

  componentDidMount(){
    document.addEventListener('colourChange', (event) => {
      this.setState({color: event.detail})
      console.log(this.state.color, event.detail)})
  }

  render() {
    return (
      <div style={{backgroundColor:this.state.color, width: '200px', height: '200px', borderRadius: '50%' }}>

      </div>
    );
  }
}

export default App;
