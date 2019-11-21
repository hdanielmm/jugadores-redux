import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Jugadores from './components/Jugadores';
import EquipoSeleccionado from './components/EquipoSeleccionado';
import './styles/style.scss';

const App = () => (
  <Provider store={store}>
    <main>
      <h1>EDManager</h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
  </Provider>
)

export default App;
