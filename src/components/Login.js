import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBCardHeader
} from 'mdbreact';
import SectionContainer from '../components/sectionContainer';

const LoginPage = () => {
  return (
    <MDBContainer className='mt-5'>
      <SectionContainer
        header='A gradient login form'
        flexCenter
        className='flex-wrap'
      >
        <MDBCol md='6' className='mt-4'>
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className='form-header warm-flame-gradient rounded'>
                <h3 className='my-3'>
                  <MDBIcon icon='lock' /> Login:
                </h3>
              </MDBCardHeader>
              <label htmlFor='defaultFormEmailEx' className='grey-text font-weight-light'>
                Seu email
              </label>
              <input type='email' id='defaultFormEmailEx' className='form-control' />

              <label htmlFor='defaultFormPasswordEx' className='grey-text font-weight-light'>
                Sua Senha
              </label>
              <input type='password' id='defaultFormPasswordEx' className='form-control' />

              <div className='text-center mt-4'>
                <MDBBtn color='deep-orange' className='mb-3' type='submit'>
                  Login
                </MDBBtn>
              </div>

              <MDBModalFooter>
                <div className='font-weight-light'>
                  <p>Esqueceu a senha?</p>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        
      </SectionContainer>
    </MDBContainer>
  );
};

export default LoginPage;
