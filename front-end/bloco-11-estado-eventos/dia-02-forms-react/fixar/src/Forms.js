import React from 'react';
import Select from './Select';
import Text from './Text';
import Email from './Email';
import Textarea from './Textarea';
import Checkbox from './Checkbox';

class Forms extends React.Component {
  constructor() {
    super();
    
    this.handleChange = this.handleChange.bind(this);
    this.state = ({
      selectForm: '',
      textForm: '',
      emailForm: '',
      textareaForm: '',
      checkboxForm: '',
    })
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({[target.name]: value})
  }

  render() {
    return(
      <form>
        <fieldset>
          <Select value={this.state.selectForm} handleChange={this.handleChange} />
          <Text value={this.state.textForm} handleChange={this.handleChange} />
          <Email value={this.state.emailForm} handleChange={this.handleChange} />
          <Textarea value={this.state.textareaForm} handleChange={this.handleChange} />
          <Checkbox value={this.state.checkboxForm} handleChange={this.handleChange} />
          <input type="file" />
        </fieldset>
      </form>
    );
  }
}

export default Forms;