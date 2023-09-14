import React from 'react';
import { TextField } from '@mui/material';
import User from '../../services/User.service.js';


import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';
import { FormatAlignJustify } from '@mui/icons-material';

const mystyle = {
  width: "400px",
  justify:"center",
  textAlign: "center"
}


const FormBooking = () => {
  return (
    <form>
      <div style={{textAlign: "center"}}>
        <span>Veuillez entrer vos informations personnelles : </span>
      </div>
        <MDBInput style={mystyle} label='Nom' type='text' id='form1Example1'  />
        <MDBInput style={{width: "500px"}} className='mb-4' type='text' id='form1Example2' label='Prénom' />
        <MDBInput style={{width: "500px"}} className='mb-4' type='email' id='form1Example2' label='Adresse email' />
     


      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        <MDBCol sm='4'>
          <MDBCard alignment='center' >
            <MDBCardBody>
              <MDBCardTitle>Voyage 1  </MDBCardTitle>
                <MDBCardText>
                  <h3>Programme Pioneer </h3>
                  <h3>125000$</h3>
                    <ul>
                      <li>Vol spatial avec l’avion fusée Lynx Mark I</li>
                      <li>Contrôle médical</li>
                      <li>Entrainement Vol acrobatique</li>
                      <li>Tenue de vol avec badges</li>
                    </ul>   
                </MDBCardText>
              <MDBBtn>Selectionner</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol >
          <MDBCard alignment='center' >
            <MDBCardBody>
              <MDBCardTitle>Voyage 2</MDBCardTitle>
                <MDBCardText>
                  <h3>Programme futur astronaut</h3>
                  <h3>175000$</h3>
                    <ul>
                      <li>Vol spatial avec l’avion fusée Lynx Mark II</li>
                      <li>Contrôle médical</li>
                      <li>Entrainement Vol acrobatique</li>
                      <li>Séjour de 3 nuits dans un hôtel de luxe pour 2</li>
                      <li>Tenue de vol avec badges</li>
                   </ul>   
                </MDBCardText>
              <MDBBtn >Selectionner</MDBBtn>
           </MDBCardBody>
          </MDBCard>
        </MDBCol>
        
        <MDBCol>
          <MDBCard alignment='center' >
            <MDBCardBody>
              <MDBCardTitle>Voyage 3</MDBCardTitle>
                <MDBCardText>
                  <h3>Programme advanced</h3>
                  <h3>200 000$</h3>
                   <ul>
                      <li>Tous les éléments compris dans le programme basique ou avancé</li>
                      <li>Production d’un montage vidéo personnalisé: documentaire.</li>
                      <li>Tenue d’astronaute</li>
                      <li>Entrainement Simulateur de mouvement et de force G</li>
                      <li>Rencontre avec le pilote</li>
                  </ul>   
                </MDBCardText>
              <MDBBtn  >Selectionner</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
    </MDBRow>
<br/><br/><br/>
<div style={{textAlign: "center"}}>
  <span>Veuillez selectionner une date de depart &nbsp;&nbsp;</span>

  <select >
    <option value="0">Selectinnez la date :&nbsp;</option>
    <option value="1">29 fevrier 2035</option>
  </select>
</div>
  </form>
  )
}


export default FormBooking