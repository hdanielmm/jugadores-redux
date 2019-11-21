export const QUITAR_TITULAR = 'QUITAR_TITULAR';
export const QUITAR_SUPLENTE = 'QUITAR_SUPLENTE';
export const AGREGAR_TITULAR = 'AGREGAR_TITULAR';
export const AGREGAR_SUPLENTE = 'AGREGAR_SUPLENTE';

const initialState = {
  jugadores: [{
    id: 1,
    nombre: "Carlos",
    foto: "http://comps.canstockphoto.com/can-stock-photo_csp3089403.jpg"
  },
  {
    id: 2,
    nombre: "Pepe",
    foto: "http://comps.canstockphoto.com/can-stock-photo_csp3089403.jpg"
  },
  {
    id: 3,
    nombre: "Juan",
    foto: "http://comps.canstockphoto.com/can-stock-photo_csp3089403.jpg"
  }],
  titulares: [],
  suplentes: []
}

// Recibe estado actual y un objeto "action" que va a cambiar el estado
export const reducerEntrenador = (state = initialState, action) => {

  switch (action.type) {
    case "AGREGAR_TITULAR":
      return {
        ...state,
        titulares: state.titulares.concat(action.jugador),
        jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
      }
    case "AGREGAR_SUPLENTE":
        return {
          ...state,
          suplentes: state.suplentes.concat(action.jugador),
          jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    case "QUITAR_TITULAR":
      return {
        ...state,
        jugadores: state.jugadores.concat(action.jugador),
        titulares: state.titulares.filter(j => j.id !== action.jugador.id)
      }
    case "QUITAR_SUPLENTE":
      return {
        ...state,
        jugadores: state.jugadores.concat(action.jugador),
        suplentes: state.suplentes.filter(j => j.id !== action.jugador.id)
      }
    default:
      console.log("No action passed");
      break;
  }
  return state
}