import { createReducer, on } from '@ngrx/store';
import { addCredentials, removeCredentials } from '../actions/user.actions';

export const initialState = {
    username: null,
    role: null
};

export const userReducer = createReducer(initialState,
  on(addCredentials, (state, payload) => {
      console.log(payload)
      return {
          username: payload.username,
          role: payload.role
      }
  }),
  on(removeCredentials, (state, payload) => {
      return {
          username: null,
          role: null
      }
  }),

);
