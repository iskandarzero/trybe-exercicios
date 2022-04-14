import React from 'react';

class Div extends React.Component {
  render() {
    const {userName, email, CPF, address, city, estado, moradia, cv, cargo, description} = this.props;
    return (
      <div>
        {userName ? (
          <>
            <p>{userName}</p>
            <p>{email}</p>
            <p>{CPF}</p>
            <p>{`${address} ${city}-${estado} ${moradia}`}</p>
            <p>{cv}</p>
            <p>{cargo}</p>
            <p>{description}</p>
          </>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Div;
