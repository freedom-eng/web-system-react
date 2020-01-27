import React from 'react'

import './Posto.css'

import Tanque from '../tanque/Tanque'

import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBRow } from "mdbreact";

const postos = [
  { id: 1, nome: 'Posto 01', endereco: 'BR 116 - KM 13, 2213' },
  { id: 2, nome: 'Posto 02', endereco: 'AV Joao Brito, 4422' },
  { id: 3, nome: 'Posto 03', endereco: 'Rua Coronel Carvalho, 221' },
  { id: 4, nome: 'Posto 04', endereco: 'AV 13 de Maio, 3441' },
  { id: 5, nome: 'Posto 05', endereco: 'BR 116 - KM 42, 2313' }
]

export default () => (
  <React.Fragment>
    <div id="postos">
      <MDBDropdown>
        <MDBDropdownToggle caret color="info" className="h-100">
          Selecione o Postos
        </MDBDropdownToggle>
        <MDBDropdownMenu basic color="info">
          {postos.map(posto => (
            <MDBDropdownItem key={posto.id}>{posto.nome} - {posto.endereco}</MDBDropdownItem>
          ))}
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
    <MDBContainer>
      <MDBRow>
        <Tanque />
      </MDBRow>
    </MDBContainer>
  </React.Fragment>
)



