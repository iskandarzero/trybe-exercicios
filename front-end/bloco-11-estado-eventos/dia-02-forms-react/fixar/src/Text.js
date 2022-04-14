import React from 'react';

class Text extends React.Component {
  render() {
    const { value, handleChange} = this.props

    return(
      <input type='text' name='textForm' value={value} onChange={handleChange} />
    );
  }
}

export default Text;
