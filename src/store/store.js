import { createStore } from 'redux';
import { reducerEntrenador } from '../reducers/reducerEntrenador';

// Recibe la función reductora
export default createStore(reducerEntrenador)