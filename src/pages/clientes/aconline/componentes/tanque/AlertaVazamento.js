import React from 'react'

import { MDBAlert } from 'mdbreact'

export default (props) => {
  switch(props.vazamento){
    case true:
      return(<span>Alerta de vazemento</span>)
    case false:
      return(<span></span>)  
  }
}