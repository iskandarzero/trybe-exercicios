import React from 'react';

class Form extends React.Component {
  render() {
    const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
    const {username, userEmail, CPF, address, city, estado, cv, cargo, description, onBlur, onInputChange, keyUp, mouseEnter} = this.props;
    return(
      <form>
        <fieldset>
          <input
            id="username"
            name="username"
            value={ username }
            type="text"
            maxLength="40"
            placeholder="Nome"
            onChange={ onInputChange }
            required 
          />
          <input
            name="userEmail"
            value={ userEmail }
            type="email"
            maxLength="50"
            placeholder="Email"
            onChange={ onInputChange }
            required 
          />
          <input
            name="CPF"
            value={ CPF }
            type="text"
            maxLength="11"
            placeholder="CPF"
            onChange={ onInputChange }
            required 
          />
          <input
            name="address"
            value={ address }
            type="text"
            maxLength="200"
            placeholder="Endereço"
            onKeyUp={ keyUp }
            onChange={ onInputChange }
            required 
          />
          <input
            name="city"
            value={ city }
            type="text"
            maxLength="28"
            placeholder="Cidade"
            onBlur={ onBlur }
            onChange={ onInputChange }
            required 
          />
          <select
            name="estado"
            value={ estado }
            onChange={ onInputChange }
            required
          >
            {estados.map((estado, index) => <option key={index}>{estado}</option>)}
          </select>
          <label htmlFor="casa">
            <input
              id="casa"
              name="moradia"
              type="radio"
              value="Casa"
              onChange={ onInputChange }
            />
            Casa
          </label>
          <label htmlFor="apartamento">
            <input
              id="apartamento"
              name="moradia"
              type="radio"
              value="Apartamento"
              onChange={ onInputChange }
            />
            Apartamento
          </label>
        </fieldset>
        <fieldset>
          <textarea
            name="cv"
            value={ cv }
            maxLength="1000"
            placeholder="Resumo do Curriculo"
            onChange={ onInputChange }
            required
          />
          <textarea
            name="cargo"
            value={ cargo }
            maxLength="40"
            placeholder="Cargo"
            onClick={ mouseEnter }
            onChange={ onInputChange }
            required
          />
          <textarea
            name="description"
            value={ description }
            maxLength="500"
            placeholder="Descrição do Cargo"
            onChange={ onInputChange }
            required
          />
        </fieldset>
      </form>
    );
  }
}

export default Form;
