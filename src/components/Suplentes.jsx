import React from 'react';
import { connect } from 'react-redux';
import { quitarSuplente } from '../actions/actionCreators';

const Suplentes = ({suplentes, quitarSuplente}) => (
  <section>
    <h2>Suplentes</h2>
    <div className="suplentes">
      {
        suplentes.map(j => (
          <article className="suplente" key={j.id}>
            <h3>{j.nombre}</h3>
            <div>
              <img src={j.foto} alt={j.nombre} />
              <button onClick={() => quitarSuplente(j)}>X</button>
            </div>
          </article>
        ))
      }
    </div>
  </section>
)

const mapStateToProps = state => ({
  suplentes: state.suplentes
});

const mapDispatchToProps = dispatch => ({
  quitarSuplente(jugador){
    dispatch(quitarSuplente(jugador));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);