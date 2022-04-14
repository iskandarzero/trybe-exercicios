import React from 'react';

class Textarea extends React.Component {
  render() {
    const { value, handleChange} = this.props
    let error = '';
    if (value.length > 120) error = 'Mutcho texto'

    return(
      <div>
      <textarea name='textareaForm' value={value} onChange={handleChange} />
      <span>{error}</span>
      </div>
    );
  }
}

export default Textarea;
