import React from 'react';

class Checkbox extends React.Component {
  render() {
    const { value, handleChange} = this.props

    return(
      <input type='checkbox' name='checkboxForm' value={value} onChange={handleChange} />
    );
  }
}

export default Checkbox;
