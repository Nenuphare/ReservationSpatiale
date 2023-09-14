import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const Program = () => {
  return (
<   div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style= {{maxWidth: "500px" }}>
                <div class="d-inline-block rounded-pill text-primary py-1 px-3 mb-3" id='ab'>Nos Programmes</div>
                <h1 class="display-6 mb-5">Ce que nos vous proposons</h1>
            </div>
            <div class="row g-4 justify-content-center">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item bg-white text-center h-100 p-4 p-xl-5">
                        <img class="img-fluid mb-4" src="/img/fusee1.png" />
                        <h4 class="mb-3">Programme Pioneer</h4>
                        <h6 class="mb-3">75.000 €</h6>
                        <p class="mb-4">Vol spatial avec l’avion fusée Lynx Mark I<br></br>
                            Contrôl médical<br></br>
                            Entrainement vol acrobatique<br></br>
                            Tenue de vol sans badges<br></br>
                            Séjour de 1 nuit dans un hôtel de luxe pour 2 personnes<br></br>
                        </p>
                        <Link className ="link" to="/components/Form/Formbooking#reserver">
                        <div class="btn btn-outline-primary px-3">
                            En savoir plus
                            <div class="d-inline-flex btn-sm-square bg-primary rounded-circle ms-2">
                                <i class="fa fa-arrow-right"></i>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item bg-white text-center h-100 p-4 p-xl-5">
                        <img class="img-fluid mb-4" src="/img/fusee2.png" />
                        <h4 class="mb-3">Programme Astronaut</h4>
                        <h6 class="mb-3">125.000 €</h6>
                        <p class="mb-4">Vol spatial avec l’avion fusée Lynx Mark II<br></br>
                            Contrôl médical<br></br>
                            Entrainement vol acrobatique et de force G<br></br>
                            Séjour de 3 nuits dans un hôtel de luxe pour 2 personnes<br></br>
                            Tenue de vol avec badges
                        </p>
                        <Link className ="link" to="/components/Form/Formbooking#reserver">
                        <div class="btn btn-outline-primary px-3">
                            En savoir plus
                            <div class="d-inline-flex btn-sm-square bg-primary rounded-circle ms-2">
                                <i class="fa fa-arrow-right"></i>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item bg-white text-center h-100 p-4 p-xl-5">
                        <img class="img-fluid mb-4" src="/img/fusee3.png" />
                        <h4 class="mb-3">Programme VIP</h4>
                        <h6 class="mb-3">200.000 €</h6>
                        <p class="mb-4">Programme Pioneer + Astronaut<br></br>
                            Production d’un documentaire<br></br>
                            Tenue d’astronaute<br></br>
                            Entrainement simulateur de mouvement et de force G<br></br>
                            Rencontre avec le pilote
                        </p>
                        <Link className ="link" to="/components/Form/Formbooking#reserver">
                        <div class="btn btn-outline-primary px-3">
                            En savoir plus
                            <div class="d-inline-flex btn-sm-square bg-primary rounded-circle ms-2">
                                <i class="fa fa-arrow-right"></i>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Program
