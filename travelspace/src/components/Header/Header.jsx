import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

const Header = () => {
  return (
  <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://i.ibb.co/GvtsS7f/642558-voyage-fera-bord-navette-lynx.jpg'
        alt='...'
      >
        <h5>Travel Space - PROGRAMME PIONEER</h5>
        <p>Premier programme de vol XCOR avec l’avion fusée Lynx Mark I</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://zupimages.net/up/23/37/kffp.jpg'
        alt='...'
      >
        <h5>Travel Space - PROGRAMME FUTURE ASTRONAUT</h5>
        <p>Vol spatial avec l’avion fusée Lynx Mark II</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://zupimages.net/up/23/37/k9um.jpeg'
        alt='...'
      >
        <h5>Travel Space - PROGRAMME ADVANCED</h5>
        <p>Tous les éléments compris dans le programme Pioneer ou Future Astronaut</p>
      </MDBCarouselItem>
    </MDBCarousel>
  )
}

export default Header;