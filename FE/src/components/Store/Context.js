import { createContext } from 'react';

const StoreContext = createContext({
  token: '',
  setToken: () => {}
});

export default StoreContext;