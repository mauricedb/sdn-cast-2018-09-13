import React from 'react';

class Joke extends React.Component {
    state ={
        joke:''
    }
  componentDidMount() {
    const url = this.props.url;

    fetch(url)
        .then(rsp => rsp.json())
        .then(joke => this.setState({joke: joke.value}));
  }

  render() {
    const url = this.props.url;
    const joke = this.state.joke;

    return <div>A joke van: {url} is {joke}</div>;
  }
}

export default Joke;
