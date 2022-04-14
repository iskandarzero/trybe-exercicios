import React from 'react';

class Email extends React.Component {
  render() {
    const { value, handleChange} = this.props

    return(
      <input type='email' name='emailForm' value={value} onChange={handleChange} />
    );
  }
}

export default Email;
