import { createStore } from 'redux';
import { state } from './initialState';
import { reducer } from './reducer';

export const store = createStore(reducer, state);
