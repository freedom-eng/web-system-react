import React, { Component } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCollapseHeader,
  MDBCardImage,
  MDBRow,
  MDBView
} from 'mdbreact';

class CollapsePage extends Component {
  state = {
    collapseID: 'collapse1'
  };

  tanques = [
    { id: 1, nome: 'Tanque 01', temperatura: 33.1, nivel: 5633 },
    { id: 2, nome: 'Tanque 02', temperatura: 34.2, nivel: 4524 },
    { id: 3, nome: 'Tanque 03', temperatura: 37.1, nivel: 3446 },
    { id: 4, nome: 'Tanque 04', temperatura: 32.2, nivel: 3456 },
  ]

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  render() {
    const { collapseID } = this.state;

    return (
      <MDBContainer>
        {this.tanques.map(tanque =>
          (

            <MDBContainer className='accordion md-accordion accordion-1'>
              <MDBCard style={{ backgroundColor: 'transparent' }}>
                <MDBCollapseHeader
                  onClick={this.toggleCollapse(`${tanque.id}`)}
                  className='green lighten-1 z-depth-5'
                >
                  <span className='white-text font-weight-bold'>
                    {tanque.nome} -  Nível: {tanque.nivel} L - Temperatura: {tanque.temperatura}
                  </span>
                </MDBCollapseHeader>
                <MDBCollapse id={`${tanque.id}`} isOpen={collapseID}>
                  <MDBCardBody>
                    <MDBRow className='my-4'>
                      <MDBCol md='12'>
                        <p className='mb-0 '>
                          Temperatura: {tanque.temperatura}
                          Nível: {tanque.nivel}
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>

            </MDBContainer>

          )
        )}

      </MDBContainer>
    );
  }
}

export default CollapsePage;