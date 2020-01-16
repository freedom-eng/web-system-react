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

  bombas = [
    { nome: "Bomba 01", nivel: 6704, temperatura: 33, vazamento: false },
    { nome: "Bomba 02", nivel: 7765, temperatura: 34, vazamento: true },
    { nome: "Bomba 03", nivel: 1233, temperatura: 35, vazamento: false },
    { nome: "Bomba 04", nivel: 7886, temperatura: 33, vazamento: false }
  ]

  render() {
    return (
      <>
        <div className='mt-3 mb-5'>
          <MDBContainer>
            <MDBRow >
              <MDBCol md='12' className='mt-4'>
                <MDBRow id='categories'>

                  {this.bombas.map((bomba) => {
                    return (
                      <MDBCol md='4'>
                        <MDBAnimation reveal type='fadeInLeft'>
                          <MDBCard cascade className='my-3 grey lighten-4'>


                            <MDBCardHeader color='success-color lighten-1'>{bomba.nome}</MDBCardHeader>
                            <br></br>
                            <MDBCol sm='4'>
                              <MDBSimpleChart
                                width={100}
                                height={100}
                                strokeWidth={10}
                                percent={56}
                                strokeColor='#4FB64E'
                              />
                            </MDBCol>


                            <MDBCardBody>
                              <MDBCardTitle></MDBCardTitle>
                              <MDBCardText>
                                <h3>TEMPERATURA: {bomba.temperatura}</h3>
                                <h3>NÍVEL: {bomba.nivel}</h3>
                              </MDBCardText>
                              <MDBBtn color='deep-orange'>Relatório</MDBBtn>
                            </MDBCardBody>


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
