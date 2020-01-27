import React, { Component } from 'react';
import './Tanque.css'

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBRow,
  MDBCol,
} from "mdbreact";

import AlertaVazamento from './AlertaVazamento'

class CollapsePage extends Component {
  state = {
    collapseID: 'collapse1'
  };

  tanques = [
    { id: 1, nome: 'Tanque 01', tipo: 'Gasolina Adtivada', temperatura: 33.1, nivel: 5633, vazamento: false },
    { id: 2, nome: 'Tanque 02', tipo: 'Gasolina Comum', temperatura: 34.2, nivel: 4524, vazamento: true },
    { id: 3, nome: 'Tanque 03', tipo: 'Gasolina Adtivada', temperatura: 37.1, nivel: 3446, vazamento: false },
    { id: 4, nome: 'Tanque 04', tipo: 'Gasolina Comum', temperatura: 32.2, nivel: 3456, vazamento: false },
  ]

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  render() {
    const { collapseID } = this.state;

    return (
      <React.Fragment>
        {this.tanques.map(tanque =>
          (
            <MDBCol id="tanque" xl="3" key={tanque.id}>
              <MDBCard style={{ marginTop: "1rem" }}>
                <MDBCardHeader color={(tanque.vazamento == true) ? 'red lighten-1' : 'green lighten-1'}>{tanque.nome}
                  - <AlertaVazamento vazamento={tanque.vazamento}/>
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>{tanque.tipo}</MDBCardTitle>
                  <MDBRow size="12">
                    <MDBCol size="4">
                      aqui vai ficar o grafico
                    </MDBCol>
                    <MDBCol id="niveis" size="6">
                      <MDBRow>
                        Nível: {tanque.nivel}
                      </MDBRow>
                      <MDBRow>
                        Temperatura: {tanque.temperatura}
                      </MDBRow>
                      <MDBRow>
                        Vazamento: {tanque.vazamento}
                  </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          )
        )}
      </React.Fragment>
    );
  }
}

export default CollapsePage