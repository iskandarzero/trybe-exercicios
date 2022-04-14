import React from 'react';
import Form from './Form';
import Div from './Div';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.handleChanges = this.handleChanges.bind(this);
    this.deleteInfo = this.deleteInfo.bind(this);
    this.checkNumber = this.checkNumber.bind(this);
    this.saveButton = this.saveButton.bind(this);
    this.removeCharacters = this.removeCharacters.bind(this);

    this.state = {
      username: '',
      userEmail: '',
      CPF: '',
      address: '',
      city: '',
      estado: '',
      cv: '',
      cargo: '',
      description: '',
      moradia: '',
      savedUsername: '',
      savedUserEmail: '',
      savedCPF: '',
      savedAddress: '',
      savedCity: '',
      savedEstado: '',
      savedCv: '',
      savedCargo: '',
      savedDescription: '',
      savedMoradia: '',
    }
  }

  handleChanges({ target }) {
    this.setState({
      [target.name]: target.value,
    })
  }

  removeCharacters() {
    const {address} = this.state;
    this.setState({
      address: address.replace(/[^a-zA-Z0-9]/g, ''),
    })
  }

  checkNumber() {
    const {city} = this.state;
    if(!isNaN(Number(city.charAt(0)))) {
      this.setState({
        city: '',
      })
    }
  }

  mouseAlert() {
    alert('Preencha com cuidado esta informação')
  }

  saveButton() {
    const {username, userEmail, CPF, address, city, estado, cv, cargo, description, moradia} = this.state;

    this.setState({
      savedUsername: username,
      savedUserEmail: userEmail,
      savedCPF: CPF,
      savedAddress: address,
      savedCity: city,
      savedEstado: estado,
      savedCv: cv,
      savedCargo: cargo, 
      savedDescription: description,
      savedMoradia: moradia,
    })
  }

  deleteInfo() {
    this.setState({
      username: '',
      userEmail: '',
      CPF: '',
      address: '',
      city: '',
      estado: '',
      cv: '',
      cargo: '',
      description: '',
      moradia: '',
      savedUsername: '',
      savedUserEmail: '',
      savedCPF: '',
      savedAddress: '',
      savedCity: '',
      savedEstado: '',
      savedCv: '',
      savedCargo: '',
      savedDescription: '',
      savedMoradia: '',
    })
  }

  render() {
    const { username, userEmail, CPF, address, city, estado, cv, cargo, description,savedUsername, savedUserEmail, savedCPF, savedAddress, savedCity, savedEstado, savedCv, savedCargo, savedDescription, savedMoradia } = this.state;
    return (
      <>
      <Form
        onInputChange={this.handleChanges}
        username={username}
        userEmail={userEmail}
        CPF={CPF}
        address={address}
        city={city}
        estado={estado}
        cv={cv}
        cargo={cargo}
        description={description}
        keyUp={this.removeCharacters}
        onBlur={this.checkNumber}
        mouseEnter={this.mouseAlert} 
      />
      <button onClick={this.saveButton}>Salvar</button>
      <button onClick={this.deleteInfo}>Limpar</button>
      <Div
        userName={savedUsername}
        email={savedUserEmail}
        CPF={savedCPF}
        address={savedAddress}
        city={savedCity}
        estado={savedEstado}
        moradia={savedMoradia}
        cv={savedCv}
        cargo={savedCargo}
        description={savedDescription}
      />
      </>
    );
  }
}

export default App;
