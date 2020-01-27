import React from 'react';
import {
  MDBCard,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBNav,
  MDBIcon,
  MDBNavItem,
  MDBNavLink,
  MDBCardText,
  MDBFreeBird,
  MDBCardBody,
  MDBContainer,
  MDBListGroup,
  MDBCardTitle,
  MDBCardImage,
  MDBAnimation,
  MDBCardGroup,
  MDBEdgeHeader,
  MDBCardHeader,
  MDBCardFooter,
  MDBSimpleChart,
  MDBListGroupItem,
} from 'mdbreact';
import './Bomba.css'

class Bomba extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  tanques = [
    { nome: "Tanque 01", nivel: 6704, temperatura: 33, agua: 0, vazamento: false },
    { nome: "Tanque 02", nivel: 7765, temperatura: 34, agua: 1.34, vazamento: true },
    { nome: "Tanque 03", nivel: 1233, temperatura: 35, agua: 0, vazamento: false },
    { nome: "Tanque 04", nivel: 7886, temperatura: 33, agua: 0, vazamento: false }
  ]

  render() {
    return (
      <>
        <div className='mt-3 mb-5'>
          <MDBContainer>
            <MDBRow >
              <MDBCol md='12' className='mt-4'>
                <MDBRow id='categories'>

                  {this.tanques.map((tanque) => {
                    return (
                      <MDBCol md='4'>
                        <MDBAnimation reveal type='fadeInLeft'>
                          <MDBCard cascade className='my-3 grey lighten-4'>


                            <MDBCardHeader color={(tanque.vazamento == false) ? 'success-color lighten-1' : 'danger-color lighten-1'}>{tanque.nome}
                              {((tanque.vazamento == true) ? <i> - SINAIS DE VAZAMENTO {tanque.agua} L </i> : '')}
                            </MDBCardHeader>
                            <br></br>
                            <MDBRow>

                              <MDBCol ms='4'>
                                <MDBSimpleChart
                                  width={100}
                                  height={100}
                                  strokeWidth={10}
                                  percent={56}
                                  strokeColor='#4FB64E'
                                />
                              </MDBCol>
                              <MDBCol ms='4'>

                                <MDBCardText>
                                  <p>
                                    <strong>TEMPERATURA:</strong> {tanque.temperatura}
                                  </p>
                                  <p>
                                    <strong>NÍVEL:</strong> {tanque.nivel} L
                                  </p>
                                  <p>
                                    <strong>Água:</strong> {tanque.agua} L
                                  </p>
                                </MDBCardText>
                              </MDBCol>

                            </MDBRow>


                            <MDBCardBody cascade className='text-center'>
                              <MDBCardTitle>
                                <MDBIcon
                                  icon='css3'
                                  brand
                                  className='pink-text pr-2'
                                />
                                <strong>Info</strong>
                              </MDBCardTitle>
                              <MDBCardText>
                                Informações
                            </MDBCardText>
                            </MDBCardBody>
                          </MDBCard>
                        </MDBAnimation>
                      </MDBCol>
                    )
                  })}
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}

export default Bomba;
