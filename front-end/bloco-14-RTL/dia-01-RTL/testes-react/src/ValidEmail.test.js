import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

describe('Testando o componente ValidEmail', () => {

it('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

it('Testa se não aparece mensagem caso não seja enviado nenhum valor', () => {
  render(<ValidEmail email={ '' } />);
  const isValid = screen.queryByText('Email Válido');
  const isInvalid = screen.queryByText('Email Inválido');
  expect(isValid).not.toBeInTheDocument();
  expect(isInvalid).not.toBeInTheDocument();
});

it('Testa se no caso de um Email Válido o texto é verde', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.queryByText('Email Válido');
  expect(isValid.style.color).toBe('green');
});

it('Testa se no caso de um Email Inválido o texto é vermelho', () => {
  const EMAIL_USER = 'email';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isInvalid = screen.queryByText('Email Inválido');
  expect(isInvalid.style.color).toBe('red');
});

});