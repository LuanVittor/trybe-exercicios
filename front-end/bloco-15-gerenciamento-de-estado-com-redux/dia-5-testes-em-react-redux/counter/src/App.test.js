import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './redux/reducers';
import userEvent from '@testing-library/user-event' 

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });
});

describe('testing if it starts with 10', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 10', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');
    
    userEvent.click(buttonAdicionar)
    userEvent.click(buttonAdicionar)
    userEvent.click(buttonAdicionar)
    userEvent.click(buttonAdicionar)
    userEvent.click(buttonAdicionar)
    userEvent.click(buttonAdicionar)
    userEvent.click(buttonAdicionar)
    userEvent.click(buttonAdicionar)
    userEvent.click(buttonAdicionar)
    userEvent.click(buttonAdicionar)
    userEvent.click(buttonAdicionar)

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('11')).toBeInTheDocument();
  });
});

describe('testing if the button works', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');
    
    userEvent.click(buttonAdicionar)

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('1')).toBeInTheDocument();
  });
});