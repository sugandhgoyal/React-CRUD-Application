import React from 'react';

class Mainpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('props', this.props);
    return (
      <div>card</div>
    );
  }
}

export default Mainpage;
