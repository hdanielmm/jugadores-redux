import React from 'react';
import { connect } from 'react-redux';
import {quitarTitular} from '../actions/actionCreators';

const Titulares = ({ titulares, quitarTitular }) => (
  <section>
    <h2>Titulares</h2>
    <div className="cancha">
      {
        titulares.map(j => (
          <article className="titular" key={j.id}>
            <div>
              <h3>{j.nombre}</h3>
              <img src={j.foto} alt={j.nombre} />
              <button onClick={() => quitarTitular(j)}>X</button>
            </div>
          </article>
        ))
      }
    </div>
  </section>
)

const mapStateToProps = state => ({
  titulares: state.titulares
});

const mapDispatchToProps = dispatch => {
  return {
    quitarTitular: jugador => {
      dispatch(quitarTitular(jugador));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);