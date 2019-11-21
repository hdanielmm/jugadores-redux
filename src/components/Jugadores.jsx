import React from 'react';
import { connect } from 'react-redux';
import { agregarTitular } from '../actions/actionCreators';
import { agregarSuplente } from '../actions/actionCreators';

const Jugadores = ({ jugadores, agregarTitular, agregarSuplente }) => (
  <section>
    <h2>Jugadores</h2>
    <div className="contenedor-jugadores">
      {
        jugadores.map(j => (
          <article className="jugador" key={j.id}>
            <h3>{j.nombre}</h3>
            <img src={j.foto} alt={j.nombre}></img>
            <div>
              <button onClick={() => agregarTitular(j)}>Titular</button>
              <button onClick={() => agregarSuplente(j)}>Suplente</button>
            </div>
          </article>
        ))
      }
    </div>
  </section>
)

// recibe el estado y con el estado retorna un objeto
const mapStateToProps = state => ({
  jugadores: state.jugadores
})

const mapDispatchToProps = dispatch => ({
  agregarTitular(jugador) {
    dispatch(agregarTitular(jugador));
  },
  agregarSuplente(jugador) {
    dispatch(agregarSuplente(jugador));
  }
})

// Así se conecta el componente con el store
// connect recibe dos funciones, la primera mapea lo que hay en el estado y lo convierte en propiedades, la
// segunda mapea las funciones dispatchs y también las convierte en propiedades, esas dos funciones reciben 
// nuestro connect, entonces hay que declarar estas dos funciones. Esta funciones pueden ser vacíos si no las
// vamos a utilizar 
export default connect(mapStateToProps, mapDispatchToProps)(Jugadores)