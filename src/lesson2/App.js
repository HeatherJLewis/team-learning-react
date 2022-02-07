import React, { Component } from 'react';

let counter = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { color: '' }
    this.handleEvent = this.handleEvent.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  handleEvent(event) {
    // console.log('SETSTATE!-----')
    // this.setState({ color: event.detail });
    this.forceUpdate()
  }

  onClickHandler(event) {
    counter++;
    this.forceUpdate();
  }

  componentDidMount() {
    document.addEventListener('colourChange', this.handleEvent);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.color === nextState.color) {
      console.log('PREVENTING UPDATE!------')
      return false;
    }

    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.color === this.state.color) {
      console.log('SAME COLOUR');
    }

    // console.log('UPDATED!----------');
  }


  componentWillUnmount() {
    document.removeEventListener('colourChange', this.handleEvent);
  }

  render() {
    console.log('RENDERING!------')
    return (
      <div style={{ backgroundColor: this.state.color, width: '200px', height: '200px', borderRadius: '50%' }} onClick={this.onClickHandler}>
        <h1>{counter}</h1>
      </div>
    );
  }
}

export default App;
