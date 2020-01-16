import React from 'react';
import {
  MDBEdgeHeader,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBIcon,
  MDBAnimation
} from 'mdbreact';
import AccordionN from '../accordioN/Accordion';
import MenuLink from '../../components/menuLink';

const Ambiente = () => {
  return (
    <>
      <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
      <MDBAnimation type='zoomIn' duration='500ms'>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='12' className='mx-auto'>
              <MDBJumbotron className='mt-3'>
                <h1 className='text-center'>
                  <MDBIcon icon='css3' brand className='indigo-text mr-w' />
                  Meus postos
                  </h1>
                <ul className='list-unstyled example-components-list'>

                  <AccordionN />

                </ul>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBAnimation>
    </>
  );
};

export default Ambiente;
