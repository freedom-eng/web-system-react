import React, { Component } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCollapseHeader,
  MDBIcon,
  MDBCardImage,
  MDBView,
  MDBRow,
  MDBCol,
  MDBNavLink,
  MDBNav
} from 'mdbreact';
import Bomba from './../../components/bomba/Bomba';
import './Accordion.css'
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

class AccordionN extends Component {
  state = {
    collapseID: 'collapse3'
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  render() {
    const { collapseID } = this.state;
    const resetPadding = {
      padding: '0'
    };
    return (
      <MDBContainer>

        <MDBCard className='mt-3'>
          <MDBCollapseHeader onClick={this.toggleCollapse('collapse1')}>
            Posto 01 Ipiranga  <span id="title"> - Rua Senador Álvaro Adolfo, 1788 </span>
              <i className={collapseID === 'collapse1' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'} />
          </MDBCollapseHeader>
          <MDBCollapse id='collapse1' isOpen={collapseID}>
            <MDBCardBody>
              <Bomba />
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard>
          <MDBCollapseHeader onClick={this.toggleCollapse('collapse2')}>
            Posto 02 Petrobras  <span id="title"> - BR 116 km 26 </span>
              <i className={collapseID === 'collapse2' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'} />
          </MDBCollapseHeader>
          <MDBCollapse id='collapse2' isOpen={collapseID}>
            <MDBCardBody>
              Vazio
              </MDBCardBody>
          </MDBCollapse>
        </MDBCard>
      </MDBContainer>
    );
  }
}

export default AccordionN;
