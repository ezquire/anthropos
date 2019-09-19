import {
  SIGNED_IN
} from '../constants'; 

export const logUser = email => ({
  type: SIGNED_IN,
  email
});

export * from './transactions';
export * from './accounts';