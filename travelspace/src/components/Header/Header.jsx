import React from 'react';

const Header = () => {
  return (
        <div class="container-fluid p-0 mb-5">
            <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="w-100" src="https://i.ibb.co/GvtsS7f/642558-voyage-fera-bord-navette-lynx.jpg" alt="Image"/>
                        <div class="carousel-caption">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-7 pt-5">
                                        <h1 class="display-4 text-white mb-3 animated slideInDown">Réservez votre voyage dans l'univers spatio-temporelle</h1>
                                        <p class="fs-5 text-white-50 mb-5 animated slideInDown">Une préparation de 31 jours incluse !</p>
                                        <a class="btn btn-primary py-2 px-3 animated slideInDown" href="404.html">
                                            En savoir plus
                                            <div class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                                <i class="fa fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="w-100" src="https://zupimages.net/up/23/37/kffp.jpg" alt="Image"/>
                        <div class="carousel-caption">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-7 pt-5">
                                        <h1 class="display-4 text-white mb-3 animated slideInDown">Réservez votre voyage dans l'univers spatio-temporelle</h1>
                                        <p class="fs-5 text-white-50 mb-5 animated slideInDown">Une préparation de 31 jours incluse !</p>
                                        <a class="btn btn-primary py-2 px-3 animated slideInDown" href="atelier.html">
                                            En savoir plus
                                            <div class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                                <i class="fa fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
  )
}

export default Header;