import React from 'react';

class Select extends React.Component {
  render() {
    const { value, handleChange} = this.props

    return(
      <select name='selectForm' value={value} onChange={handleChange}>
        <option>roll20</option>
        <option>rrpg</option>
        <option>outros</option>
      </select>
    );
  }
}

export default Select;
