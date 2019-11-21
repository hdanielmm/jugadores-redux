const QUITAR_TITULAR = 'QUITAR_TITULAR';
const QUITAR_SUPLENTE = 'QUITAR_SUPLENTE';
const AGREGAR_TITULAR = 'AGREGAR_TITULAR';
const AGREGAR_SUPLENTE = 'AGREGAR_SUPLENTE';

export const quitarTitular = (jugador) => {
  return {
    type: QUITAR_TITULAR,
    jugador
  }
}

export const quitarSuplente = (jugador) => {
  return {
    type: QUITAR_SUPLENTE,
    jugador
  }
}

export const agregarTitular = (jugador) => {
  return {
    type: AGREGAR_TITULAR,
    jugador
  }
}

export const agregarSuplente = jugador => {
  return {
    type: AGREGAR_SUPLENTE,
    jugador
  }
}
